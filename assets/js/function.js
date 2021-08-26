(function($){
	'use strict';

    //sidebar top fixed start
    var fixed_top = $(".side-bar");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 130) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $('body').addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp"); 
            $('body').removeClass("body-padding");
        }
    });

    //menu side bar
    $('.mobile-bar').on('click', function(){
        $('body,header,.mobile-bar,.header-cart,.main-menu').toggleClass('active');
    });

    $('.crose-bar').on('click', function(){
        $('body,header,.mobile-bar,.main-menu').removeClass('active');
    });

    //menu side bar
    $('.side-hamburger').on('click', function(){
        $('bod,.overlay,.side-hamburger,.sidebar-menu').toggleClass('active');
    });

    // remove overlay
    $('.overlay').on('click', function() {
        $('body,.overlay,.side-hamburger,.sidebar-menu').removeClass('active');
    });

    // menu icon-related
    $(".list-item>li>.sub-menu").parent("li").children("a").addClass("icon-down");

    //mobile drodown menu display
	$('ul.menu-list li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(500,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(500,"swing");
            element.siblings('li').children('ul').slideUp(500,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(500,"swing");
        }
	}); 


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
    });
    // Theme switcher
    $(document).ready(function(){
        $(".theme-switcher").click(function(){
        $(this).text(function(i, v){
        return v === 'light' ? 'dark' : 'light'
        });
        });
    });

    (function() {
    $('.theme-switcher').click(function() {
        $('#theme').toggleClass('dark');
    });
    })();

     // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
        } else {
        scrollTop.addClass("active");
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
        scrollTop: 0
        }, 500);
        return false;
    });

    // lightcase activation//
	// $('a[data-rel^=lightcase]').lightcase();
	// $(window).on('load', function(){
	// 	$('.preloader').fadeOut(1000);
	// })

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY){
        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function(e){
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
        $(this).remove();
    });

    //ui tabs activation
    // $( function() {
    //     $( "#tabs" ).tabs();
    // } );


    // product slider activation
    var swiper = new Swiper(".product-slider", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        mousewheel: true,
        keyboard: true,
    });

    //  File Name: app-ecommerce-details.js
    //  Description: App Ecommerce Details js.
    // ============================================================================
    $(document).ready(function () {
        
    })

    var mySwiper14 = new Swiper('.swiper-responsive-breakpoints', {
        slidesPerView: 1,
        spaceBetween: 55,
        // init: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1300: {
            slidesPerView: 5,
            spaceBetween: 30,
            },
            900: {
            slidesPerView: 3,
            spaceBetween: 55,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 30,
            }
        }
        });
        // product color options
        // $(".product-color-options li").on("click", function () {
        //     $this = $(this);
        //     $this.addClass('selected').siblings().removeClass('selected');
        // })

    //product slider activetion
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        575: {
          slidesPerView: 4,
        }
    },
	  });
	  var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		autoplay: true,
		navigation: {
		  nextEl: '.product-button-next',
		  prevEl: '.product-button-prev',
		},
		thumbs: {
		  swiper: galleryThumbs
		}
    });

    // sticky-widget
    $(function() {
        $('.content-text, .sticky-widget').theiaStickySidebar();
    });

    //select model
    $('.product-title').on('click', function() {
        // window.scrollTo(0, $("#colorChoose").offset().top);
        $('html, body').animate({
            scrollTop: $("#colorChoose").offset().top
        }, 'slow');
    });

})(jQuery);
