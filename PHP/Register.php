<?php
	$conn=mysqli_connect("localhost","root","","wikienzacta");

	$first_name=$_POST["first_name"];
	$last_name=$_POST["last_name"];
	$email=$_POST["email"];
	$birth_date=$_POST["birth_date"];
	$gender=$_POST["gender"];
	$pass=$_POST["pass"];
	$country=$_POST["country"];

	$status='1';
	$ip_address=get_real_ip();
	$register_date=date("Y-m-d g:i:s");
	$id_nivel='1';
	$last_date='';
	$encryp=md5($pass);
	$query="SELECT * FROM users where email='$email'";
	$resultado=$conn->query($query);
	
	if($resultado->num_rows > 0){
	    $response=array();
		$response["success"]=false;
		$response["respu"]="The email is already in use!";
		echo json_encode($response);
	}
	else{
		$statement=mysqli_prepare($conn,"insert into users (first_name, last_name, email, birth_date, gender, pass, country, status, ip_address, register_date, id_nivel, last_date) values (?,?,?,?,?,?,?,?,?,?,?,?)");
		mysqli_stmt_bind_param($statement,"ssssssssssss",$first_name,$last_name,$email,$birth_date,$gender,$encryp,$country,$status,$ip_address,$register_date, $id_nivel, $last_date);
		mysqli_stmt_execute($statement);
			
		$response=array();
		$response["success"]=true;
		$response["respu"]="Saved data";
		echo json_encode($response);
	}
		

	function get_real_ip(){
 
    if (isset($_SERVER["HTTP_CLIENT_IP"]))
    {
        return $_SERVER["HTTP_CLIENT_IP"];
    }
    elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
    {
        return $_SERVER["HTTP_X_FORWARDED_FOR"];
    }
    elseif (isset($_SERVER["HTTP_X_FORWARDED"]))
    {
        return $_SERVER["HTTP_X_FORWARDED"];
    }
    elseif (isset($_SERVER["HTTP_FORWARDED_FOR"]))
    {
        return $_SERVER["HTTP_FORWARDED_FOR"];
    }
    elseif (isset($_SERVER["HTTP_FORWARDED"]))
    {
        return $_SERVER["HTTP_FORWARDED"];
    }
    else
    {
        return $_SERVER["REMOTE_ADDR"];
    }
}
?>