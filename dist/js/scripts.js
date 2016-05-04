$(function() {
    FastClick.attach(document.body);
    smoothScroll.init();
});

$(document).ready(function() {
    
    var isShowHamburger = false;
    var hamburgerIsWorking = false;
    
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
	
    // Toggle video
    $('.candidate-video-button').click(function() {
        $('#candidate-video').toggle();
    });
    
});