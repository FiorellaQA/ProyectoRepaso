// OBJETO CONSTRUCTOR
function Usuario (nombre, apellido, correo, contraseña){
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contraseña = contraseña;	
}

function camposVacios(){
	var indicacionesGenerales = document.getElementById("indicaciones-generales");

	if(this.value.trim().length === 0){
		this.nextElementSibling.innerHTML = "</br>*Este campo es obligatorio";
	}else{
		this.nextElementSibling.innerHTML = "";		
	}
	indicacionesGenerales.innerHTML = "";

	//CONVIERTE LA PRIMERA LETRA DE 2 O MAS PALABRAS A MAYUSCULA
	if(this.getAttribute("type")=="text"){
		var arrayDato = this.value.split(" ");
		var strMayus = "";
		for(var i = 0; i<arrayDato.length;i++){
				strMayus += arrayDato[i].charAt(0).toUpperCase() + arrayDato[i].substring(1).toLowerCase() + " ";
		}
		this.value=strMayus;
	}
}

document.getElementById("bienvenida-registrar").addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("inicio").style.display = "none";
	document.getElementById("form-registro").style.display = "block";
});
document.getElementById("registrar").addEventListener("click",validacionInicial);
function validacionInicial(e){
	e.preventDefault();

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var correo = document.getElementById("correo").value;
	var contraseña = document.getElementById("contraseña").value;
	
	var indicacionesGenerales = document.getElementById("indicaciones-generales");

	//Validando que todos los campos esten llenos
	if(nombre.length !=0 && apellido.length != 0 && correo.length != 0 && contraseña.length != 0){
		var nuevoUsuario = new Usuario(nombre, apellido, correo, contraseña);
		localStorage.setItem("data",JSON.stringify(nuevoUsuario));
		document.getElementById("form-registro").style.display = "none";
		document.getElementById("print-usuario").style.display = "block";
		printUsuario();

	}else{
		indicacionesGenerales.innerHTML = "*Todos los campos son obligatorios.</br>";
	}	
}

//Aplicando la funcion camposVacios a todos los input del formulario
var array = document.getElementsByClassName("input-registro");
	for(i = 0 ; i < array.length; i++){
		array[i].addEventListener("blur", camposVacios);
	}
//validando correo
var correo = document.getElementById("correo");
var errorEmail = document.getElementById("messageEmail");
	correo.onblur= function (){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if( ! (re.test(correo.value))){
    		errorEmail.innerHTML = "<br>Verificar que el email tenga un formato válido. Ej: name@domain.com";
    		correo.focus();
    		return false;
    	}else{
    		return true;
    	}
	};

// Validando password
var contraseña = document.getElementById("contraseña");
var errorContraseña = document.getElementById("messageContraseña");
contraseña.onblur = function(){
	if(! (contraseña.value.length <=20 && contraseña.value.length >=6)){
		errorContraseña.innerHTML = "<br> La contraseña debe tener entre 6 y 20 caracteres.";
		contraseña.focus();
		return false;
	}else{
		return true;
	}
};
function printUsuario(){
	var nombre = document.getElementById("nombre-usuario");
	var apellido = document.getElementById("apellido-usuario");
	var correo = document.getElementById("correo-usuario");
	var contraseña = document.getElementById("contraseña-usuario");
	var objetoUsuario = JSON.parse(localStorage.getItem("data"));
	//Imprimimos en el <span>
	nombre.innerHTML = objetoUsuario.nombre;
	apellido.innerHTML = objetoUsuario.apellido;
	correo.innerHTML = objetoUsuario.correo;
	contraseña.innerHTML = objetoUsuario.contraseña;
}
document.getElementById("bt-edit").addEventListener("click",function(e){
	e.preventDefault();

	var form_print = document.getElementById("print-usuario");
	form_print.style.display = "none";
	var form_editando = document.getElementById("form-registro");
	form_editando.style.display = "block";

	validacionInicial();
});

document.getElementById("bienvenida-iniciarSesion").addEventListener("click",function(e){
	alert("chau");
});