head.ready(function() {

	$('.js-togglefooter').click(function(event) {
		$('.footer__totoggle').slideToggle();
		$(this).toggleClass('is-active');
		return false;
	});
	$('.js-toggleheader').click(function(event) {
		$('.create').slideToggle();
		return false;
	});
	$('.item').click(function(event) {
		// $(this).toggleClass('is-voted');
	});
	
	$('.pick__fave').click(function(event) {
		$('.icon-512').toggleClass('pick__fave_liked');
	});

    $('.close-item-icon').click(function(event) {
    	var _this = $(this);
        _this.parent('.item').toggleClass('close-item');
    });

    $('.item').click(function(event) {
    	if(!$(this).parents('.pick').hasClass('is-votedone')){
	    	$(this)
	    		.siblings()
	    		.off('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend')
	    		.removeClass('is-runcheckmark');
	        $(this).toggleClass('is-runcheckmark').on( 'webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function(){
			    // callback goes here
			    // $(this).parents('.pick').addClass('is-votedone');
			    // $(this).parents('.pick').addClass('is-finished');
			    console.log('animation finished');
			    $(this).closest('.pick').next().slideDown();
			});
        }
    });
	
	$('.js-search').focus(function(event) {
		$('.header__search').addClass('header__search_wide');
	});

	$('.js-search').blur(function(event) {
		$('.header__search').removeClass('header__search_wide');
	});



	$('.js-share').hover(function(event) {
		$(this).siblings('.pick__socials-list').addClass('is-runsociallist');
	},function(){
	});
	$('.pick__socials').hover(function() {
	}, function() {
		$(this).find('.pick__socials-list').removeClass('is-runsociallist');
	});

	$(window).scroll(function () {
	    if( $(window).scrollTop() > 20){
	      $('.top').addClass('is-small');
	    } else {
	      $('.top').removeClass('is-small');
	    }
	});


	$(".js-custom-scroll").mCustomScrollbar({
		theme: "light-thick",
		scrollInertia: 200,
		mouseWheel:{
		preventDefault: true,
		scrollAmount: 150 }
	});
	$('.js-toggleplugin').click(function(event) {
		$('.adplugin').css('display', 'none');
	})
	$('.js-togglepopup').click(function(event) {
		$('.popup').css('display', 'none');
	})
	$('.js-login').click(function(event) {
		$('.js-login-drop').toggleClass('is-open');
	});
});