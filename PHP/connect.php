
<?php

$mysqli=mysqli_connect("localhost","root","","wikienzacta");
//$con=new mysqli("localhost","root","","wikienzacta"); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
	exit();

	}
	else{
		//echo "conexion establecida";
	}
?>