$(document).ready(function() {
	$('.slider').slick({
		adaptiveheight: true,
		slidesToShow:3,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2

				},
				breakpoint: 425,
				settings: {
					slidesToShow:1,
					dots: true

				}

			}

		]

	});

});