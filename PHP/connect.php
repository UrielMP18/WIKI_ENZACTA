
<?php

$con=new mysqli("localhost","id10205068_albert","EnzactaB12","id10205068_wikienzacta"); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
	exit();

	}
	else{
		echo "conexion establecida";
	}
?>