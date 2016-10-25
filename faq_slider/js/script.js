// Accordian
var action = "click";
var speed = "500";

$(document).ready(function() {
	// Question handler
	$('li.q').on(action, function() {
		// Get next element, toggle and hide all other siblings
		$(this).next()
			.slideToggle(speed)
			.siblings('li.a')
			.slideUp();
		// Get image for active quetion
		var img = $(this).children('img');
		// Remove the 'rotate' class for all images except the active
		$('img').not(img).removeClass('rotate');
		// Toggle rotate class
		img.toggleClass('rotate');
	});
});