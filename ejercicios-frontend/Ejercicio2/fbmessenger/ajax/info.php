<?php

	$archivo = fopen("../data/usuarios.csv","r");
	$linea="";
	$respuesta = array();
	$i=0;
	while ($linea = fgets($archivo)){
		$partes = explode(",", $linea);
		$respuesta[$i]["codigo"]=$partes[0];
		$respuesta[$i]["nombre"]=$partes[1];
		$respuesta[$i]["imagen"]=$partes[2];
		$i++;
	}
	//var_dump sirve para mostrar un arreglo bonito en el html
	//var_dump($respuesta);
	//echo "<br>Este es el JSON: <br>";
	echo json_encode($respuesta);
	fclose($archivo);


?>