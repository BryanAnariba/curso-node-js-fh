$("#btn-login").click(function(){
	$("#form-login").fadeOut(50);
	$("#user-details").html("Mostrar esto en caso de que el usuario se haya logeado con exito, mostrar su nombre.");
	$("#user-details").fadeIn(50);
});

$("#btn-agregar-lista").click(function(){
	alert("Agregar una lista con el titulo " + $("#txt-texto-tarjeta").val());
});

function agregarTarjeta(numeroLista){
	alert("Ejecutar peticion AJAX para agregar tarjeta a la lista: " + numeroLista + ", El contenido de la tarjeta es: "+$("#txt-tarjeta-lista-" + numeroLista).val());
}

