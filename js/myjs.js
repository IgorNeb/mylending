 $(window).on(function() {

   $("#status").fadeOut("slow");

   $("#preloader").delay(500).fadeOut("slow").remove();     

 });


 $(".button_menu, .mainMenuItem").click(function() {
  $(".sandwich").toggleClass("swich");
});


$(".button_menu").click(function(){
	if ($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
		$(".top_menu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated");
	}
});


$(".top_menu ul a").click(function(){
	$(".top_menu").fadeOut(600);
});


$('#myGallery').spacegallery({loadingClass: 'loading'});