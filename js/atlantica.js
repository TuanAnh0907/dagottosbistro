$(document).ready(function(){
						   
	// Dropdown Script	   
	function mainmenu(){
	$(" #nav ul ").css({display: "none"}); // Opera Fix
	$(" #nav li").hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
			},function(){
			$(this).find('ul:first').css({visibility: "hidden"});
			});
	}
	
	 $(document).ready(function(){					
		mainmenu();
	});
 
	// Activate PrettyPhoto Lightbox handle
	$("a[rel^='gallery']").prettyPhoto();
	
	// PNG Fix
	$(document).pngFix(); 	
	
	// Activate jCarousel
	function mycarousel_initCallback(carousel)
	{
    	// Disable autoscrolling if the user clicks the prev or next button.
    	carousel.buttonNext.bind('click', function() {
    	    carousel.startAuto(0);
    	});
		
    	carousel.buttonPrev.bind('click', function() {
    	    carousel.startAuto(0);
    	});
		
    	// Pause autoscrolling if the user moves with the cursor over the clip.
    	carousel.clip.hover(function() {
    	    carousel.stopAuto();
    	}, function() {
    	    carousel.startAuto();
    	});
	};


    	jQuery('#mycarousel').jcarousel({
    	    auto: 6,
    	    wrap: 'last',
    	    animation: 'slow',
    	    initCallback: mycarousel_initCallback
    });

});