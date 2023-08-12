var express = require("express");
var mysql = require("mysql");
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const credencialesDB = {
	user:"root",
	host:"localhost",
	password:"",
	port:"3306",
	database:"db_twitter"
};
var mysqlConexion = mysql.createConnection(credencialesDB);

//Brayan: Request para acceder al index.html del sitio web
app.get("/",function(request, response){
	fs.readFile("./public/index.html",function(err, data){
		response.send(data);
	});
});

//Brayan: Request para verificar si un usuario existe
app.get("/verificarUsuario/:nombreUsuario/:contrasenia",function(request, response){
	const { nombreUsuario, contrasenia } = request.params;
	var conexion2 = mysql.createConnection(credencialesDB);
    const sqlUsuario = 'select count(1) cantidadUsuarios '+
					  'from tbl_usuarios '+
					  'where nickname = ? and contrasena = ?;';
    
    //verificamos si existe el usuario
    mysqlConexion.query(sqlUsuario, [nombreUsuario, contrasenia])
    .on('result', function(respuesta) {
        if(respuesta.cantidadUsuarios == 1){
        	mysqlConexion.pause();
			const sqlInformacionPersonal = 'select codigo_usuario as codigoUsuario, '+
													'concat(nombre," ", apellido) as nombreUsuario, '+
													'nickname as aliasUsuario, '+
													'cantidad_tweets as cantidadTweets, '+
													'followers as cantidadSeguidores, '+
													'following as cantidadSeguidos, '+
													'url_imagen_perfil as imagenPerfil '+
											'from tbl_usuarios '+
											'where nickname = ?;';
			//Obtenemos la lista de los comentarios de primer registro de la lista de los memes
	        conexion2.query(sqlInformacionPersonal, [nombreUsuario])
	        .on('result', function(informacionPersonal) {
				response.send({existeUsuario: true, ...informacionPersonal});
	        })
	        .on('end', function() {
	            mysqlConexion.resume();
	        });
		}
		else
			response.send({existeUsuario: false});
    })
    .on('end', function() {
        conexion2.end();
    });
});

//Brayan: Request para obtener la lista de tweets de un usuario en especifico
app.get("/obtenerListaTweets/:codigoUsuario", function(request, response){
	const {codigoUsuario} = request.params;
	const sqlTweets = 'SELECT  a.codigo_tweet as codigoTweet, '+
								'b.nombre as nombreUsuario, '+
						        'b.nickname as aliasUsuario, '+
								'a.codigo_usuario as codigoUsuario, '+
						        'a.contenido as contenidoTweet, '+
						        'a.hashtags as hashtagsTweet, '+
						        'a.fecha as fechaTweer, '+
						        'b.url_imagen_perfil as imagenPerfilUsuario '+
						'FROM tbl_tweets a '+
						'INNER JOIN tbl_usuarios b '+
						'ON (a.codigo_usuario = b.codigo_usuario) '+
						'WHERE a.codigo_usuario = ? '+
						'OR a.codigo_usuario in ( select codigo_usuario_sigue from tbl_seguidores where codigo_usuario  = ? ) '+
						'ORDER BY a.fecha DESC;';
	mysqlConexion.query(sqlTweets, [codigoUsuario, codigoUsuario], function(error, data){
		if (error) throw error;
		response.send(data);		
	});
});

//Brayan: Request para obtener la lista de hashtag trends
app.get("/obtenerListaHashTagsTrends", function(request, response){
	const sqlHashTagsTrends = 'select codigo_hashtag as codigoHashTag, '+
	   								 'hashtag as hashTag, '+
       								 'cantidad_tweets as cantidadTweets '+
							  'from tbl_hashtags_trends';
	mysqlConexion.query(sqlHashTagsTrends, function(error, data){
		if (error) throw error;
		response.send(data);		
	});
});

//Brayan: Request que permite registrar un nuevo tweet
app.post("/registrarTweet", function(request, response){
	const { codigoUsuario, contenidoTweet, hashtagsTweet } = request.body;
	const sqlHashTagsTrends = 'INSERT INTO tbl_tweets ( codigo_tweet, codigo_usuario, contenido, hashtags, fecha ) '+
							  'VALUES ( NULL, ?, ?, ?, NOW() );';
	mysqlConexion.query(sqlHashTagsTrends, [codigoUsuario, contenidoTweet, hashtagsTweet], function(errorInsert, dataInsert){
		if (errorInsert) 
			throw errorInsert;
		else{
			if (dataInsert.affectedRows==1){
				const sqlHashTag = 'SELECT  a.codigo_tweet as codigoTweet, '+
											'b.nombre as nombreUsuario, '+
									        'b.nickname as aliasUsuario, '+
											'a.codigo_usuario as codigoUsuario, '+
									        'a.contenido as contenidoTweet, '+
									        'a.hashtags as hashtagsTweet, '+
									        'a.fecha as fechaTweer, '+
									        'b.url_imagen_perfil as imagenPerfil '+
									'FROM tbl_tweets a '+
									'INNER JOIN tbl_usuarios b '+
									'ON (a.codigo_usuario = b.codigo_usuario) '+
									'WHERE a.codigo_tweet = ?;';
				mysqlConexion.query(sqlHashTag, [dataInsert.insertId], function(errorSelect, dataSelect){
					if (errorSelect) throw errorSelect;
					response.send(dataSelect[0]);		
				});
			}
		}
	});
});

app.listen(3000);