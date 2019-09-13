
$(document).ready(function(){

// Seccion de proyectos

	$("#addproject").click(function(){
		var check = checkCampos();
        if(check) {
            register();
        }
        else {
            alert("Please, write name project.");
        }
	});

	function checkCampos() {
	    var name=$("#name_project").val();
	    if (name==""){
	    	$("#name_project").css("backgroundColor", "red");
	    	return false;
	    }
	    else{
	    	$("#name_project").css("backgroundColor", "");
	    	return true;
	    }
	}

	function register(){
		$.ajax({
			type:'post',
			url:'PHP/addProject.php',
			dataType:'json',
			data: {
			name:$("#name_project").val()},
				success:function(res){
					var respuesta;
					respuesta=res.success;
					if(respuesta==true){
						alert("Added project");
						console.log(res.respu);
						searchDocument();
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
	
	function searchDocument(consulta){
		$.ajax({
			url:'PHP/searchDocument.php',
			type:'POST',
			dataType:'html',
			data: {consulta: consulta},
		})
		.done(function(respuesta){
			$("#menu").html(respuesta);	
			li();
		})
		.fail(function(){
			console.log("error");			   
		})
	}
	
	function li(){
		var $menu = $('#menu'),
			$menu_openers = $menu.children('ul').find('.opener');

		// Openers.
			$menu_openers.each(function() {

				var $this = $(this);

				$this.on('click', function(event) {
					
					// Prevent default.
						event.preventDefault();

					// Toggle.
						$menu_openers.not($this).removeClass('active');
						$this.toggleClass('active');

					// Trigger resize (sidebar lock).
						$window.triggerHandler('resize.sidebar-lock');
				});

			});
	}	


});