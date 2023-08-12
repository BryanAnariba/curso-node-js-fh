<?php
	date_default_timezone_set('America/Tegucigalpa');
	$hora = date('H:i:s');

	//echo "Desde PHP: " . $_POST["mensaje"] . ", ".$_POST["emisor"].", ".$_POST["receptor"];
	$archivo = fopen("../data/conversaciones/conversaciones-".
			$_POST["emisor"].
			"/conversacion-".
			$_POST["emisor"]."-".
			$_POST["receptor"].".csv"
			, "a+");
	fwrite($archivo, sprintf("%s,%s,%s\n",$_POST["emisor"],$_POST["mensaje"],$hora));
	fclose($archivo);


	$archivo = fopen("../data/conversaciones/conversaciones-".
			$_POST["receptor"].
			"/conversacion-".
			$_POST["receptor"]."-".
			$_POST["emisor"].".csv"
			, "a+");
	fwrite($archivo, sprintf("%s,%s,%s\n",$_POST["emisor"],$_POST["mensaje"],$hora));
	fclose($archivo);

	$resultado=array();
	$resultado["mensaje"] = "Registro almacenado";
	$resultado["hora"] = $hora;
	echo json_encode($resultado);
?>


