<?php
	try{
		$archivo = fopen(
						"../data/conversaciones/conversaciones-".
						$_POST["emisor"]."/conversacion-".
						$_POST["emisor"]."-".$_POST["receptor"].".csv",
						"a+"
				);
		$respuesta = array();
		$i=0;
		while ($linea=fgets($archivo)) {
			$partes =explode(",", $linea) ;
			$respuesta[$i]["codigo"] = $partes[0];
			$respuesta[$i]["mensaje"] = $partes[1];
			$respuesta[$i]["hora"] = $partes[2];
			$i++;
		}
		echo json_encode($respuesta);
	}catch(Exception $e){
		echo json_encode(array());
	}

	
?>