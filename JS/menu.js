$(document).ready(function(){
	$("#homemenu").click(function(){
		$("li").css("color", "#7f888f");
		$("#homemenu").css("color", "#61d04d");
		document.getElementById('banner').style.display = ''; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = 'none';
	});
	$("#favoritemenu").click(function(){
		$("li").css("color", "#7f888f");
		$("#favoritemenu").css("color", "#61d04d");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = ''; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = 'none';
	});
	$("#popularmenu").click(function(){
		$("li").css("color", "#7f888f");
		$("#popularmenu").css("color", "#61d04d");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = '';
		document.getElementById('New').style.display = 'none';
	});
	$("#newmenu").click(function(){
		$("li").css("color", "#7f888f");
		$("#newmenu").css("color", "#61d04d");
		document.getElementById('banner').style.display = 'none'; 
		document.getElementById('Favorite').style.display = 'none'; 
		document.getElementById('Popular').style.display = 'none';
		document.getElementById('New').style.display = '';
	});
});