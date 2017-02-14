$(document).ready(function() {
	// Nav link behavior and effect on gallery
	$('nav a').on('click', function() {
		// Clear the 'current' class
		$('nav li.current').removeClass('current');
		// Add it to just the one you want it on
		$(this).parent().addClass('current');
		// Set heading text
		$('h1.heading').text($(this).text());

		// Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');
		// Remove hidden class if 'all-projects' is selected
		if(category == "all-projects") {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			// Loop over all gallery items
			$('ul#gallery li').each(function() {
				// Check if it has the current item has a class which matches the current cagegory variable value
				if(!$(this).hasClass(category)) {
					// If not hide it and add the 'hidden' class
					$(this).hide().addClass('hidden');
				} else {
					// Othwerwise fade it in and remove the hidden class
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop any default link behavior
		return false;
	});

	// Mouse enter overlay
	$('ul#gallery li').on('mouseenter', function() {
		// Get the data attribute values
		var title = $(this).children().data('title') || 'Click to Enlarge';
		var desc = $(this).children().data('desc') || '';

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

		// Fade in overlay
		overlay.fadeIn(400);
	});

	// Mouse leave overlay
	$('ul#gallery li').on('mouseleave', function() {
		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(250);

	});
});