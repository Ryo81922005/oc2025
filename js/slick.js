$('.mainimg-slick').slick({
	autoplay: true,
	dots: true,
	arrows: false,
	autoplaySpeed: 4000,
});

	$('.thumbnail-slide').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 0,
		speed: 7000,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesToScroll: 1,
		

		responsive: [
		{
		breakpoint: 899,
		settings: {
		slidesToShow: 2,
		}
		}
		]
});
