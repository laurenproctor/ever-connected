/*

  Author: Supview
  Template: Dilla
  Version: 1.0
  URL: http://themeforest.net/user/Supview/

	01. EDIACHECK
	02. STICKY ELEMENTS ON SCREENSHOTS
	03. FLEXSLIDER
	04. SMOOTH SCROLLING
	05. HEADER SLIDER
	06. LIGHTBOX
	07. LOADING OF THE PAGE


*/



var ajax_form = true;

jQuery(document).ready(function () { // Document ready

  "use strict";

/*-----------------------------------------------------------------------------------*/
/*	01. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 1024px)',  /* If the page is max-width:1024px do the entry */
        entry: function () {


        },
        exit: function () { /* If not do the exit function */

        }



    }); /* END OF THE MEDIACHECK */

/*-----------------------------------------------------------------------------------*/
/*	02. STICKY
/*-----------------------------------------------------------------------------------*/

          $(document.body).trigger("sticky_kit:recalc");

    			$('.workinfo-right-side').stick_in_parent({

    				offset_top:110

    			});


/*-----------------------------------------------------------------------------------*/
/*	03. Flexslider
/*-----------------------------------------------------------------------------------*/


      $('#connected_feed').flexslider({
        animation: "slide",
        itemMargin: 3,
        controlNav: false,
        animationLoop: true,
        pauseOnHover: true
      });


/*-----------------------------------------------------------------------------------*/
/*	04. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/



	$('.goto').on("click", function(e){
	    $('html,body').scrollTo(this.hash,this.hash,  {'axis':'y'});
	    e.preventDefault();
	});



/*-----------------------------------------------------------------------------------*/
/*	05. HEADER SLIDER
/*-----------------------------------------------------------------------------------*/



	$(".royalSlider").royalSlider({
		slidesSpacing: 0,
		autoHeight: false,
		fadeinLoadedSlide: true,
		autoScaleSlider: false,
		arrowsNav: false,
		loop: true,
    transitionSpeed: 1000,
    	autoPlay: {
    		// autoplay options go gere
    		enabled: true,
    		pauseOnHover: false
    	},
		loopRewind: true,
		controlNavigation: 'bullets',
		navigateByClick: true,
		transitionType: 'fade'
	});



/*-----------------------------------------------------------------------------------*/
/*	06. LIGHTBOX OF VIDEO
/*-----------------------------------------------------------------------------------*/



$('a.videolightbox').vanillabox({
    type: 'iframe'
});



/*-----------------------------------------------------------------------------------*/
/*	07. LOADING OF THE PAGE
/*-----------------------------------------------------------------------------------*/



function loading() {


		setTimeout(
		  function()
		  {
				$('#header .button').addClass("load");

		  }, 900);

		setTimeout(
		  function()
		  {
				$('#header .logo').addClass("load");

		  }, 400);

		setTimeout(
		  function()
		  {
				$('#header .see_more').addClass("load");

		  }, 1300);

		$('.loader').fadeOut('slow',function() {

			$('.loader img').fadeOut('slow');

		})


	}


  $(window).load(function(){
     loading();
  });


}); /* END OF Document Ready */
