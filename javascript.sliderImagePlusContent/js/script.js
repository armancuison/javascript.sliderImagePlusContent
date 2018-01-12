$(document).ready(function(){
	// Set Settings or Options
	var speed = 500;							// fade speed
	var autoswitch = true;				// auto slider options
	var autoswitch_speed = 4000; 	// Auto slider speed

	// Add initial active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();


	// Next button
	$('#next').on('click', nextSlide);

	// Previous button
	$('#prev').on('click', prevSlide);

	// Make it auto to slide
	if(autoswitch == true) {
		setInterval(function(){
			$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':last-child')) {
				$('.slide').first().addClass('active');
			} else {
				$('.oldActive').next().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
		}, autoswitch_speed);
	}

	// function to next slide
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
	}

	// function to Previous slide
	function prevSlide() {
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