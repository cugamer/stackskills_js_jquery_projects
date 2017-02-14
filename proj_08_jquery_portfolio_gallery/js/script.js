$(document).ready(function() {
	$('nav a').on('click', function() {
		// Clear the current class from all
		$('nav li').removeClass('current');
		// Add it to just the one you want it on
		$(this).parent().addClass('current');
		// Set heading text
		$('h1.heading').text($(this).text());
	});
});