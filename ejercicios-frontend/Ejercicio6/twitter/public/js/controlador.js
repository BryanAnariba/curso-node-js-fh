//Brayan: Funcion que se ejecuta cuando el DOM ha sido cargado
$(document).ready(function(){
	//Obtenemos la lista de hashtag con tendencia
	$.ajax({
		url: '/obtenerListaHashTagsTrends',
		dataType:"json",
		method:"GET",
		success:function(listaHashTagsTrends){
			var htmlHashTagsTrends = '';
			for(var i = 0; i<listaHashTagsTrends.length; i++)
				htmlHashTagsTrends += '<div><span class="blue-text">'+listaHashTagsTrends[i].hashTag+'</span> <small>'+listaHashTagsTrends[i].cantidadTweets+' tweets</small></div> ';
			$('#hashTagsTrends').html(htmlHashTagsTrends);
		}
	});
});

//Brayan: Funcion que se ejecuta al dar click al boton de iniciar sesion
$("#btn-login").click(function(){
	//Validamos si los campos contienen valores
	if($('#txtAliasUsuario').val() != '' && $('#txtContrasenia').val() != ''){
		$.ajax({
			url: '/verificarUsuario/'+$('#txtAliasUsuario').val()+'/'+$('#txtContrasenia').val(),
			dataType:"json",
			method:"GET",
			success:function(respuesta){
				if(respuesta.existeUsuario){
					$("#div-login").fadeOut(200,function(){
						$("#div-detalles-usuario").fadeIn(200);
					});
					$("#tweets").fadeIn(100);
					$("#navbar-user-section").fadeIn(100);
					$( "#txtContenidoTweet" ).prop( "disabled", false );
					$( "#txtHashTagTweet" ).prop( "disabled", false );
					$( "#btnNuevoTweet" ).prop( "disabled", false );

					//Renderizamos la informacion personal del usuario
					$('#codigoUsuario').val(respuesta.codigoUsuario);
					$('#lblNombreUsuario').text(respuesta.nombreUsuario);
					$('#lblAliasUsuario').text(respuesta.aliasUsuario);
					$('#lblCantidadTweets').text(respuesta.cantidadTweets);
					$('#lblCantidadSiguidos').text(respuesta.cantidadSeguidos);
					$('#lblCantidadSeguidores').text(respuesta.cantidadSeguidores);
					$("#imgImagenPerfil").attr("src", respuesta.imagenPerfil);
					$("#imgImagenUsuarioLogueado").attr("src", respuesta.imagenPerfil);
					obtenerListaTweets(respuesta.codigoUsuario);
				}
				else
					$('#lblAvisoCredencialesIncorrectas').fadeIn(100);
			}
		});
	}
	else
		$('#lblAvisoCredencialesIncorrectas').fadeIn(100);
});

//Brayan: Funcion que se ejecuta al dar click al boton de cerra sesion
$("#btn-logout").click(function(){
	$('#tweets').html('');
	$('#lblAvisoCredencialesIncorrectas').fadeOut(100);
	$('#txtAliasUsuario').val('');
	$('#txtContrasenia').val('');
	$('#txtContenidoTweet').val('');
	$('#txtHashTagTweet').val('');
	//Ejecutar esto en caso de que el login sea exitoso. Escribir el codigo del usuario logueado en un input oculto.
	$("#div-detalles-usuario").fadeOut(200,function(){
		$("#div-login").fadeIn(200);
	});
	$("#tweets").fadeOut(100);
	$("#navbar-user-section").fadeOut(100);

});

//Brayan: Funcion que sustituye los chortcuts por etiquetas de tipo imagen
function analizarContenidoTweet(contenidoTweet){
	contenidoTweet = contenidoTweet.replace(':)', '<img src="img/emojis/emoji1.png"></img>');
	contenidoTweet = contenidoTweet.replace('XD', '<img src="img/emojis/emoji2.png"></img>');
	contenidoTweet = contenidoTweet.replace('xd', '<img src="img/emojis/emoji2.png"></img>');
	contenidoTweet = contenidoTweet.replace(':P', '<img src="img/emojis/emoji3.png"></img>');
	contenidoTweet = contenidoTweet.replace(':p', '<img src="img/emojis/emoji3.png"></img>');
	contenidoTweet = contenidoTweet.replace(':(', '<img src="img/emojis/emoji4.png"></img>');
	contenidoTweet = contenidoTweet.replace(':*', '<img src="img/emojis/emoji5.png"></img>');
	contenidoTweet = contenidoTweet.replace('X_X', '<img src="img/emojis/emoji6.png"></img>');
	contenidoTweet = contenidoTweet.replace('x_x', '<img src="img/emojis/emoji6.png"></img>');
	contenidoTweet = contenidoTweet.replace('|**|', '<img src="img/emojis/emoji7.png"></img>');
	return contenidoTweet;
}

//Brayan: Funcion que obtiene todas las etiquetas necesarias para renderizar un tweet
function obtenerTagTweet(nombreUsuario, aliasUsuario, imagenPerfilUsuario, contenidoTweet, hashtagsTweet){
	var tagTweet = '<div class="row component text-left"> '+
					    '<div class="col-lg-2"> '+
					      '<img src = "'+imagenPerfilUsuario+'" class="img-fluid rounded-circle img-thumbnail"> '+
					    '</div> '+
					    '<div class="col-lg-10"> '+
					      '<b>'+nombreUsuario+'</b> '+aliasUsuario+' '+
					      '<div class="tweet-content"> '+analizarContenidoTweet(contenidoTweet)+
					          '<div> '+
								  '<small class="blue-text">'+hashtagsTweet+'</small> '+
							  '</div> '+
							  '<div><button class="btn btn-link" onclick="like();"><i class="far fa-thumbs-up"></i></button><small>123</small></div>'+
					      '</div> '+
					    '</div> '+
					'</div> ';
	return tagTweet;
}

//Brayan: Funcion que obtiene la lista de tweets del usuario logueado
function obtenerListaTweets(codigoUsuario){
	$.ajax({
		url: '/obtenerListaTweets/'+codigoUsuario,
		dataType:"json",
		method:"GET",
		success:function(listaTweets){
			var htmlTweets = '';
			for(var i = 0; i<listaTweets.length; i++)
				htmlTweets += obtenerTagTweet(listaTweets[i].nombreUsuario, listaTweets[i].aliasUsuario, listaTweets[i].imagenPerfilUsuario, listaTweets[i].contenidoTweet, listaTweets[i].hashtagsTweet);
			$('#tweets').html(htmlTweets);
		}
	});
}

//Brayan: Funcion que registra un Tweet
function registrarTweet(){
	if($('#codigoUsuario').val() != '' && $('#txtContenidoTweet').val() != '' && $('#txtHashTagTweet').val() != ''){
		$.ajax({
			url: '/registrarTweet',
			dataType:"json",
			method:"POST",
			data: {
				codigoUsuario: $('#codigoUsuario').val(),
				contenidoTweet: $('#txtContenidoTweet').val(),
				hashtagsTweet: $('#txtHashTagTweet').val()
			},
			success:function(respuesta){
				$('#tweets').prepend(obtenerTagTweet(respuesta.nombreUsuario, respuesta.aliasUsuario, respuesta.imagenPerfil, respuesta.contenidoTweet, respuesta.hashtagsTweet));
				contenidoTweet: $('#txtContenidoTweet').val('');
				hashtagsTweet: $('#txtHashTagTweet').val('');
			}
		});
	}
}

function like(){
	alert("Like");
}