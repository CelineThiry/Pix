$(document).ready(function(){
	$(".trigger").click(function(){
		//slide up all the link lists
		$(".dropdown").slideUp();
		//slide down the link list below the .trigger clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})