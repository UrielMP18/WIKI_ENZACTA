<?php
require_once('connect.php');
$salida="";
$result = mysqli_query($mysqli, "SELECT * FROM menu");
if(isset($_POST['consulta'])){
	$q=$_POST['consulta'];
	$result = mysqli_query($mysqli, "SELECT * FROM menu where nombre like '%".$q."%'");
}

$row=mysqli_num_rows($result);
$salida.="  <header class='major'>
					<h1>Conntens</h1>
				</header>
				<ul>
	                <header class='major'>
						<h2>Projects</h2>
					</header>
				";
if($row>0){
	while($fila=$result->fetch_assoc()){
		$salida.="<li><span class='opener'>".$fila['nombre']."</span>";

		$result1 = mysqli_query($mysqli, "SELECT * FROM options where menu='".$fila['id_menu']."'");
		$options=mysqli_num_rows($result1);

		
		if($options>0){
			$salida.="<ul>";
			while($fila2=$result1->fetch_assoc()){
				$salida.="<li><a href='#'>".$fila2['name']."</a></li>";
			}
			$salida.="</ul>";
		}

		$salida.="</li>";
	}
	$salida.="</ul>";
	
}
else{
	$salida.="Menus have not been added";
}

echo $salida;

$mysqli->close();
?>