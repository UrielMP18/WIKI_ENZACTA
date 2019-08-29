<?php
	
	
	$con=mysqli_connect("localhost","root","","wikienzacta");
	
	$email=$_POST["email"];
	$pass=$_POST["pass"];

	
	$query="SELECT * FROM users where email='$email'";
	
	$resultado=$con->query($query);
	$result=$resultado->fetch_assoc();

	$nivel=$result['id_nivel'];
	$encryp=md5($pass);
	
	$statement=mysqli_prepare($con,"select * from users where email=? and pass=?");
	mysqli_stmt_bind_param($statement,"ss",$email,$encryp);
	mysqli_stmt_execute($statement);
	
	$response=array();
	$response["success"]=false;
	$response["respu"]="Email address or Password are incorrect!! Verify please.";
	while(mysqli_stmt_fetch($statement)){
		session_start(); 
		$_SESSION["autentica"] = "SIP"; 
		$_SESSION["usuarioactual"] = $email; 

		$response["success"]=true;
		$response["nivel"]=$nivel;
		$response["email"]=$email;
	}
	echo json_encode($response);
	
?>	