$(document).ready(function(){
	$("#add_project").click(function(){
		$("li").removeClass("menuactive");
		$("#add_project").addClass("menuactive");
		document.getElementById('NewProject').style.display = ''; 
		document.getElementById('NewSubmenu').style.display = 'none'; 
	});
	$("#add_submenu").click(function(){
		$("li").removeClass("menuactive");
		$("#add_submenu").addClass("menuactive");
		document.getElementById('NewProject').style.display = 'none'; 
		document.getElementById('NewSubmenu').style.display = ''; 
		$(searchProject());
	});

	$(searchDocument());

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

	$(document).on('keyup','#inputsearchDocument', function(){
		var valor=$(this).val();
		if(valor != ""){
			searchDocument(valor);
			}
		else{
			searchDocument();
			}
	});

	function searchProject(consulta){
		$.ajax({
			url:'PHP/searchProject.php',
			type:'POST',
			dataType:'html',
			data: {consulta: consulta},
		})
		.done(function(respuesta){
			$("#inputselectproject").html(respuesta);	

		})
		.fail(function(){
			console.log("error");			   
		})
	}

	// Menu.
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