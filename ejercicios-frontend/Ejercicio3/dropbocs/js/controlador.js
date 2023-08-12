$(document).ready(function(){
	console.log("El DOM ha sido cargado");
	console.log("Carpeta actual: " + $("#txt-carpeta-actual").val());
});

function detalleRegistro(){
	alert("Mostrar ventana modal con el detalle del registro, modifique esta funcion para que reciba todos los datos del registro como parametro y los muestre en una ventana modal. En este caso no necesita hacer peticion AJAX");
	$("#modal-detalle").modal("show");
}