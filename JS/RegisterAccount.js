$(document).ready(function(){
 		$("#registrar").click(function(){
 			var check = checkCampos();
	        if(check) {
	            //console.log("Verify input correct");
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
 				var mayus =   new RegExp("^(?=.*[A-Z])");
 				//var special = new RegExp("^(?=.*[!@#$&*()])");
 				var numbers = new RegExp("^(?=.*[0-9])");
 				var lower =   new RegExp("^(?=.*[A-Z])");
 				var len =     new RegExp("^(?=.{8,})");
 				if(mayus.test(pass) /*&& special.test(pass)*/ && numbers.test(pass) && lower.test(pass) && len.test(pass)){
 					verifyemail();
 				}
 				else{
 					alert("The password must contain a minimum of 8 characters at least 1 uppercase alphabet, 1 lowercase alphabet and 1 number. ");
 					$("#pass").css("backgroundColor", "red");
					$("#pass2").css("backgroundColor", "red");
 				}
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
				register();
				//alert("Los datos son correctos");
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
					country:$("#country").val()},
 					success:function(res){
	 					var respuesta;
	 					respuesta=res.success;
	 					if(respuesta==true){
	 						alert("Your data has been saved, you can log in now.");
	 						console.log(res.respu);
	 					}
						else{
							alert(res.respu);
						}
	 				},error:function(res){
	 					alert("no funca la conexion");
	 					alert(res['codigo']);
	 					console.log(res['codigo']);
	 				}
 			});
 		}
 });