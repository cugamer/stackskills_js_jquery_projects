$(document).ready(function() {
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
		console.log(category)
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
});