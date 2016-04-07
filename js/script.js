$(document).ready(function(){
	$(".trigger").click(function(){
		//slide up all the link lists
		$(this).toggleClass("active");
		$(".dropdown").slideUp();
		//slide down the link list below the .trigger clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});

	$('.burger').click(function(){
		//slide up all the link lists
		$('.sidebar').toggleClass("active");
		$(this).toggleClass("active");

		
	});


});