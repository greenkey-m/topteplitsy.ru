jQuery(window).load(function () {

    'use strict';

    jQuery('.price_calc').on("load", function () {
        console.log(jQuery(this).text());

        var arr = jQuery(this).find(".length").val().split('x');
        var width = parseFloat(jQuery(this).find(".wide").attr("placeholder").replace(',','.'));

        if (jQuery(this).find('.stepwitch').is(":checked")) {
            var long = parseInt(arr[1], 10);
        } else {
            var long = parseInt(arr[0], 10);
        }

        if (jQuery(this).find('.window').is(":checked")) {
            var price_win = parseInt(jQuery('meta[itemprop="window_price"]').attr('content'));
            long = long + price_win;
        }

        if (jQuery(this).find('.montage').is(":checked"))
        {
            long = long + parseInt(arr[2], 10);
        }
        var format = String(long).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        jQuery(this).find(".price").val(format + " руб.");
        jQuery(this).find(".area").val(arr[3] * width + ' м²');
        jQuery(this).find(".formontage span").html(String(arr[2]).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + " руб.");
    });


    jQuery('.price_calc').on("change", function () {
        console.log(jQuery(this).text());

        var arr = jQuery(this).find(".length").val().split('x');
        var width = parseFloat(jQuery(this).find(".wide").attr("placeholder").replace(',','.'));

        if (jQuery(this).find('.stepwitch').is(":checked")) {
            var long = parseInt(arr[1], 10);
        } else {
            var long = parseInt(arr[0], 10);
        }

        if (jQuery(this).find('.window').is(":checked")) {
            var price_win = parseInt(jQuery('meta[itemprop="window_price"]').attr('content'));
            long = long + price_win;
        }

        if (jQuery(this).find('.montage').is(":checked"))
        {
            long = long + parseInt(arr[2], 10);
        }
        var format = String(long).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        jQuery(this).find(".price").val(format + " руб.");
        jQuery(this).find(".area").val(arr[3] * width + ' м²');
        jQuery(this).find(".formontage span").html(String(arr[2]).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + " руб.");
    });


    /* ==============================================
     PAGE LOADER
     ============================================== */

    //jQuery("#pageloader .spinner").delay(0).fadeOut("slow");
    //jQuery("#pageloader").delay(300).fadeOut("slow");

    /* ==============================================
     HOME PAGE IMAGE SLIDER (SUPER SLIDES)
     =============================================== */

    jQuery('#fullscreen').superslides({
        play: 12000,
        animation_speed: 600,
        usekeyboard: false,
        animation: 'fade',
        inherit_height_from: window
    });

    /* ==============================================
     TEXT ROTATOR FOR HOME TEXTS
     =============================================== */

    jQuery(".text-rotetor .rotate").textrotator({
        animation: "dissolve",
        speed: 4000,
        separator: ","
    });

    /* ==============================================
     NAVIGATION SECTION CHANGEABLE BACKGROUND SCRIPT
     =============================================== */

    jQuery('body').scrollspy({
        target: '.navigation-menu',
        offset: 90
    })

    /* ==============================================
     TOOLTIPS AND POPOVER
     =============================================== */

    //Tooltip Calling
    jQuery('[data-toggle="tooltip"]').tooltip()
    // Popover Calling
    jQuery('[data-toggle="popover"]').popover()

    /* ==============================================
     HEADER 3 ROWS
     =============================================== */

    jQuery('.header-style-3').each(function () {
        var headerWidth = jQuery(this).outerWidth();
        var innerWidth = jQuery('.inner').outerWidth();
        jQuery(this).next('.header_rows').css({'width': innerWidth - headerWidth - 20 + 'px'});
    });

    /* ==============================================
     NAVIGATION LABELS
     =============================================== */

    jQuery('.label').each(function () {
        jQuery(this).append('<span></span>')
        var labelText = jQuery(this).data('label-text');
        var labelColor = jQuery(this).data('label-color');
        jQuery(this).find('span').html(labelText).addClass(labelColor);
    });

    /* ==============================================
     NAVIGATION SCROLL EFFECT
     ===============================================  */

    //Add Navigation Color
    jQuery('.white-nav > .navigation').addClass('white-nav');
    jQuery('.dark-nav > .navigation').addClass('dark-nav');
    jQuery('.colored-nav > .navigation').addClass('colored-nav');

    //Clone Navigation
    jQuery(".double-nav").clone().insertAfter("#navigation");
    //Select Second Nav
    var sMenu = jQuery('#navigation + .double-nav');
    jQuery(sMenu).addClass('second-nav').removeClass('first-nav');

    //Change Logo SRC For White Nav
    jQuery('.second-nav.white-nav .logo a img').each(function () {
        var secondLogo = jQuery(this).data('second-logo');
        jQuery(this).attr('src', secondLogo);
    });

    //AddClass for ScrollSpy
    jQuery('#navigation + .double-nav .nav-menu').addClass('navigation-menu');

    var pagetopHeight = jQuery('#pagetop').outerHeight();
    var headerH = jQuery('nav').outerHeight();
    jQuery('#pagetop + nav').css({'margin-top': pagetopHeight + 'px'});

    //Second Nav Script
    jQuery(window).scroll(function () {
        //Visible Second Nav Scripts
        var y = jQuery(this).scrollTop();
        //var homeH = jQuery('body section:nth-of-type(1)').outerHeight();
        var homeH = 300;
        var headerH = jQuery('nav').outerHeight();
        var z = jQuery('body section:nth-of-type(1)').offset().top + homeH - headerH;
        if (y >= z) {
            jQuery(sMenu).css({top: '0' + 'px'})

        } else {
            jQuery(sMenu).css({top: '-90' + 'px'})
        }
    });// End Scroll Function

    /* ==============================================
     NAVIGATION DROP DOWN MENU
     =============================================== */

    jQuery('.nav-toggle').hover(function () {
        jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeIn(250);
    }, function () {
        jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeOut(0);
    });

    jQuery('.nav a.scroll').on('click', function () {
        jQuery('.dropdown-menu').fadeOut(200);
    })

    jQuery('.dropdown-menu.pull-center').each(function () {
        var menuW = jQuery(this).outerWidth();
        if (jQuery(window).width() > 1000) {
            jQuery(this).css({'left': -menuW / 2 + 40 + 'px'});
        }
    });

    /* ==============================================
     MOBILE NAV BUTTON
     =============================================== */

    jQuery("#navigation .mobile-nav-button").on('click', function () {
        jQuery("#navigation .nav-inner div.nav-menu").slideToggle("medium", function () {
            // Animation complete.
        });
    });

    jQuery("#navigation + .navigation .mobile-nav-button").on('click', function () {
        jQuery("#navigation + .navigation .nav-inner div.nav-menu").slideToggle("medium", function () {
            // Animation complete.
        });
    });

    //Close Navigation For One Pages
    jQuery('nav ul.nav li a.scroll').on('click', function () {
        if (jQuery(window).width() < 1000) {
            jQuery("nav .nav-menu").slideToggle("2000")
        }
    });
    jQuery('nav + .navigation ul.nav li a.scroll').on('click', function () {
        if (jQuery(window).width() < 1000) {
            jQuery("nav + .navigation .nav-menu").slideToggle("2000")
        }
    });

    /* ==============================================
     FIT VIDEOS
     =============================================== */

    jQuery(".fitvid").fitVids();

    /* ==============================================
     ALERT CLOSE
     =============================================== */

    jQuery(".alert .close").on('click', function () {
        jQuery(this).parent().animate({'opacity': '0'}, 300).slideUp(300);
        return false;
    });

    /* ==============================================
     CONTENT OPTIONS
     =============================================== */

    jQuery(".content .video").each(function () {
        'use strict';
        // Add video button
        jQuery(this).append("<a class='play mp-video'></a>");
        // Add background image
        jQuery(this).append("<span class='image'></span>");
        var imageBg = jQuery(this).data('image');
        var videoLink = jQuery(this).data('video');
        jQuery(this).find('a.play').attr({'href': videoLink});
        jQuery(this).find("span.image").css({'background-image': 'url(images/' + imageBg + ')'});
    });

    /* ==============================================
     SOFT SCROLL EFFECT FOR NAVIGATION LINKS
     =============================================== */

    jQuery('.scroll').on('click', function (event) {
        var $anchor = jQuery(this);
        var headerH = jQuery('#navigation, #navigation-fixed').outerHeight();

        jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top - headerH + "px"
        }, 1400, 'easeInOutExpo');

        event.preventDefault();
    });

    /* ==============================================
     FEATURES COLLAPSE
     =============================================== */

    jQuery(".features-button a.f-button").on('click', function () {
        var collapse = jQuery('.f-collapse')
        jQuery(collapse).animate({
            opacity: "toggle",
            height: "toggle"
        }, 700);
    });

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 3 ITEMS
     =============================================== */

    var owlBox = jQuery(".box-carousel.three-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 3,
        // Responsive Settings
        itemsDesktop: [1169, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [800, 2],
        itemsTabletSmall: false,
        itemsMobile: [560, 1],
        // End Responsive Settings
        mouseDrag: false,
        pagination: true,
        navigation: true,
        touchDrag: true,
        slideSpeed: 400
    });

    // Arrows
    jQuery(".boxes-type-4 .owl-prev").addClass("fa fa-angle-left");
    jQuery(".boxes-type-4 .owl-next").addClass("fa fa-angle-right");

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 3 ITEMS / DRAGABLE
     =============================================== */

    var owlBox = jQuery(".box-carousel-dragable.three-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 3,
        // Responsive Settings
        itemsDesktop: [1169, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [600, 2],
        itemsTabletSmall: false,
        itemsMobile: [560, 1],
        // End Responsive Settings
        mouseDrag: true,
        pagination: false,
        navigation: true,
        touchDrag: true,
        slideSpeed: 400
    });

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 4 ITEMS
     =============================================== */

    var owlBox = jQuery(".box-carousel.four-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 4,
        // Responsive Settings
        itemsDesktop: [1169, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [640, 2],
        itemsTabletSmall: false,
        itemsMobile: [560, 1],
        // End Responsive Settings
        mouseDrag: false,
        pagination: true,
        navigation: true,
        touchDrag: true,
        slideSpeed: 400
    });

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 4 ITEMS / DRAGABLE
     =============================================== */

    var owlBox = jQuery(".box-carousel-dragable.four-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 4,
        // Responsive Settings
        itemsDesktop: [1169, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [640, 2],
        itemsTabletSmall: false,
        itemsMobile: [560, 1],
        // End Responsive Settings
        mouseDrag: true,
        pagination: false,
        navigation: true,
        touchDrag: true,
        slideSpeed: 400
    });

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 5 ITEMS
     =============================================== */

    var owlBox = jQuery(".box-carousel.five-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 5,
        // Responsive Settings
        itemsDesktop: [1169, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [640, 3],
        itemsTabletSmall: false,
        itemsMobile: [560, 3],
        // End Responsive Settings
        mouseDrag: true,
        pagination: false,
        navigation: false,
        touchDrag: true,
        slideSpeed: 400
    });

    /* ==============================================
     CAROUSEL SLIDER FOR BOXES / 6 ITEMS
     =============================================== */

    var owlBox = jQuery(".box-carousel.six-items");

    // Add .box-carousel class to boxes div
    owlBox.owlCarousel({
        items: 6,
        // Responsive Settings
        itemsDesktop: [1169, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [600, 3],
        itemsTabletSmall: false,
        itemsMobile: [560, 2],
        // End Responsive Settings
        mouseDrag: false,
        pagination: true,
        navigation: true,
        touchDrag: true,
        slideSpeed: 400
    });

    /* ==============================================
     CAROUSEL SLIDER FOR CATEGORIES AND INNER SLIDER
     =============================================== */

    // Category Tag
    var owlCategory = jQuery(".double-slider");
    // Inner Slider Tag
    var owlInnerSlider = jQuery(".inner-slider");

    // Categories Slider
    owlCategory.owlCarousel({
        items: 5,
        // Responsive Settings
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [800, 2],
        itemsTabletSmall: false,
        itemsMobile: [560, 1],
        // End Responsive Settings
        mouseDrag: false,
        pagination: false,
        navigation: true,
        touchDrag: false,
        slideSpeed: 400,
        // Top Navigation
        afterInit: function (elem) {
            var that = this
            that.owlControls.prependTo(elem)
        }
    });

    // Categories - Inner Slider
    owlInnerSlider.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        transitionStyle: "fade",
        pagination: true,
        paginationSpeed: 700,
        // Will be active on all categories
        autoPlay: false,
        singleItem: true
        // "singleItem:true" is a shortcut for:
        // items : 1
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    /* ==============================================
     TESTIMONIALS
     =============================================== */

    var gridContainer = jQuery('.testimonial-slide'),
        filtersContainer = jQuery('#filters-container'),
        wrap, filtersCallback;

    gridContainer.cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: true,
        autoTimeout: 4000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: 'overlayBottomReveal',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100
    });

    /* ==============================================
     CUSTOM IMAGE SLIDER
     =============================================== */

    jQuery('.basic_slider').flexslider({
        animation: "fade",
        selector: ".image_slider li",
        controlNav: true,
        directionNav: true,
        animationSpeed: 500,
        slideshowSpeed: 5000,
        pauseOnHover: true,
        direction: "vertical",
        start: function (slider) {
            jQuery('body').removeClass('loading');
        }
    });

    /* ==============================================
     FLEX SLIDER WITH IMAGE PAGINATION
     =============================================== */

    jQuery('.image-pgn-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

    /* ==============================================
     MAGNIFIC POPUP (LIGHTBOX PLUGIN)
     =============================================== */

    // Magnific Popup Calling
    jQuery('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile'
    });

    jQuery('.mp-video, mp-map').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom mfp-img-mobile'
    });

    //iframe scripts
    jQuery.extend(true, jQuery.magnificPopup.defaults, {
        iframe: {
            patterns: {
                //youtube videos
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },
                //vimeo videos
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                },
                //google maps
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        }
    });

    //for image gallery
    jQuery('.mp-gallery').each(function () { // the containers for all your galleries
        jQuery(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            }
        });
    });

    /* ==============================================
     VIDEO PLAYER
     =============================================== */

    jQuery(".player").mb_YTPlayer();

    /* ==============================================
     CHANGE BG TONE WITH HOVER
     =============================================== */

    jQuery("#fullpage .feature-boxes").on('hover', function () {
        jQuery(".page_bg").animate({"opacity": 0.8}, 400);
    }, function () {
        jQuery(".page_bg").animate({"opacity": 1}, 400);
    });

    /* ==============================================
     FULL SCREEN FEATURES SCRIPTS
     =============================================== */

    // Translate to Images for FullPage Version Categories
    jQuery('.translated_image').each(function () {
        // Get Window Height
        var wHeight = jQuery(window).height();
        // Get Image Width
        var iWidth = jQuery(this).find('img').width();
        // Add Image Classes
        jQuery('.translated_image[data-image-position]').each(function () {
            var $self = jQuery(this);
            $self.find('img').addClass($self.data('image-position'));
        });
        // Make 100% height for image
        jQuery(this).find('img').css({'height': wHeight + 'px'});
        jQuery('.translated_image').css({'height': wHeight + 'px'});
        // Calculate left value for center class
        jQuery('.translated_image').find('img.center').css({'left': -iWidth / 2 + 'px'});
    });

    /* ==============================================
     MOBILE BACKGROUND FOR VIDEO BACKGROUNDS
     =============================================== */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery('.mbYTP_wrapper').addClass('mobile-bg');
        jQuery('section , div').addClass('b-scroll');
        jQuery('.animated').addClass('visible');
    } else {

        // Select to link
        jQuery('a.ex-link').on('click', function () {
            var Exlink = this.getAttribute('href');
            var emptyLink = jQuery(this).attr("href");

            if (emptyLink === "#") {
            } else {

                // Fade In Page Loader
                jQuery('#pageloader').fadeIn(700, function () {
                    document.location.href = Exlink;
                });

            }

            return false;
        });

        //ANIMATED ITEMS
        jQuery('.animated').appear(function () {
            var item = jQuery(this);
            var animation = item.data('animation');
            if (!item.hasClass('visible')) {
                var animationDelay = item.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function () {
                        item.addClass(animation + " visible");
                    }, animationDelay);
                } else {
                    item.addClass(animation + " visible");
                }
            }
        });

        //Parallax Classes
        jQuery('body.parallax .parallax').parallax("50%", 0.5);
        jQuery('body.parallax .parallax1').parallax("50%", 0.5);
        jQuery('body.parallax .parallax2').parallax("50%", 0.5);
        jQuery('body.parallax .parallax3').parallax("50%", 0.5);
        jQuery('body.parallax .parallax4').parallax("50%", 0.5);
        jQuery('body.parallax .parallax5').parallax("50%", 0.5);
        jQuery('body.parallax .parallax6').parallax("50%", 0.5);
        jQuery('body.parallax .parallax7').parallax("50%", 0.5);
        jQuery('body.parallax .parallax8').parallax("50%", 0.5);
        jQuery('body.parallax .parallax9').parallax("50%", 0.5);
        jQuery('body.parallax .parallax10').parallax("50%", 0.5);
        jQuery('body.parallax .parallax11').parallax("50%", 0.5);

    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery('#timeline').css({"display": "none"});
        jQuery('#categories').css({"display": "none"});
    } else {
    }

    /* ==============================================
     CREXIS MARGIN AND PADDING RULER
     =============================================== */

    // Calculate Margin Left
    jQuery('[class*="ml-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("ml-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("ml-")[1].split("")[1]
        jQuery(this).css({'margin-left': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Margin Top
    jQuery('[class*="mt-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("mt-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("mt-")[1].split("")[1]
        jQuery(this).css({'margin-top': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Margin Right
    jQuery('[class*="mr-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("mr-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("mr-")[1].split("")[1]
        jQuery(this).css({'margin-right': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Margin Bottom
    jQuery('[class*="mb-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("mb-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("mb-")[1].split("")[1]
        jQuery(this).css({'margin-bottom': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Padding Left
    jQuery('[class*="pl-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("pl-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("pl-")[1].split("")[1]
        jQuery(this).css({'padding-left': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Padding Top
    jQuery('[class*="pt-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("pt-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("pt-")[1].split("")[1]
        jQuery(this).css({'padding-top': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Padding Right
    jQuery('[class*="pr-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("pr-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("pr-")[1].split("")[1]
        jQuery(this).css({'padding-right': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });
    // Calculate Padding Bottom
    jQuery('[class*="pb-"]').each(function () {
        var valueRulerPointOne = jQuery(this).attr('class').split("pb-")[1].split("")[0]
        var valueRulerPointTwo = jQuery(this).attr('class').split("pb-")[1].split("")[1]
        jQuery(this).css({'padding-bottom': valueRulerPointOne + valueRulerPointTwo + 'px'});
    });

    /* ==============================================
     CHECK FOR INTERNET EXPLORER
     =============================================== */

    //Check if browser is IE or not
    if (navigator.userAgent.search("MSIE") >= 0) {
        jQuery('br').addClass('iebr');
        var logoH = jQuery('.logo img').outerHeight();
        jQuery('.logo').css({"margin-top": -logoH / 2 + 'px'});
    } else {
    }

    /* ==============================================
     NAVIGATION TYPE 2 - NAV CLOSE/OPEN
     =============================================== */

    // Navigation Type 2 Scripts
    var navt = jQuery('#navigation-type2 .nav-menu');
    jQuery(navt).append('<span class="fa fa-bars"></span>');

    jQuery('#navigation-type2 .nav-menu span').on('click', function () {
        jQuery('#navigation-type2 .nav-menu ul').fadeToggle("slow");
    });
    jQuery('#navigation-type2 .nav-menu a').on('click', function () {
        jQuery('#navigation-type2 .nav-menu ul').fadeOut("slow");
    });

    /* ==============================================
     CALCULATE HOME INNER HEIGHT
     =============================================== */

    // Add .vertical-center Class
    jQuery('.categories_full_screen .boxes .box .texts').addClass('vertical-center');
    jQuery('.home-inner').addClass('vertical-center');
    // Calculate Height and Margin
    jQuery('.vertical-center').each(function () {
        var itemH = jQuery(this).outerHeight();
        jQuery(this).css({"margin-top": -itemH / 2 + 'px'});
    });

// End Window Load Function
});

/* ==============================================
 COUNT FACTORS
 =============================================== */

// Count Scripts
(function ($) {
    $.fn.countTo = function (options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return jQuery(this).each(function () {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                jQuery(_this).html(value.toFixed(options.decimals));

                if (typeof (options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof (options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null  // callback method for when the element finishes updating
    };

    // Count Options
    jQuery(".fact").appear(function () {
        dataperc = jQuery(this).attr('data-perc'),
            //Count Factors Options
            jQuery(this).find('.factor').delay(0).countTo({
                from: 0,
                to: dataperc,
                speed: 3000,
                refreshInterval: 50
            });
    });

})(jQuery);

/* ==============================================
 ANIMATED SKILL BARS
 =============================================== */

jQuery('.progress-bar').appear(function () {
    datavl = jQuery(this).attr('data-value'),
        // Add Data Value to Width
        jQuery(this).animate({"width": datavl + "%"}, 300);
    // Create Span
    jQuery(this).append("<span></span>");
    // Add value to Span
    jQuery(this).find("span").html(datavl + "%");
});

/* ==============================================
 CATEGORIES FULL SCREEN - DATA TEXT AREAS
 =============================================== */

jQuery('.categories_full_screen .box').each(function () {
    // Find data-text
    var itemText = jQuery(this).find('a.read_more').data('text');
    // Add Span with data-text
    jQuery(this).find('.texts').append('<span>' + itemText + '</span>');
});

/* ==============================================
 FEATURES WITH MOBILE SCRIPTS
 =============================================== */

jQuery('.strips').each(function () {
    dataWidth = jQuery(this).attr('data-width'),
        dataHeight = jQuery(this).attr('data-height'),
        // Change Width
        jQuery(this).css({"width": dataWidth + "px"});
    // Change Height
    jQuery(this).css({"height": dataHeight + "px"});
});

/* ==============================================
 SKROLLR SCRIPT
 =============================================== */

skrollr.init({
    forceHeight: false,
    mobileCheck: function () {
        //hack - forces mobile version to be off
        return false;
    }
});

/* ==============================================
 TIMELINE
 =============================================== */

// Move Timeline Line Strip
jQuery(".timeline_line").insertAfter(".timeline_items_wrapper");
// Add Titles
jQuery('#timeline .item').each(function () {
    var imageTitle = jQuery(this).attr('title')
    jQuery(this).find('.image-link').attr('title', imageTitle);
});
// ALL OPTIONS IN js/jquery.timeline.js file

/* ==============================================
 BACK TO TOP BUTTON
 =============================================== */

// hide #back-top first
jQuery("#back-top").hide();
// fade in #back-top
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 500) {
        jQuery('#back-top').fadeIn();
    } else {
        jQuery('#back-top').fadeOut();
    }
});
// Go to Top
jQuery(".back-top").on('click', function () {
    jQuery("html, body").animate({scrollTop: 0}, 1400, 'easeInOutExpo');
    return false;
});

/* ==============================================
 BLOG DATES FOR MOBILE
 =============================================== */

jQuery('#blog .post').each(function () {
    var newPosition = jQuery(this).find('.post-header');
    jQuery(this).find('.dates').clone().insertAfter(newPosition).addClass('for-mobile');
});


jQuery(".marker.p1").on('mouseenter', function () {
    jQuery(".field.p1").addClass("opened");
    jQuery(".line.p1").addClass("opened");
});
jQuery(".marker.p1").on('mouseleave', function () {
    jQuery(".field.p1").removeClass("opened");
    jQuery(".line.p1").removeClass("opened");
});

jQuery(".marker.p2").on('mouseenter', function () {
    jQuery(".field.p2").addClass("opened");
    jQuery(".line.p2").addClass("opened");
});
jQuery(".marker.p2").on('mouseleave', function () {
    jQuery(".field.p2").removeClass("opened");
    jQuery(".line.p2").removeClass("opened");
});

jQuery(".marker.p3").on('mouseenter', function () {
    jQuery(".field.p3").addClass("opened");
    jQuery(".line.p3").addClass("opened");
});
jQuery(".marker.p3").on('mouseleave', function () {
    jQuery(".field.p3").removeClass("opened");
    jQuery(".line.p3").removeClass("opened");
});

jQuery(".marker.p4").on('mouseenter', function () {
    jQuery(".field.p4").addClass("opened");
    jQuery(".line.p4").addClass("opened");
});
jQuery(".marker.p4").on('mouseleave', function () {
    jQuery(".field.p4").removeClass("opened");
    jQuery(".line.p4").removeClass("opened");
});

jQuery(".marker.p5").on('mouseenter', function () {
    jQuery(".field.p5").addClass("opened");
    jQuery(".line.p5").addClass("opened");
});
jQuery(".marker.p5").on('mouseleave', function () {
    jQuery(".field.p5").removeClass("opened");
    jQuery(".line.p5").removeClass("opened");
});

jQuery(".marker.p6").on('mouseenter', function () {
    jQuery(".field.p6").addClass("opened");
    jQuery(".line.p6").addClass("opened");
});
jQuery(".marker.p6").on('mouseleave', function () {
    jQuery(".field.p6").removeClass("opened");
    jQuery(".line.p6").removeClass("opened");
});

jQuery(".marker.p7").on('mouseenter', function () {
    jQuery(".field.p7").addClass("opened");
    jQuery(".line.p7").addClass("opened");
});
jQuery(".marker.p7").on('mouseleave', function () {
    jQuery(".field.p7").removeClass("opened");
    jQuery(".line.p7").removeClass("opened");
});
