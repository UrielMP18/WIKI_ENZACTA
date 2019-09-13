$(document).ready(function(){
	$("#homemenu").click(function(){
		$("li").removeClass("menuactive");
		$("#homemenu").addClass("menuactive");
		document.getElementById('banner').style.display = ''; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = 'none';
	});
	$("#favoritemenu").click(function(){
		$("li").removeClass("menuactive");
		$("#favoritemenu").addClass("menuactive");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = ''; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = 'none';
	});
	$("#popularmenu").click(function(){
		$("li").removeClass("menuactive");
		$("#popularmenu").addClass("menuactive");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = '';
		document.getElementById('New').style.display = 'none';
	});
	$("#newmenu").click(function(){
		$("li").removeClass("menuactive");
		$("#newmenu").addClass("menuactive");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = '';
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