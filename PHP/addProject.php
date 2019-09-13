<?php
	$conn=mysqli_connect("localhost","root","","wikienzacta");

	$name=$_POST["name"];

	$query="SELECT * FROM menu where nombre='$name'";
	$resultado=$conn->query($query);

	if($resultado->num_rows > 0){
	    $response=array();
		$response["success"]=false;
		$response["respu"]="The name project is already in use!";
		echo json_encode($response);
	}
	else{
		$statement=mysqli_prepare($conn,"insert into menu (nombre) values (?)");
		mysqli_stmt_bind_param($statement,"s",$name);
		mysqli_stmt_execute($statement);
			
		$response=array();
		$response["success"]=true;
		$response["respu"]="Saved data";
		echo json_encode($response);
	}
?>