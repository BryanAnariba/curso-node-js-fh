<?php

	class Conexion{

		private $usuario="root";
		private $contrasena="";
		private $host="localhost";
		private $baseDatos="bd_facebook";
		private $puerto="3306";
		private $link;

		public function __construct(){
			$this->establecerConexion();			
		}

		public function establecerConexion(){
			$this->link = mysqli_connect($this->host, $this->usuario, $this->contrasena, $this->baseDatos, $this->puerto);

			if (!$this->link){
				echo "No se pudo conectar con mysql";
				exit;
			}
		}

		public function cerrarConexion(){
			mysqli_close($this->link);
		}

		public function ejecutarInstruccion($sql){
			return mysqli_query($this->link, $sql);
		}

		public function obtenerFila($resultado){
			return mysqli_fetch_array($resultado);
		}

		public function cantidadRegistros($resultado){
			return mysqli_num_rows($resultado);
		}

		public function liberarResultado($resultado){
			mysqli_free_result($resultado);
		}
		public function getUsuario(){
			return $this->usuario;
		}
		public function setUsuario($usuario){
			$this->usuario = $usuario;
		}
		public function getContrasena(){
			return $this->contrasena;
		}
		public function setContrasena($contrasena){
			$this->contrasena = $contrasena;
		}
		public function getHost(){
			return $this->host;
		}
		public function setHost($host){
			$this->host = $host;
		}
		public function getBaseDatos(){
			return $this->baseDatos;
		}
		public function setBaseDatos($baseDatos){
			$this->baseDatos = $baseDatos;
		}
		public function getPuerto(){
			return $this->puerto;
		}
		public function setPuerto($puerto){
			$this->puerto = $puerto;
		}
		public function getLink(){
			return $this->link;
		}
		public function setLink($link){
			$this->link = $link;
		}

	}
?>