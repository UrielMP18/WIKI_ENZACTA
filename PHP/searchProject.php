<?php
require_once('connect.php');
$salida="";
$result = mysqli_query($mysqli, "SELECT * FROM menu");

$row=mysqli_num_rows($result);
if($row>0){
	while($fila=$result->fetch_assoc()){
		$salida.="<option value='".$fila['id_menu']."'>".$fila['nombre']."</option>";
	}
}
else{
	$salida.="Menus have not been added";
}

echo $salida;

$mysqli->close();
?>