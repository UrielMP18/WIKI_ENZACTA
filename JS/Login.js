$(document).ready(function(){
 		$("#Login").click(function(){
 			$.ajax({
 				type:'post',
 				url:'PHP/Login.php',
 				dataType:'json',
 				data: {clave_e:$("#username").val(),password:$("#password").val()},
 				success:function(res){
 					var respuesta;
 					respuesta=res.success;
 					if(respuesta==true){
 						document.location.href="home.html";
 					}
					else{
						alert(res.respu);
	 					$("#username").val("");
					}
 				},error:function(res){
 					alert(res['codigo']);
 				}
 			});
 		});
 	});