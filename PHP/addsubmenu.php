<?php

	$conn=mysqli_connect("localhost","root","","wikienzacta");

	$menu=$_POST["inputselectproject"];
	$name=$_POST["name_submenu"];
	$description=$_POST["description_submenu"];


	$query="SELECT * FROM options where menu='$menu' and name='$name'";
	$resultado=$conn->query($query);
	if($resultado->num_rows > 0){
	    $response=array();
		$response["success"]=false;
		$response["respu"]="The name submenu is already in use!";
		echo json_encode($response);
	}
	else{
		
		$statement=mysqli_prepare($conn,"insert into options (menu, name, description) values (?,?,?)");
		mysqli_stmt_bind_param($statement,"iss",$menu,$name,$description);
		mysqli_stmt_execute($statement);
		
		$response=array();
		$response["success"]=true;
		$response["respu"]="Saved data";
		echo json_encode($response);
	}

?>