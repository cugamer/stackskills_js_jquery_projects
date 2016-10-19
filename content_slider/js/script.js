$(document).ready(function() {
	// Set variables
	var speed = 500;        	 // Fade speed
	var autoSwitch = true;	     // Auto slider options
	var autoSwitchSpeed = 4000;  // Auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// Click handlers
	$('#next').on('click', nextSlide);
	$('#previous').on('click', previousSlide);

	// Autoswitch handler
	if(autoSwitch == true) {
		setInterval(function() {
			nextSlide();
		},
		autoSwitchSpeed);
	};

	// Switch functions
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};

	function previousSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});