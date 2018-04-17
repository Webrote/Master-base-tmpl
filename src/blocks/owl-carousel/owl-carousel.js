$(document).ready(function(){
	
	$("#promo").owlCarousel({
		items: 3,
		// nav: true,
		dots: true,
		loop: true,
		center: false,
		margin: 2,
		responsive : {
			0 : {
				items: 1,
				// nav: true,
				loop: true,
				center: true,
			},
			480 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
			992 : {
				items: 3,
			},
			1230 : {
				items: 3,
			},
			1800 : {
				items: 3,
			}
		}
	}).parent().css('opacity', 1);

});

 $("#vendors").owlCarousel({
	items: 12,
	// dots: false,
	responsive: {
		0: {
			items: 4,
		},
		480: {
			items: 6,
		},
		576 : {
			items: 4,
		},
		768 : {
			items: 6,
		},
		992: {
			items: 9
		},
		1230: {
			items: 12
		}
	}
 }).parent().css('opacity', 1);