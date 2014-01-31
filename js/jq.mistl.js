/* 
 * author: Mattia Marco Pazienti | Codekod | check out experiments repo for isyslider
 */

;(function($, window, document ) {
    
$.fn.mistl = function(options) {
                
        //wrap all
        $(this).children().wrapAll('<div class="mistl_slide"/>');
               
        //defaults
        var defaults = {
            mode: 'horizontal',
            popup: false,
            toggleText: 'open slideshow'
        };
             
        //wrapper
        var wrapper = this;
         
        //options
        var settings = $.extend({}, defaults, options);       
                
        //if vertical or horizontal
        if (settings.mode === 'vertical') {
	      wrapper.addClass('mistl vertical');
        } else {
              wrapper.addClass('mistl horizontal');
        }        
                
        // vars
        var 
        hli = $('.horizontal ul li'),
        hul = $('.horizontal ul'),
        vli = $('.vertical ul li'),
        vul = $('.vertical ul'),
        msswidth = hli.outerWidth(),
        mssheight = vli.outerHeight(),
        msstop = mssheight * (-1),
        mssleft = msswidth * (-1);

        wrapper.append('<div class="next">›</div>');
        wrapper.prepend('<div class="prev">‹</div>');
        
        var hnext = $('.horizontal .next'),
            hprev = $('.horizontal .prev'),
            vprev = $('.vertical .prev'),
            vnext = $('.vertical .next');
        
        //assign elements to before in case of prev
        $('.horizontal .mistl_slide ul li:first').before($('.horizontal .mistl_slide ul li:last'));
        $('.vertical .mistl_slide ul li:first').before($('.vertical .mistl_slide ul li:last'));
 
        //defaults left top
        hul.css({'left' : mssleft});
        vul.css({'top' : msstop});

        //functions - to be updated

        //if popup
        if (settings.popup === true) {
	      wrapper.addClass('popup');
              wrapper.prepend('<span class="toggle">' + settings.toggleText + '</span>');              
              var msstoggle = wrapper.find('.toggle');
            
              msstoggle.click(function() {
                 wrapper.animate({'height' : '260px'});
                 $("html, body").animate({ scrollTop: $(document).height() });
              });
              $('.mistl.popup').mouseleave(function() {
                 wrapper.animate({'height' : '35px'});
              });
        }
        
        if(settings.mode !== 'vertical') {

        //prev horizontal
	hprev.click(function() {
		var mssindent = parseInt(hul.css('left')) + msswidth;
		hul.animate({'left' : mssindent}, 200,function(){    
			$('.horizontal .mistl_slide ul li:first').before($('.horizontal .mistl_slide ul li:last'));           
			hul.css({'left' : mssleft});
		});
		return false;
	});

       //next horizontal
       hnext.click(function() {
		var mssindent = parseInt(hul.css('left')) - msswidth;
		hul.animate({'left' : mssindent}, 200, function () {
			$('.horizontal .mistl_slide ul li:last').after($('.horizontal .mistl_slide ul li:first'));                 	
			hul.css({'left' : mssleft});
		});
		return false;
	}); 
        
        } else {
        
        //prev vertical
	vprev.click(function() {
		var indent = parseInt(vul.css('top')) + mssheight;
		vul.animate({'top' : indent}, 200,function(){    
			$('.vertical .mistl_slide ul li:first').before($('.vertical .mistl_slide ul li:last'));         
			vul.css({'top' : msstop});
		});
		return false;
	}); 

       //next vertical
       vnext.click(function() {
		var indent = parseInt(vul.css('top')) - mssheight;
		vul.animate({'top' : indent}, 200, function () {
			$('.vertical .mistl_slide ul li:last').after($('.vertical .mistl_slide ul li:first'));                 	
			vul.css({'top' : msstop});
		});
		return false;
	});
        
        }

};

})(jQuery, window, document);
