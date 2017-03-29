// OBJETO CONSTRUCTOR
function usuario (nombre, apellido, correo, contraseña){
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
document.getElementById("registrar").addEventListener("click",function(e){
	e.preventDefault();

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var correo = document.getElementById("correo");
	var contraseña = document.getElementById("contraseña");
	var array = document.getElementsByClassName("input-registro");
	var indicacionesGenerales = document.getElementById("indicaciones-generales");

	//Aplicando la funcion camposVacios a todos los input del formulario
	for(i = 0 ; i < array.length; i++){
		array[i].addEventListener("blur", camposVacios);
	}
	//Validando que todos los campos esten llenos
	if(nombre.value.length !=0 && apellido.value.length != 0 && correo.value.length != 0 && contraseña.value.length != 0){
		var nuevoUsuario = new Usuario(nombre, apellido, correo, contraseña);

	}else{
		indicacionesGenerales.innerHTML = "*Todos los campos son obligatorios.</br>";
	}	
});
//validando correo
var correo = document.getElementById("correo");
var errorEmail = document.getElementById("messageEmail");
	correo.onkeypress= function (){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if( ! (re.test(correo.value))){
    		errorEmail.innerHTML = "<br>Verificar que el email tenga un formato válido. Ej: name@domain.com";
    		correo.focus();
    	}
	};

document.getElementById("bienvenida-iniciarSesion").addEventListener("click",function(e){
	alert("chau");
});