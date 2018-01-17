jQuery(function() {
   
    // WOW
    var wow = new WOW(
      {
        mobile:       false,
        live:         true,
      }
    );
    wow.init();

	$('.image-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: false,
		},
		gallery: {
			enabled: true
		},
		
	});
    
});
