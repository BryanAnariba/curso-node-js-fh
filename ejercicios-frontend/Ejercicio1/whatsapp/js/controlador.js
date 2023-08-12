$("#slc-usuario").change(function(){
	alert("USUARIO seleccionado: " + $("#slc-usuario").val());
});

function seleccionarContacto(codigoContacto, nombreContacto){
	alert("CONTACTO seleccionado: " + codigoContacto + ", Nombre: " + nombreContacto);
}

$("#btn-enviar").click(function(){
	alert("Enviar mensaje: " + $("#txta-mensaje").val());
});
