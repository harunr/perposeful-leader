/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
	}
}


;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
        
        $('div.phone-nav').click(function(){
            $('nav.main-nav').slideToggle()

        })
                
        $('#manu-wrap').click(function(){
            $('#menu-overlay').addClass('menu-open')
        })

        $('#nav-close').click(function(){
            $('#menu-overlay').removeClass('menu-open')
        })

        $(window).scroll(function(){
            if($(window).scrollTop() > 10){
                $('.header-section').addClass('fixed')
            }
            else{
                $('.header-section').removeClass('fixed')
            }
        })
				
	})// End ready function.
    
    
    $(window).load(function(){

        //Begin Client carousel
        if ( $('.slider-wrap').length == 0 ) return false

        $('.slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            useCSS: false,
            slideshowSpeed: 1000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            start: function(slider){
                $('body').removeClass('loading');

            },
           

        })


    })
    $(window).load(function(){

        //Begin Client carousel
        if ( $('.workshop-slider-wrap').length == 0 ) return false

        $('.workshop-slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            useCSS: false,
            slideshowSpeed: 1000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            start: function(slider){
                $('body').removeClass('loading');

            },


        })


    })

    

})(jQuery)
