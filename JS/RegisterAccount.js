$(document).ready(function(){
 		$("#registrar").click(function(){
 			var check = checkCampos();
	        if(check) {
	            console.log("Verify input correct");
	            verifypass();
	        }
	        else {
	            alert("Please, complete your information.");
	        }
 		});

 		function checkCampos() {
		    var camposRellenados = true;
		    $(".verifyinput").each(function() {
		    var $this = $(this);
		    $("input").css("backgroundColor", "");
		    $("select").css("backgroundColor", "");
		        if( $this.val().length <= 0 ) {
		        	$this.css("backgroundColor", "red");
		            camposRellenados = false;
		            return false;
		        }
		    });
		    if(camposRellenados == false) {
		        return false;
		    }
		    else {
		        return true;
		    }
		}

		function verifypass(){
 			var pass=$("#pass").val();
 			var pass2=$("#pass2").val();

 			if(pass===pass2){
 				verifyemail();
 			}
 			else{
 				alert("verify password please");
 				$("#pass").css("backgroundColor", "red");
				$("#pass2").css("backgroundColor", "red");
 			}
 		}

 		function verifyemail() {
			var email = $("#email").val();
			var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

			if (emailRegex.test(email)){
				//register();
				alert("Los datos son correctos");
			} else {
				alert("Email address is incorrect!! Verify please.");
				$("#email").css("backgroundColor", "red");
			}
		}

 		function register(){
 			$.ajax({
 				type:'post',
 				url:'PHP/Register.php',
 				dataType:'json',
 				data: {
					first_name:$("#first_name").val(),
					last_name:$("#last_name").val(),
					email:$("#email").val(),
					birth_date:$("#birth_date").val(),
					gender:$("#gender").val(),
					pass:$("#pass").val(),
					pass2:$("#pass2").val(),
					country:$("#country").val()},
 					success:function(res){
	 					var respuesta;
	 					respuesta=res.success;
	 					if(respuesta==true){
	 						alert("Se inserto correctamente!");
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