jQuery(document).ready(function($) {
	
	// console.log('Slick');
	$('#photoevent').slick({
		infinite: false,
		fade: true,
		prevArrow: '<button type="button" role="presentation" class="slick-prev"><i class="i-angle-bracket-left"></i></button>',
		nextArrow: '<button type="button" role="presentation" class="slick-next"><i class="i-angle-bracket-right"></i></button>',
		asNavFor: '#photoevent-thumb',
	});

	$('#photoevent-thumb').slick({
		infinite: false,
		arrows: false,
		slidesToShow: 6,
		asNavFor: '#photoevent',
		focusOnSelect: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1310,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			// {
			// 	breakpoint: 575,
			// 	settings: "unslick"
			// },
		]
	});

});