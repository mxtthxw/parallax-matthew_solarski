$(document).ready(function(){

	$(window).scroll(function(){
		var pixels = $(window).scrollTop();
		$(".pixel-count").text(pixels + " pixels");
	});

	$(window).scroll(function(){
		var pixels = -$(window).scrollTop();
		$(".blue-circle").css("margin-bottom", pixels * 1.1);
		// $(".blue-circle").css("height", "50" + pixels);
	});

	$(window).scroll(function(){
		var pixels = -$(window).scrollTop();
		$(".yellow-circle").css("margin-bottom", pixels * 1.2);
	});

	$(window).scroll(function(){
		var pixels = $(window).scrollTop();
		$(".red-circle").css("margin-bottom", pixels * 1.5);
	});

});