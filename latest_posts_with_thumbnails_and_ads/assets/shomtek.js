(function($) {
    "use strict";
    $(document).ready(function() {
		$('.shomtek_post_horizontal').owlCarousel({
			autoplay: false, //Set AutoPlay to 3 seconds
			responsive: false,
	        items : 3,
	        nav: true,
	        navText: ['\u2770','\u2771'],
			dots: false,
			lazyLoad: true,
			loop: true
		})
	});
})(jQuery);
