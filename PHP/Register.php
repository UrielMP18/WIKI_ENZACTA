<?php
	//require('connect.php');
	require('ip_funtion.php');
	
	$first_name=$_POST["first_name"];
	$last_name=$_POST["last_name"];
	$email=$_POST["email"];
	$birth_date=$_POST["birth_date"];
	$gender=$_POST["gender"];
	$password=$_POST["password"];
	$country=$_POST["country"];
	$status='1';
	$ip_address=get_real_ip();
	$register_date=date("m-d-y, g:i a");
	$id_nivel='1';
	$last_date='';

$con=mysqli_connect("localhost","id10205068_albert","EnzactaB12","id10205068_wikienzacta");
	
	$encryp=md5($password);

	/*if(($first_name=="")or($last_name=="")or($email=="")or($birth_date=="")or($gender=="")or($password=="")or ($country=="")){
		$response=array();
		$response["success"]=false;
		$response["respu"]="Can't leave empty fields!";
		echo json_encode($response);
	}
	else{
*/
		$query="SELECT * FROM Users where email='$email'";
		$resultado=$con->query($query);
		if($resultado->num_rows > 0){
		    $response=array();
			$response["success"]=false;
			$response["respu"]="The email is already in use!";
			echo json_encode($response);
		}
		else{
			$statement=mysqli_prepare($con,"insert into Users (first_name, last_name, email, birth_date, gender, password, country, status, ip_address, register_date, id_nivel, last_date) values (?,?,?,?,?,?,?,?,?,?,?,?)");
			mysqli_stmt_bind_param($statement,"ssssssssssss",$first_name,$last_name,$email,$birth_date,$gender,$encryp,$country,$status,$ip_address,$register_date, $id_nivel, $last_date);
			mysqli_stmt_execute($statement);
				
			$response=array();
			$response["success"]=true;
			$response["var"]=$first_name,$last_name,$email,$birth_date,$gender,$encryp,$country,$status,$ip_address,$register_date, $id_nivel, $last_date;
			echo json_encode($response);
		}
	//}	

?>