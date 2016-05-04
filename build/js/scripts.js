$(function() {
    FastClick.attach(document.body);
    smoothScroll.init();
});

$(document).ready(function() {
    
    var isShowHamburger = false;
    var hamburgerIsWorking = false;
    
    // Hello you
    console.log('Hello! The Sunway University Student Council is always looking for enthusiastic developers to work on interesting projects for the betterment of the campus.');
    console.log("The fact that you're reading this makes us think you'll be a perfect candidate for that. Apply via email at sa.info@imail.sunway.edu.my!");
    
    // Hamburger menu
    $('#hamburger_button').click(function() {
        
        if (hamburgerIsWorking) {
            return;
        }
        
        if (isShowHamburger) {
            hamburgerIsWorking = true;
            
            // toggle icon
            $(this).children('i').removeClass('fa-close');
            $(this).children('i').addClass('fa-bars');
            
            // magic
            $('#hamburger').slideToggle(300, function() {
                $('#navigation').removeClass('fixed-to-top');
                $('body').removeClass('noscroll');
                hamburgerIsWorking = false;
                isShowHamburger = !isShowHamburger;
            });
            
        } else {
            hamburgerIsWorking = true;
            
            // toggle icon
            $(this).children('i').removeClass('fa-bars');
            $(this).children('i').addClass('fa-close');
            
            // magic
            $('#navigation').addClass('fixed-to-top');
            $('body').addClass('noscroll');
            $('#hamburger').slideToggle(300, function() {
                hamburgerIsWorking = false;
                isShowHamburger = !isShowHamburger;
            });
        }
    });
    
    // Toggle accordion
    $('.accordion-toggle').click(function() {
        
        // toggle content
        $(this).next('.accordion-content').slideToggle(100);
                
        // flip icon
        if ($(this).children('.fa').hasClass('fa-chevron-down')) {
            var ele = $(this).children('.fa').removeClass();
            ele.addClass('accordion-toggle-icon fa fa-chevron-up');
        } else {
            var ele = $(this).children('.fa').removeClass();
            ele.addClass('accordion-toggle-icon fa fa-chevron-down');
        }
    });
    
    // Toggle accordion from url
    var hash = window.location.hash;
	var vwidth = window.innerWidth;
	if (hash) {
		$(hash + '-xs').children('.accordion-toggle').trigger('click');
		
		// scroll to position
		if (vwidth < 992) {
			smoothScroll.animateScroll(hash + '-xs', null, {'updateURL': false});
		} else {
			smoothScroll.animateScroll(hash + '-sm', null, {'updateURL': false});
		}
	}

    // Toggle show more
    $('.show-more').click(function() {
        
        // toggle content
        $(this).next('.show-more-content').slideToggle(100);
        
        // remove class
        $(this).removeClass('show-more');
                
    });

    // Toggle video
    $('.candidate-video-button').click(function() {
        
        // if close, pause video; else send ga tracker event
        if ($('#candidate-video').is(':visible')) {
            $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
            
        }
        
        $('#candidate-video').toggle();
    });
    
    
});