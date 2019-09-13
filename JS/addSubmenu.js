
$(document).ready(function(){

// Seccion de proyectos

	$("#addsubmenu").click(function(){
		var check = checkCampos();
        if(check) {
            register();
        }
        else {
            alert("Please, write Name, Description of submenu and Select a project.");
        }
	});

	function checkCampos() {
	    var inputselectproject=$("#inputselectproject").val();
	    var name_submenu=$("#name_submenu").val();
	    var description_submenu=$("#description_submenu").val();
	    if (inputselectproject=="" || name_submenu=="" || description_submenu==""){
	    	return false;
	    }
	    else{
	    	return true;
	    }
	}

	function register(){
		$.ajax({
			type:'post',
			url:'PHP/addsubmenu.php',
			dataType:'json',
			data: {
			inputselectproject:$("#inputselectproject").val(),
			name_submenu:$("#name_submenu").val(),
			description_submenu:$("#description_submenu").val()},
				success:function(res){
					var respuesta;
					respuesta=res.success;
					if(respuesta==true){
						alert("Added submenu");
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