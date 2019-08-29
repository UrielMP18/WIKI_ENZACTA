$(document).ready(function(){
	$("#Login").click(function(){
		verifyemail();
	});

	function verifyemail() {
		var email = $("#username").val();
		var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

		if (emailRegex.test(email)){
			login();
		} else {
			alert("Email address is incorrect!! Verify please.");
			$("#email").css("backgroundColor", "red");
		}
	}

	function login(){
		$.ajax({
			type:'post',
			url:'PHP/Login.php',
			dataType:'json',
			data: {email:$("#username").val(),pass:$("#password").val()},
			success:function(res){
				var respuesta;
				respuesta=res.success;
				if(respuesta==true){
					alert("Si existes :)");
					//document.location.href="home.html";
				}
				else{
					alert(res.respu);
				}
				},error:function(res){
					alert(res['codigo']);
				}
		});
	}
});