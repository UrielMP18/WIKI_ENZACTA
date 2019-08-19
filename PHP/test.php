	<?php

	require('ip_funtion.php');
	$ip_address=get_real_ip();
	$register_date=date("m-d-y, g:i a"); 
	echo $ip_address;
	echo $register_date;
		?>