(function ($) {
	"use strict";
    
    
    var $body = $("body"),
        $window = $(window);
    
    /*============================= Preload==============================*/

	$(window).load(function () {
    "use strict";
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
            ;
        });

        /*============================= Navigation Section ==============================*/
       
        $('.navbar-collapse').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-default").addClass("small");
              } else {
                $(".navbar-default").removeClass("small");
              }
        });
        
    
    /*============================= Smoothscroll js ==============================*/
        $(function() {
          $('.navbar-default a, a.smooth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 1
            }, 1000);
            event.preventDefault();
          });
        });  
    
    
    /*====================================== jquery scroll spy ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 15
        
        });
        
    /*======================================counter-up ========================================*/

	$('.Count').each(function () {
    "use strict";
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

    /*====================================== Fancybox ========================================*/

	$('.fancybox-buttons').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            prevEffect: 'fade',
            prevSpeed: 550,
            nextEffect: 'fade',
            nextSpeed: 550,
            closeBtn: true,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            }
        });

   /*====================================== Fancybox-script ========================================*/

	$(document).ready(function() {
    "use strict";
		$(".fancybox").fancybox();
	});

   /*====================================== Mixit-up ========================================*/

	$(function () {
    "use strict";
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.web, .graphics, .development, .photography'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	

   /*====================================== Parallex ========================================*/

	$(document).ready(function(){
    "use strict";
       $('.parallax').scrolly({bgParallax: true});
    });
})(jQuery);