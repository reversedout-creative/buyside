(function($) {
	
	/* Go up */
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 300 ) {
	    	jQuery(".go-up").css("bottom","0px");
		}
		else {
	   		jQuery(".go-up").css("bottom","-60px");
		}
	});
		jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	});
 

	/* Slime Menu */
	$('.slimmenu').slimmenu({
		resizeWidth: '991',
		collapserTitle: '',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '<i class="fa fa-chevron-right"></i>'
	});
	// Close Effect Menu
	$(function() {
		$('.collapse-button').click(function() {
			$('.collapse-button').toggleClass('close-menu');
		});
	});
	
	// Our Customer
    $(document).ready(function() {
    	var owl = $("#Customers");
		owl.owlCarousel({
		stopOnHover : true,
		navigation: true,
		autoPlay : false,
		autoHeight : false,
		items : 5, 
		itemsDesktop : [1200,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [991,3], // 3 items betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0;
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
    	$(".next").click(function(){ owl.trigger('owl.next');      })
      	$(".prev").click(function(){ owl.trigger('owl.prev');      })
		$(".play").click(function(){ owl.trigger('owl.play',1000); })
		$(".stop").click(function(){ owl.trigger('owl.stop');      })
    });
    
    // video testimonials
    $(document).ready(function() {
    	var owl = $("#video_testimonials");
		owl.owlCarousel({
		stopOnHover : true,
		navigation: false,
		autoPlay : true,
		autoHeight : false,
        center: true,
        loop: true,
		items : 1, 
		itemsDesktop : [1200,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [991,1], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
    	$(".next").click(function(){ owl.trigger('owl.next');      })
      	$(".prev").click(function(){ owl.trigger('owl.prev');      })
		$(".play").click(function(){ owl.trigger('owl.play',1000); })
		$(".stop").click(function(){ owl.trigger('owl.stop');      })
    });
	
	
	// Testimonials Slider
	$(document).ready(function() {
    	var owl = $("#Testimonials");
		owl.owlCarousel({
		stopOnHover : true,
		navigation: true,
		autoPlay : 4000,
		autoHeight : false,
		loop : true,
		singleItem:true,
		items :1, 
		itemsDesktop : [1200,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
    	$(".next").click(function(){ owl.trigger('owl.next');      })
      	$(".prev").click(function(){ owl.trigger('owl.prev');      })
		$(".play").click(function(){ owl.trigger('owl.play',1000); })
		$(".stop").click(function(){ owl.trigger('owl.stop');      })
    });
	
	
(function($) {
	/* --------------------------------------------------
	 * document ready
	 * --------------------------------------------------*/
	jQuery(document).ready(function() {
		$("body").show();
		jQuery(window).on("scroll", function() {
			/* fade base scroll position */
			// custom page with background on side
			jQuery('.side-bg').each(function() {
				jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
			});
			/* go to anchor */
		});
	});
})(jQuery);
	
	/* WOW */
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	/* END WOW */

	/* Search Box Filters JS*/
	$(document).ready(function(){
		$("#fliter_menu").click(function(){
			$("#Search_box").slideToggle("slow");
			$("#fliter_menu").toggleClass("close-menu");
		});
	});
	
})(jQuery);
