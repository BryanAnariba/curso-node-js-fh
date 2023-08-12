$(document).ready(function(){
	console.log("El DOM ha sido cargado");
});

$("#btn-login").click(function(){
	//Ejecutar esto en caso de que el login sea exitoso. Escribir el codigo del usuario logueado en un input oculto.
	$("#div-login").fadeOut(200,function(){
		$("#div-detalles-usuario").fadeIn(200);
	});
	$("#tweets").fadeIn(100);
	$("#navbar-user-section").fadeIn(100);	
});

$("#btn-logout").click(function(){
	//Ejecutar esto en caso de que el login sea exitoso. Escribir el codigo del usuario logueado en un input oculto.
	$("#div-detalles-usuario").fadeOut(200,function(){
		$("#div-login").fadeIn(200);
	});
	$("#tweets").fadeOut(100);
	$("#navbar-user-section").fadeOut(100);	
});


