$(document).ready(function(){
    "use sctict";
    
    //OS check========================/
    function getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }

      return os;
    }
    
     $(".fr-img-caption").parent('p').addClass("imgCaption"); 
    
    if (getOS() == "Windows") {
        $("body").addClass("os-windows");
    }
    
    if (getOS() == "iOS") {
        $("body").addClass("os-ios");
    }
    
    if (navigator.userAgent.search("Chrome") >= 0) {
        $("body").addClass("chrome-browser");
    }
    else if (navigator.userAgent.search("Firefox") >= 0) {
        $("body").addClass("firefox-browser");
        $("head").append("<style>.body-margin {margin-right:"+scrollbarWidth()+"px}</style>");  
    }
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $("body").addClass("safari-browser");
    }
    else if (navigator.userAgent.search("Opera") >= 0) {
        $("body").addClass("opera-browser");
    }
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (/IEMobile|Windows Phone/i.test(navigator.userAgent)) {
        var windowsPhone = true;
    }
    
    if ((screen.width < 1040) && (screen.height > 1040)) {
        var iPad = true;
        $("body").addClass("ipad");
    }
    //OS check========================/
    
    
			$("img.lazy").lazyload({
			    effect : "fadeIn"
			});    
    
    
    /*******************/
    
    if($(".corona_title").is(":hidden")) {
    
    } else {
        $(".container.cont").addClass('topp');
    }
    
    
    $(".corona_title span.close").click(function(){
        
        $(".corona_title").slideUp(200,function(){
                
            });
            $(".container.cont").removeClass('topp');    
        
    });
    
    
    /*Mob select lang*/
    
    
    $(".mobile_lang select").change(function(){
        thisVal = $(this).val();
       // alert(thisVal);
       if(thisVal != '#') {
           $("ul.dropdown_ul.lang_list li a[data-type='"+thisVal+"']").trigger('click');
         //  console.log(thisVal);
       }       
       return false;
       
       
    });
    
    
    
        $("ul.dropdown_ul.lang_list li a").click(function(){
            thisLang = $(this).data('lang');
            if (typeof thisLang === "undefined") {
              thisHref =  $(this).attr('href');
              window.location.href = thisHref;
              return false;
                } else {            
            thisUrl = $("link[hreflang='"+thisLang+"']").attr('href');
            thisHref =  $(this).attr('href');
            
        //    console.log(thisHref);
          //  console.log(thisUrl);
            
            if (typeof thisUrl === "undefined") {
                window.location.href = thisHref+'/';
            } else {
                
                
                checkUrl = thisUrl.search('/default');
                if(checkUrl != -1) {
                    window.location.href = thisHref+'/';
                } else {
                    window.location.href = thisUrl+'/';
                }

                
                
            }
            return false;
            }
        });    
    
    
  
    
                        
                        
     $("ul.tablist li").click(function(){
        this_ = $(this);
        $("ul.tablist li.active_tab").removeClass('active_tab');

        dataTab = $(this).data('tab');
         $("#tab"+dataTab).fadeIn('fast',function(){
            $(".posts.tab_c.active").removeClass('active').css('display','none');
            $(this).addClass('active');
            this_.addClass('active_tab');
         });
     });                  

    /*******/
        $(".show_hide").click(function(){
           $("._block.category_block ul li.n_li").slideDown(300); 
           $(this).css('display','none');
           $(".hide_show").css('display','block');
        });
        
        $(".hide_show").click(function(){
           $("._block.category_block ul li.n_li").slideUp(300); 
           $(this).css('display','none');
           $(".show_hide").css('display','block');
        });        
        
        

    /*******************/    
    

    //Scrollbar width========================/
    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }
    //Scrollbar width========================/
    
    
    //Browser check========================/
    if (navigator.userAgent.search("Chrome") >= 0) {
        $("body").addClass("chrome-browser");
    }
    else if (navigator.userAgent.search("Firefox") >= 0) {
        $("body").addClass("firefox-browser");
    }
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $("body").addClass("safari-browser");
    }
    else if (navigator.userAgent.search("Opera") >= 0) {
        $("body").addClass("opera-browser");
    }
    //Browser check========================/
    
    
    //Mainpage slider========================/
    if ($("#main_slider_wrap").length) {
        $('#main_slider_wrap').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.main_slider .arrow.prev'),
            nextArrow: $('.main_slider .arrow.next, .next_title')
        });
    }
    //Mainpage slider========================/
    
    
    
    //LightGallery========================/
    
    
    $('.lightgallery').lightGallery({
        mode: 'lg-slide-circular',
        counter: false
    });
    //LightGallery========================/
    
    
    //Blog Gallery========================/
    if ($("#blog-slider").length) {
        $('#blog-slider .slider_top').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: false,
            variableWidth: true,
            infinite: true,
            asNavFor: '#blog-slider .slider_bottom',
            prevArrow: $('#blog-slider .arrow.prev'),
            nextArrow: $('#blog-slider .arrow.next'),
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                      variableWidth: false,
                      slidesToShow: 1
                  }
                }
              ]
        });
        $('#blog-slider .slider_bottom').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#blog-slider .slider_top',
            dots: false,
            variableWidth: true,
            centerMode: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                      variableWidth: false,
                      slidesToShow: 3
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                      variableWidth: false,
                      slidesToShow: 2
                  }
                }
              ]
        });
    }
    //Blog Gallery========================/
    
    
    //Programm accordeon========================/
    if ($("#programm-days").length) {
        $("#programm-days .day_item .day_item-head").on("click", function(){
            var thisHead = $(this),
                thisBody = thisHead.next();
            
            thisHead.toggleClass("active");
            thisBody.slideToggle();
        });
    }
    //Programm accordeon========================/
    
    
    //Stories slider========================/
    if ($("#stories-slider").length) {
        $('#stories-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('.stories .arrow.prev'),
            nextArrow: $('.stories .arrow.next')
        });
    }
    //Stories slider========================/
    
    
    //Team slider========================/
    if (($("#team_slider").length) && (screen.width > 1040) && (!iPad)) {
        $('#team_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            variableWidth: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('#team_arrows .arrow.prev'),
            nextArrow: $('#team_arrows .arrow.next')
        });
    }
    
        if (($("#team_slider_e").length) && (screen.width > 1040) && (!iPad)) {
        $('#team_slider_e').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            variableWidth: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('#team_arrows_e .arrow.prev'),
            nextArrow: $('#team_arrows_e .arrow.next')
        });
    }
    
    
    if (($("#team_slider2").length) && (screen.width > 1040) && (!iPad)) {
        $('#team_slider2').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            variableWidth: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('#team_arrows2 .arrow.prev'),
            nextArrow: $('#team_arrows2 .arrow.next')
        });
    }    
    
    
    //Team slider========================/
    
    
    //Office slider========================/
    if ($("#office_slider").length) {
        $('#office_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('#office_arrows .arrow.prev'),
            nextArrow: $('#office_arrows .arrow.next')
        });
    }
    //Office slider========================/
    
    //Tour page Fallery slider========================/
    if (($("#tour-head-slider").length) && (screen.width > 1040) && (!iPad)) {
        $('#tour-head-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            swipe: true,
            fade: false,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: false,
            variableWidth: true,
            pauseOnHover: true,
            speed: 800,
            autoplaySpeed: 8000,
            prevArrow: $('#tour-head-slider-arrows .arrow.prev'),
            nextArrow: $('#tour-head-slider-arrows .arrow.next')
        });
    }
    //Tour page Fallery slider========================/
    
    
    //Tour slider========================/
    if (($("#tour-slider").length) && (screen.width > 1040) && (!iPad)) {
        $('#tour-slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 8000,
            prevArrow: $('.most_popular .arrow.prev'),
            nextArrow: $('.most_popular .arrow.next'),
            responsive: [
                {
                  breakpoint: 1366,
                  settings: {
                    touchMove: true
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      variableWidth: false
                  }
                }
              ]
        });
    }

    if (($("#tour-slider2").length) && (screen.width > 1040) && (!iPad)) {
        $('#tour-slider2').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 8000,
            prevArrow: $('.most_popular2 .arrow.prev'),
            nextArrow: $('.most_popular2 .arrow.next'),
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        touchMove: true
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }
            ]
        });
    }
    //Tour slider========================/
    
    
    //stories slider========================/
    if (($("#stries_slider").length) && (screen.width > 1040) && (!iPad)) {
        $('#stries_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.stories .arrow.prev'),
            nextArrow: $('.stories .arrow.next')
        });
    }
    
    
    if (screen.width < 761)  {len = 1; } else {len = 3;}
    
    if (($(".stries_sliderZ.sz1").length)) {
       
        $('.stries_sliderZ.sz1').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz1 .arrow.prev'),
            nextArrow: $('.sz1 .arrow.next')
        });
    }    
    
    
    
    if (($(".stries_sliderZ.sz2").length)) {
        $('.stries_sliderZ.sz2').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz2 .arrow.prev'),
            nextArrow: $('.sz2 .arrow.next')
        });
    } 
    
    if (($(".stries_sliderZ.sz3").length)) {
        $('.stries_sliderZ.sz3').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz3 .arrow.prev'),
            nextArrow: $('.sz3 .arrow.next')
        });
    } 
    
    if (($(".stries_sliderZ.sz4").length)) {
        $('.stries_sliderZ.sz4').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz4 .arrow.prev'),
            nextArrow: $('.sz4 .arrow.next')
        });
    } 
    
    if (($(".stries_sliderZ.sz5").length)) {
        $('.stries_sliderZ.sz5').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz5 .arrow.prev'),
            nextArrow: $('.sz5 .arrow.next')
        });
    } 
    
    if (($(".stries_sliderZ.sz6").length)) {
        $('.stries_sliderZ.sz6').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz6 .arrow.prev'),
            nextArrow: $('.sz6 .arrow.next')
        });
    }      
    
    if (($(".stries_sliderZ.sz7").length)) {
        $('.stries_sliderZ.sz7').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz7 .arrow.prev'),
            nextArrow: $('.sz7 .arrow.next')
        });
    }        
    
    
    if (($(".stries_sliderZ.sz8").length)) {
        $('.stries_sliderZ.sz8').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz8 .arrow.prev'),
            nextArrow: $('.sz8 .arrow.next')
        });
    }        
    
    
            if (($(".stries_sliderZ.sz9").length)) {
        $('.stries_sliderZ.sz9').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz9 .arrow.prev'),
            nextArrow: $('.sz9 .arrow.next')
        });
    }        
    
    
    if (($(".stries_sliderZ.sz10").length)) {
        $('.stries_sliderZ.sz10').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz10 .arrow.prev'),
            nextArrow: $('.sz10 .arrow.next')
        });
    }        
        
    
    
    if (($(".stries_sliderZ.sz99").length)) {
        $('.stries_sliderZ.sz99').slick({
            arrows: true,
            dots: false, 
            slidesToShow: len,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: false,
            variableWidth: true,
            pauseOnHover: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.sz99 .arrow.prev'),
            nextArrow: $('.sz99 .arrow.next')
        });
    }       
    //stories slider========================/
    
    $("p.reloadLink").click(function(){
       window.location.href = $(this).data('href');
       return false;
    });
    
    
    
    //Add to favourites button========================/
    $('.fav-button').on("click", function(e){
        e.preventDefault();
        $(this).toggleClass('added');
        
        if ($(".add-to-favorites").length) {
            $(".add-to-favorites .fav-button").toggleClass('added');
        }
    });
    
    $(".add-to-favorites .fav-button").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass('added');
        
        if ($(".add-to-favorites").length) {
            $(".tour_page_head .fav-button").toggleClass('added');
        }
    });
    //Add to favourites button========================/
    
    
    //Beautiful shadow========================/
    $(".js-shadow").each(function(){
        var thisShadow = $(this),
            thisParent = $(this).parent(),
            thisStyle = thisParent.attr("style");
        
        thisShadow.attr("style", thisStyle);
    });
    //Beautiful shadow========================/
    

    //Popup fix========================/
    function popupFunction(){  
        if((iOS == true) || (windowsPhone == true)) {
            var scrollTop = $(window).scrollTop();
            var windowH = $(window).innerHeight();

            $("body").addClass("pop-up-open");
            $("body").attr("data-top", scrollTop);
            if (windowsPhone == true) {
                $("body").css("top", scrollTop);
            }
            $("body").css({
                "top": "-" + scrollTop + "px"
            });
        } 
    }

    function popupCloseFunction(){
        if((iOS == true) || (windowsPhone == true)) {
            var scTop = $("body").attr("data-top");
            if (windowsPhone == true) {
                var scTop = $("body").css("top");
            }
            var suffix = scTop.match(/\d+/);
            $("body").removeClass("pop-up-open");
            $("body").removeAttr("style");

            $("html, body").scrollTop(parseInt(suffix));
        }
    }
    //Popup fix========================/
    
    
    //if IE========================/
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        {
            //alert("IE");
            $("body").addClass("ie-browser");
        }
        else 
        {
            // not IE
        }
        return false;
    }
    msieversion();
    //if IE========================/
    
    
    //Calendar========================/
    $(".js_calendar").datepicker({
      dateFormat: "d MM yy",
        dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
        monthNames: [ "January", "February", "March", "April", "May", "June", "Jule", "August", "September", "Oktober", "November", "December" ],
        setDate: "today",
        firstDay: 0
    });
    
    $(".js_calendar").datepicker().datepicker("setDate", new Date());
    //Calendar========================/
    
    
    //Input number only========================/
    $('.js_num').on('keydown', function(e){
      if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
        return false;
      };
    });
    
    $(".num_wrap .js_num").on("keypress", function(evt) {
      if (this.value.length==2) {
        return false;
      }
    });
    //Input number only========================/
    
    
    //Calendar Date change========================/
    $(".js_calendar").on("change", function(){
        var thisParent = $(this).parent();
        var thisVal = $(this).val();
        var date = thisVal.split(' ');
        
        var day = date[0];
        var month = date[1];
        var year = date[2];
        
        var thisDayDiv = thisParent.children(".day");
        var thisMonthDiv = thisParent.children(".date_div_right").find(".month");
        var thisYearDiv = thisParent.children(".date_div_right").find(".year");
        
        thisDayDiv.text(day);
        thisMonthDiv.text(month);
        thisYearDiv.text(year);
    });
    
    $(window).on("load", function(){
        $(".js_calendar").each(function(){
            var thisInput = $(this);
            
            var thisParent = thisInput.parent();
            var thisVal = thisInput.val();
            var date = thisVal.split(' ');

            var day = date[0];
            var month = date[1];
            var year = date[2];

            var thisDayDiv = thisParent.children(".day");
            var thisMonthDiv = thisParent.children(".date_div_right").find(".month");
            var thisYearDiv = thisParent.children(".date_div_right").find(".year");

            thisDayDiv.text(day);
            thisMonthDiv.text(month);
            thisYearDiv.text(year);
        });
        
    });
    
    var months = [
                "January", "February", "March", "April", "May", "June", "Jule", "August", "September", "Oktober", "November", "December"
            ]
    
    if (screen.width <= 1040) {
        
        $("body").addClass("mobile");
        
        $(".date_div .mobile-input").on("change", function(){
            var thisParent = $(this).parent();
            var thisVal = $(this).val();
            var date = thisVal.split('-');



            var day = date[2];
            var day = day.replace(/^0+/, '');
            var month = date[1];
            var month = months[+month-1];
            var year = date[0];

                $(this).prev().datepicker().datepicker("setDate", (day + " " + month + " " + year));

            var thisDayDiv = thisParent.children(".day");
            var thisMonthDiv = thisParent.children(".date_div_right").find(".month");
            var thisYearDiv = thisParent.children(".date_div_right").find(".year");

            thisDayDiv.text(day);
            thisMonthDiv.text(month);
            thisYearDiv.text(year);
        });
        
        $("body").append("<div id='setHeight' style='position:fixed; top:0; bottom:0;left:0;right:0;z-index:-10'></div>")
             var activeHeight = $("#setHeight").innerHeight();
             $("#setHeight").remove();
             $(".js_height").innerHeight(activeHeight);
    }
    //Calendar Date change========================/
    
    
    
    //Plus minus buttons ========================/
    (function quantityProducts() {
        var $quantityArrowMinus = $(".minus");
        var $quantityArrowPlus = $(".plus");


        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
          var $quantityNum = $(this).parent().next("input");
            
            if ($quantityNum.val() == 1) {
            $quantityNum.addClass("zero");
          }

          if ($quantityNum.val() > 0) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }

        function quantityPlus() {
            var $quantityNum = $(this).parent().next("input");
            if ($quantityNum.val() == 0) {
                $quantityNum.removeClass("zero");
              }
            
            if ($quantityNum.val() < 99) {
                $quantityNum.val(+$quantityNum.val() + 1);
              }

        }
    })();
    //Plus minus buttons ========================/
    
    
    //Select change ========================/
    $(".select_wrap select").on("change", function(){
        $(this).addClass("selected");
    });
    //Select change ========================/
    
    
    //Search Popup ========================/
    /*
    $(".search_btn").on("click", function(e){
        e.preventDefault();
        
        $("#modal_search").fadeIn();
        $("html, body").addClass("locked");
        popupFunction();
    });*/
    
    
  $(".search_btn").click(function(e){
  	e.preventDefault();
  	$('.menu_wrap').addClass('openedSearch');
  	$(".headerSearchBlockField input").focus();
  });

  $(".headerSearchBlockField input").blur(function(e){
  	var valLength = $(this).val().length;
  	if (valLength == 0) {
	  	$('.menu_wrap').removeClass('openedSearch');
  	}
  })
  
          
            
    $("#modal_search .close").on("click", function(e){
        e.preventDefault();
        
        $("#modal_search").fadeOut();
        $("html, body").removeClass("locked");
        popupCloseFunction();
    });
    //Search Popup ========================/
    
    
    
    //Footer transform ========================/
    $(window).on('resize',function() {
        if( window.innerWidth <= 1000 ){
              $(".m_title").addClass("js-column_title");
         }
        
        if( window.innerWidth > 1000 ){
              $(".m_title").removeClass("js-column_title");
         }
        
        if (iPad) {
            
            var wrap = $(".wrap").innerWidth();
            var margin = ((($(window).innerWidth()) - ($(".wrap").innerWidth()))/2);
        
            if ($(".main_slider").length) {
                $("body").addClass("mainpage");
                
                $(".ipad .most_popular .title_wrap").width(wrap);
                $(".ipad .most_popular .title_wrap").css("margin-left", margin + "px");
                $(".ipad .tour-slider .tour_item:first-child").css("margin-left", margin + "px");
                $(".ipad .tour-slider .tour_item:last-child").css("margin-right", margin + "px");
                
                $(".ipad .stories .title_wrap").width(wrap);
                $(".ipad .stories .title_wrap").css("margin-left", margin + "px");
                $(".ipad .stries_slider .story_item:first-child").css("margin-left", margin + "px");
                $(".ipad .stries_slider .story_item:last-child").css("margin-right", margin + "px");
            }
            
            if ($(".tour_page_head").length) {
                $(".ipad .tour_page_head .top-info").innerWidth(wrap);
                $(".ipad .tour_page_head .bottom-info").innerWidth(wrap);
                $(".ipad .tour_page_head .top-info").css("margin-left", margin + "px");
                $(".ipad .tour_page_head .bottom-info").css("margin-left", margin + "px");
                $(".ipad .tour_page_head .slider .slide:first-child").css("margin-left", margin + "px");
                $(".ipad .tour_page_head .slider .slide:last-child").css("margin-right", margin + "px");
            }
        
            if ($(".team_item").length) {
                $(".about-us-page .team-head").innerWidth(wrap);
                $(".about-us-page .team-head").css("margin-left", margin + "px");
                $(".ipad .about-us-page .team_item:first-child").css("margin-left", margin + "px");
                $(".ipad .about-us-page .team_item:last-child").css("margin-right", margin + "px");
            }
            
        }
        
    });
    
    if (screen.width <= 1000) {
        $(".m_title").addClass("js-column_title");
    }
    
    $( ".m_title" ).on( "click", function(){
        var this_title = $(this),
            thisUl = this_title.next();
        
        if (this_title.hasClass("js-column_title")) {
            this_title.toggleClass("active");
            thisUl.slideToggle();
        }
    });
    
    $(window).trigger('resize');
    //Footer transform ========================/
    
    
    
    //Story Single ========================/
    if ($("#stories_page").length) {
        $("#stories_box .item.active").next().addClass("next");
        var storiesCount = $("#stories_box .item").length;
        $("#stories-counter .all").text(storiesCount-1);
        
        $("#stories_box .item").each(function(){
            var thisImg = $(this).attr("data-blur-bg");
            $("#stories_bg").append("<img src='"+thisImg+"'>");
            $("#stories_box .dots ul").append("<li></li>");
        });
        
        $("#stories_box .item:last-child").addClass("active");
        $("#stories_box .dots ul li:first-child").addClass("active");
        
        function storiesTurn() {
            
            var thisArrow = $(this),
                activeStory = $("#stories_box .item.active"),
                nextStory = activeStory.prev(),
                nextStoryBg = nextStory.attr("data-blur-bg"),
                prevStory = activeStory.next(),
                prevStoryBg = prevStory.attr("data-blur-bg"),
                count = +($("#stories-counter .this").text());



            if (thisArrow.hasClass("next")) {


                if (!activeStory.is(":first-child")) {
                    $("#stories_bg img[src='"+nextStoryBg+"']").fadeIn();
                    $("#stories_bg img[src!='"+nextStoryBg+"']").fadeOut();
                    prevStory.removeClass("prev");
                    activeStory.addClass("seen");
                    activeStory.addClass("prev");
                    activeStory.removeClass("active");
                    nextStory.removeClass("next");
                    nextStory.addClass("active");
                    nextStory.prev().addClass("next");

                    $("#stories-counter .this").text(count+1);
                    $("#stories_box .dots ul li").removeClass("active");
                    $("#stories_box .dots ul li").eq(count).addClass("active");
                }

                if ($("#stories_box .arrow.prev").hasClass("disabled")) {
                    $("#stories_box .arrow.prev").removeClass("disabled");
                    $("#stories_box .arrow.prev").show();
                }

                if (nextStory.is(":first-child")) {
                    $("#stories_box .arrow.next").addClass("disabled");
                    $("#stories_box .arrow.next").hide();
                    $("#stories-counter").hide();
                }
            }

            if (thisArrow.hasClass("prev")) {


                if (!activeStory.is(":last-child")) {
                    $("#stories_bg img[src='"+prevStoryBg+"']").fadeIn();
                    $("#stories_bg img[src!='"+prevStoryBg+"']").fadeOut();

                    activeStory.removeClass("active");
                    nextStory.removeClass("next");
                    activeStory.addClass("next");
                    prevStory.removeClass("seen");
                    prevStory.removeClass("prev");
                    prevStory.next().addClass("prev");
                    prevStory.addClass("active");

                    $("#stories-counter .this").text(count-1);
                    $("#stories_box .dots ul li").removeClass("active");
                    $("#stories_box .dots ul li").eq(count-2).addClass("active");
                }

                if ($("#stories_box .arrow.next").hasClass("disabled")) {
                    $("#stories_box .arrow.next").removeClass("disabled");
                    $("#stories_box .arrow.next").show();
                    $("#stories-counter").show();
                }

                if (prevStory.is(":last-child")) {
                    $("#stories_box .arrow.prev").addClass("disabled");
                    $("#stories_box .arrow.prev").hide();
                }
            }
        }

        $("#stories_box .arrow").on("click", storiesTurn);
        
        var myElement = document.getElementById('stories_items');
        var mc = new Hammer(myElement);
        
        mc.on("swipeleft swiperight", function(ev) {
            var activeStory = $("#stories_box .item.active"),
                nextStory = activeStory.prev(),
                nextStoryBg = nextStory.attr("data-blur-bg"),
                prevStory = activeStory.next(),
                prevStoryBg = prevStory.attr("data-blur-bg"),
                count = +($("#stories-counter .this").text());
            
            if (ev.type == "swiperight") {
                if (!activeStory.is(":last-child")) {
                        $("#stories_bg img[src='"+prevStoryBg+"']").fadeIn();
                        $("#stories_bg img[src!='"+prevStoryBg+"']").fadeOut();
                    
                        activeStory.removeClass("active");
                        nextStory.removeClass("next");
                        activeStory.addClass("next");
                        prevStory.removeClass("seen");
                        prevStory.removeClass("prev");
                        prevStory.next().addClass("prev");
                        prevStory.addClass("active");
                    
                        $("#stories-counter .this").text(count-1);
                        $("#stories_box .dots ul li").removeClass("active");
                        $("#stories_box .dots ul li").eq(count-2).addClass("active");
                    }
                
                    if ($("#stories_box .arrow.next").hasClass("disabled")) {
                        $("#stories_box .arrow.next").removeClass("disabled");
                        $("#stories_box .arrow.next").show();
                        $("#stories-counter").show();
                    }
                
                    if (prevStory.is(":last-child")) {
                        $("#stories_box .arrow.prev").addClass("disabled");
                        $("#stories_box .arrow.prev").hide();
                    }
            }
            
            if (ev.type == "swipeleft") {
                if (!activeStory.is(":first-child")) {
                        $("#stories_bg img[src='"+nextStoryBg+"']").fadeIn();
                        $("#stories_bg img[src!='"+nextStoryBg+"']").fadeOut();
                        prevStory.removeClass("prev");
                        activeStory.addClass("seen");
                        activeStory.addClass("prev");
                        activeStory.removeClass("active");
                        nextStory.removeClass("next");
                        nextStory.addClass("active");
                        nextStory.prev().addClass("next");
                    
                        $("#stories-counter .this").text(count+1);
                        $("#stories_box .dots ul li").removeClass("active");
                        $("#stories_box .dots ul li").eq(count).addClass("active");
                    }
                
                    if ($("#stories_box .arrow.prev").hasClass("disabled")) {
                        $("#stories_box .arrow.prev").removeClass("disabled");
                        $("#stories_box .arrow.prev").show();
                    }
                
                    if (nextStory.is(":first-child")) {
                        $("#stories_box .arrow.next").addClass("disabled");
                        $("#stories_box .arrow.next").hide();
                        $("#stories-counter").hide();
                    }
            }
        });
    }
    //Story Single ========================/
    
    
    
    //Dropdown menu========================/
    if ((screen.width > 1200) || (iPad)) {
        if (window.innerWidth > 1200) {
            $(".dropdown_li").on({
                mouseenter: function () {
                    var thisLi = $(this),
                       thisA = thisLi.children("a"),
                       thisMenu = thisLi.children("ul");

                    if (window.innerWidth > 1200) {
                        thisMenu.stop( true, true ).fadeIn(120);
                    }

                    if (window.innerWidth <= 1200) {
                        thisMenu.stop( true, true ).slideDown();
                    }
                        thisA.addClass("hover");
                },
                mouseleave: function () {
                    var thisLi = $(this),
                   thisA = thisLi.children("a"),
                   thisMenu = thisLi.children("ul");

                    if (window.innerWidth > 1200) {
                        thisMenu.stop( true, true ).fadeOut(120);
                    }

                    if (window.innerWidth <= 1200) {
                        thisMenu.stop( true, true ).slideUp();
                    }
                  thisA.removeClass("hover");
                }
            });
        }
        
        if ((window.innerWidth <= 1200) && (!iPad)) {
            $(".dropdown_li > a").on("click", function(e){
                e.preventDefault();
                var thisA = $(this),
                   thisLi = thisA.parent(),
                   thisMenu = thisA.next("ul");
                    thisMenu.stop( true, true ).slideToggle();
                  thisA.toggleClass("hover");
            });
        }
        
    }
    
    if (screen.width <= 1200) {
        $(".dropdown_li > a").on("click", function(e){
            e.preventDefault();
            var thisA = $(this),
               thisLi = thisA.parent(),
               thisMenu = thisA.next("ul");
                thisMenu.stop( true, true ).slideToggle();
              thisA.toggleClass("hover");
        });
    }
    //Dropdown menu========================/
    
    
    
    //Mobile menu ========================/
    $("#mobile_btn").on("click", function(){
        var thisBtn = $(this),
            menu = $("#menu_wrap").fadeIn();
        
        $("html, body").addClass("locked");
        $("#menu-close, #mobile_btn").addClass("opened");
        popupFunction();
    });
    
    $("#menu-close").on("click", function(){
        
        $("html, body").removeClass("locked");
        $("#menu-close, #mobile_btn").removeClass("opened");
        $("#menu_wrap").fadeOut();
        popupCloseFunction();
    });
    //Mobile menu ========================/
    
    
    
    
    //User rating========================/
    $(".user-rating .star").on({
        mouseenter: function () {
            var thisStar = $(this),
               thisParent = thisStar.parent(".stars"),
               thisStarNum = thisStar.index();
              thisParent.children(".star").removeClass("filled");
              thisParent.children(".star").slice(0,thisStarNum+1).addClass("filled");
        },
        mouseleave: function () {
            var thisStar = $(this),
               thisParent = thisStar.parent(".stars"),
               thisStarNum = thisStar.index();
              thisParent.children(".star").removeClass("filled");
        }
    });

    $(".user-rating .star").on("click", function(e){
        e.preventDefault();
        var thisStar = $(this),
           thisParent = thisStar.parent(".stars"),
           thisStarNum = thisStar.index();

          thisParent.children(".star").slice(0,thisStarNum+1).addClass("selected");
    });
    //User rating========================/
    
    
    
    //Tour Page Single Sidebar ========================/
   var sections = $('.js-section')
  , nav = $('#sidebar-navigation')
  , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });

    nav.find('a').on('click', function () {
      var $el = $(this)
        , id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);

      return false;
    });

    
    $(window).on("resize", function(){
        if ($(".tour_page,.traveler_body,.right-sidebar1").length) {
            var sidebarOffset = $(".sidebar").offset().top;
                
                var page_content_top = $(".tour_page_body .wrap_float").offset().top;
             
             
               if ((screen.width > 1200) || (iPad)) { 

            $(window).on("scroll", function(){
                var sidebarHeight = $(".sidebar").outerHeight();
                var page_content_Height = $(".tour_page_body .wrap_float").outerHeight();

                var w_top = $(window).scrollTop();
                if((w_top>sidebarOffset) && (!$(".sidebar").hasClass("fixed"))) {
                    $(".sidebar").addClass("fixed");
                  }

                if(w_top<=sidebarOffset) {
                    $(".sidebar").removeClass("fixed");
                  }

                if(w_top>((page_content_top + page_content_Height)-sidebarHeight) ) {
                    $(".sidebar").addClass("bottom");
                  }

                if(w_top<=((page_content_top + page_content_Height)-sidebarHeight) ) {
                    $(".sidebar").removeClass("bottom");
                  }
            });
            
               }
            
        }
        
        if (window.innerWidth <= 1200) {
            $("body").addClass("desctop-min");
        }
    });
    
    $(window).trigger('resize');
    //Tour Page Single Sidebar ========================/
    
    
    
    //Animation images on Gallery page ========================/
    if ((screen.width > 1040) || (iPad)) {
        var scroll_text;
        $(".gallery-item").on({
            mouseenter: function () {
                var $elmt = $(this);
                scroll_text = setInterval(function(){scrollText($elmt);}, 20);
            },
            mouseleave: function () {
                clearInterval(scroll_text);
            }
        });
    }
    
    

        var scrollText = function($elmt){
            var scrollDiv = $elmt.find('div.images .scroll'),
                scrollDivWidth = scrollDiv.width(),
                imagesDiv = $elmt.find('div.images'),
                imagesDivWidth = imagesDiv.width(),
                difference = scrollDivWidth - imagesDivWidth;
            
            var left = scrollDiv.position().left - 1;
            //left = -left > difference ? $elmt.find('div.images .scroll').width() : left;
            if (left <= -(difference)) {
                scrollDiv.css({
                    left: -(difference)
                });
            } else {
               scrollDiv.css({
                    left: left
                }); 
            }
            
        };
    //Animation images on Gallery page ========================/
    
    
    //Usermenu ========================/
    $("#userlink").on("click", function(e){
        e.preventDefault();
        
        var thisLink = $(this),
            usermenu = $("#usermenu");
        
        usermenu.fadeToggle(100);
    });
    
    $(document).on("mouseup", function (e){
        var div = $("#userblock");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) { 
                $("#usermenu").fadeOut(100);
        }
    });
    //Usermenu ========================/
    
    
    
    //Popup open ========================/
    $(".js-popup-open").on("click", function(e){
        e.preventDefault();
        var thisHref = $(this).attr("data-href"),
            popup = $(thisHref);
        
        $(".popup").not(popup).removeClass("opened");
        popup.addClass("opened");
        $("#overlay").fadeIn(100);
        $("html, body").addClass("locked");
        $("body").addClass("body-margin");
    });
    
    $(".popup .close").on("click", function(){
        var thisParent = $(this).parent(".popup");
        
        thisParent.removeClass("opened");
        
        $("#overlay").fadeOut(100);
        $("html, body").removeClass("locked");
        $("body").removeClass("body-margin");
    });
    
    $("#overlay").on("click", function(){
        
        $(".popup").removeClass("opened");
        $("#overlay").fadeOut(100);
        $("html, body").removeClass("locked");
        $("body").removeClass("body-margin");
    });
    //Popup open ========================/
    
    
    //404 page effect ========================/
    if ($(".page_404").length) {
        var torch = document.querySelectorAll('.cover')[0];
        var room = document.querySelectorAll('.room')[0];

        var background = 'radial-gradient(circle at %%, rgba(255,255,255, .8) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.85) 100%)';

        function handleMouseover(e) {
          room.addEventListener('mousemove', handleMousemove);
        }

        function handleMouseout(e) {
          torch.style.background = 'rgba(0,0,0,0.85)';
          room.removeEventListener('mousemove');
        }

        function handleMousemove(e) {
          var style = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
          torch.style.background = style;
        }

        room.addEventListener('mousemove', handleMouseover);
        room.addEventListener('mouseleave', handleMouseout);
    }
    //404 page effect ========================/
    
    
    //Success form ========================/
    $(".js-submit").on("click", function(e){
        e.preventDefault();
        $(".popup").removeClass("opened");
        $("#contact-us-success").addClass("opened");
    });
    //Success form ========================/
    
    
    $("#toTop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });    
        

    
    
    $("p.mob_lang").click(function () {
            $(this).prev('select').trigger('click');
            return false;
    });  
    
    $(".rating .reply").on('click',function() {
        var commentId = $(this).data('id');
        var replyName = $(this).parent(".rating").next('.author').children('.name').children('span').html();
        $("textarea#commentText").val(replyName+" ").focus();
        $("input#parent_id").val(commentId);
        
        $('html, body').animate({
            scrollTop: $("textarea#commentText").offset().top-140
        }, 500);  
        return false;
        
        
    });
    
    
    liFirst = $(".category_block ul li.cat_1").clone();
     $(".category_block ul li.cat_1").remove();
    $('.category_block ul').prepend(liFirst);
    
    
  //  console.log(catLi);
 
            
    
});


function commentForm(data) {
    
    if(data.result == 1) {
       // alert('Успех');    
       $(".commentform_e").empty(); 
       $(".commentform_s").empty().append('Ваш комментарий добавлен успешно! После модерации оно появиться на сайте!');
       $(".write_comment form .center, .write_comment form .bottom").remove();
    }     
    
    if(data.result == 404) {
      //  alert('Заполните комментарий');    
       $(".commentform_e").empty().append('Напишите комментарий'); 
       $(".commentform_s").empty();      
    } 
    
    if(data.result == 99) {
      //  alert('');    
       $(".commentform_e").empty().append('Авторизуйтесь чтобы оставить комментарий'); 
       $(".commentform_s").empty();          
    }   
    
    if(data.result == 66) {
       // alert("Ошибка при записи");    
       $(".commentform_e").empty().append('Ошибка при записи в БД. Обратитесь к разработчику сайта'); 
       $(".commentform_s").empty();       
    }
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
})

/**
 * Cookie Notice Handler
 * Uzbekistan Travel - Multilingual Cookie Notice
 */

/**
 * Cookie Notice Handler
 * Uzbekistan Travel - Multilingual Cookie Notice
 */

$(document).ready(function() {
    // Cookie Notice o'zgaruvchilari
    const cookieNotice = $('#cookie-notice');
    const cookieContent = $('.cookie-content');
    const cookieDetails = $('#cookie-details');
    const cookieOverlay = $('#cookie-overlay');

    // Tugmalar
    const acceptAllButton = $('#accept-all-button');
    const rejectButton = $('#reject-button');
    const settingsButton = $('#settings-button');
    const backButton = $('#back-button');

    const translations = {
        'uz': {
            cookieText: "Barcha cookie fayllarini qabul qilish tugmasini bosish orqali siz saytda navigatsiyani yaxshilash, saytdan foydalanishni tahlil qilish va marketing faoliyatimizga yordam berish maqsadida qurilmangizda cookie fayllarini saqlashga rozilik bildirasiz.",
            settingsButton: "Cookie sozlamalari",
            rejectButton: "Hammasini rad etish",
            acceptAllButton: "Barcha cookie fayllarini qabul qilish",
            backButton: "Orqaga",
            termsTitle: "FOYDALANUVCHI KELISHUVI",
            termsContent: `
                <ol>
                    <li>
                        <h3>Ta’rif</h3>
                        <p>Ushbu <strong>Foydalanuvchi kelishuvi</strong> (keyinchalik — Kelishuv) O‘zbekiston Respublikasi Fuqarolik kodeksi 367-moddasiga muvofiq (<a href="https://lex.uz/ru/docs/111181#162763">https://lex.uz/ru/docs/111181#162763</a>) Ommaviy oferta hisoblanadi hamda «Milliy PR-markazi» Davlat unitar korxonasi (keyinchalik — Korxona) veb-sayti va Milliy Turizm axborot markazi quyi domenlarida joylashtirilgan materiallar va xizmatlardan foydalanish tartibini tartibga soladi: <a href="https://uzbekistan.travel/">https://uzbekistan.travel/</a> (keyinchalik — Sayt).</p>
                        <p>Tashrif buyuruvchi va (yoki) Foydalanuvchi ushbu Kelishuvning barcha shartlari bilan tanishganligini, ularni to‘liq va so‘zsiz qabul qilishini va ularga rioya qilish majburiyatini oladi. Foydalanuvchi tomonidan Saytdan foydalanish ushbu Kelishuvni aksept shaklida «boricha» to‘liq qabul qilishni bildiradi.</p>
                        <p>Kelishuv Saytning istalgan sahifasiga tashrif buyurgan va (yoki) Saytda ro‘yxatdan o‘tgan paytdan boshlab kuchga kiradi va Sayt xizmatlaridan foydalanish davrida muddatsiz amal qiladi. Ushbu Kelishuv barcha Tashrif buyuruvchilar va Foydalanuvchilar tomonidan hech qanday istisno va qo‘shimcha kelishuvlarsiz bajarilishi majburiydir. Foydalanuvchi xizmatlardan foydalanishdan oldin Saytdagi Kelishuvning joriy tahririyatini mustaqil ravishda tekshirishi shart.</p>
                    </li>
                    <li>
                        <h3>Kelishuv predmeti</h3>
                        <p>Ushbu Kelishuvning predmeti Sayt materiallaridan foydalanish qoidalari va Tashrif buyuruvchi va (yoki) Foydalanuvchiga Sayt xizmatlaridan foydalanish imkoniyatini taqdim etishdir. Korxona Saytning o‘zi va uning barcha turlari, shu jumladan barcha turdagi kontent: <strong>logotiplar, savdo belgilari, matnlar, maqolalar, anonslar, illyustratsiyalar, fotosuratlar, grafikalar, audio va video fayllar, foydalanuvchi interfeyslari, dizayn, tuzilmalar, dasturlar, ma’lumotlar bazalari</strong> uchun mutlaq huquqlarning egasi hisoblanadi.</p>
                    </li>
                </ol>
                <p><strong>11. Korxona yuridik manzili va rekvizitlari</strong></p>
                <p>Yuridik/pochta manzili: 100015, O‘zbekiston Respublikasi, Toshkent shahri, Mirobod tumani, Oybek ko‘chasi, 18 (birinchi qavat)</p>
                <p>Telefon: +998 95 193 21 02</p>
                <p>info@nationalprcentre.com</p>
            `
        },
        'ru': {
            cookieText: "Нажимая кнопку «Принять все файлы cookie», вы даете согласие на хранение файлов cookie на вашем устройстве для улучшения навигации по сайту, анализа использования сайта и помощи в нашей маркетинговой деятельности.",
            settingsButton: "Настройки файлов cookie",
            rejectButton: "Отклонить все",
            acceptAllButton: "Принять все файлы cookie",
            backButton: "Назад",
            termsTitle: "ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
            termsContent: `
                <ol>
                    <li>
                        <h3>Определение</h3>
                        <p>Настоящее <strong>Пользовательское соглашение</strong> (далее — Соглашение) является Публичной офертой в соответствии со статьёй 367 Гражданского кодекса Республики Узбекистан от 21.12.1995 (<a href="https://lex.uz/ru/docs/111181#162763">https://lex.uz/ru/docs/111181#162763</a>) и регулирует порядок использования материалов и Сервисов сайта Государственного унитарного предприятия «Национальный PR-центр» (далее — Предприятие), размещённого на веб-сайте и поддоменах Национального Туристического Информационного Центра: <a href="https://uzbekistan.travel/">https://uzbekistan.travel/</a> (далее — Сайт).</p>
                        <p>Посетитель и (или) Пользователь подтверждает, что ознакомлен, полностью и безоговорочно принимает все условия настоящего Соглашения и обязуется их соблюдать. Использование Сайта Пользователем означает полное принятие данного Соглашения «как есть» в форме акцепта.</p>
                        <p>Соглашение вступает в силу с момента посещения любой страницы Сайта и (или) регистрации на Сайте и действует бессрочно во время пользования Сервисами Сайта. Настоящее Соглашение обязательно для исполнения всеми Посетителями и Пользователями без каких-либо изъятий и дополнительных согласований. Пользователь обязуется самостоятельно проверять актуальную редакцию Соглашения на Сайте перед использованием Сервисов.</p>
                    </li>
                    <li>
                        <h3>Предмет Соглашения</h3>
                        <p>Предметом настоящего Соглашения являются правила использования материалов Сайта и предоставление Посетителю и (или) Пользователю возможности использования Сервисов Сайта. Предприятие является правообладателем исключительных прав на Сайт в целом и на его составные части, включая все виды контента: <strong>логотипы, товарные знаки, тексты, статьи, аннотации, иллюстрации, фотографии, графику, аудио- и видеофайлы, пользовательские интерфейсы, дизайн, структуру, программы, базы данных</strong>.</p>
                    </li>
                </ol>
                <p><strong>11. Юридический адрес и реквизиты Предприятия</strong></p>
                <p>Юридический/почтовый адрес: 100015, Республика Узбекистан, город Ташкент, Мирабадский район, улица Ойбек, 18 (первый этаж)</p>
                <p>Телефон: +998 95 193 21 02</p>
                <p>info@nationalprcentre.com</p>
            `
        },
        'en': {
            cookieText: "By clicking 'Accept All Cookies', you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.",
            settingsButton: "Cookie Settings",
            rejectButton: "Reject All",
            acceptAllButton: "Accept All Cookies",
            backButton: "Back",
            termsTitle: "USER AGREEMENT",
            termsContent: `
                <ol>
                    <li>
                        <h3>Definition</h3>
                        <p>This <strong>User Agreement</strong> (hereinafter - the Agreement) is a Public Offer in accordance with Article 367 of the Civil Code of the Republic of Uzbekistan dated 21.12.1995 (<a href="https://lex.uz/ru/docs/111181#162763">https://lex.uz/ru/docs/111181#162763</a>) and governs the use of materials and Services of the website of the State Unitary Enterprise "National PR-center" (hereinafter - the Enterprise), located on the website and subdomains of the National Tourist Information Center: <a href="https://uzbekistan.travel/">https://uzbekistan.travel/</a> (hereinafter - the Site).</p>
                        <p>The Visitor and (or) User confirms that they have read, fully and unconditionally accept all the terms of this Agreement and undertake to comply with them. The use of the Site by the User means the full acceptance of this Agreement "as is" in the form of an acceptance.</p>
                        <p>The Agreement comes into force from the moment of visiting any page of the Site and (or) registering on the Site and is valid indefinitely during the use of the Site Services. This Agreement is binding on all Visitors and Users without any exceptions or additional agreements. The User undertakes to independently check the current version of the Agreement on the Site before using the Services.</p>
                    </li>
                    <li>
                        <h3>Subject of the Agreement</h3>
                        <p>The subject of this Agreement is the rules for using the materials of the Site and providing the Visitor and (or) User with the opportunity to use the Site Services. The Enterprise is the owner of the exclusive rights to the Site as a whole and to its components, including all types of content: <strong>logos, trademarks, texts, articles, annotations, illustrations, photographs, graphics, audio and video files, user interfaces, design, structure, programs, databases</strong>.</p>
                    </li>
                </ol>
                <p><strong>11. Legal address and details of the Enterprise</strong></p>
                <p>Legal/mailing address: 100015, Republic of Uzbekistan, Tashkent city, Mirabad district, Oybek street, 18 (ground floor)</p>
                <p>Phone: +998 95 193 21 02</p>
                <p>info@nationalprcentre.com</p>
            `
        },
        'cn': {
            cookieText: "点击“接受所有Cookie”，即表示您同意在您的设备上存储Cookie，以改善网站导航、分析网站使用情况并协助我们的营销工作。",
            settingsButton: "Cookie设置",
            rejectButton: "全部拒绝",
            acceptAllButton: "接受所有Cookie",
            backButton: "返回",
            termsTitle: "使用条款",
            termsContent: `
                <p><strong>1. 定义</strong></p>
                <p>本用户协议（以下简称“协议”）是根据乌兹别克斯坦共和国民法典第367条（<a href="https://lex.uz/ru/docs/111181#162763">https://lex.uz/ru/docs/111181#162763</a>）发布的公共要约，规范了国有独资企业“国家公关中心”（以下简称“企业”）网站和国家旅游信息中心子域名（<a href="https://uzbekistan.travel/">https://uzbekistan.travel/</a>，以下简称“网站”）上的材料和服务的使用。 </p>
                <p>访问者和/或用户确认已阅读、完全且无条件地接受本协议的所有条款并承诺遵守。用户使用本网站即表示完全接受本协议</p>
            `
        }
    };

    // Sahifaning joriy tilini aniqlash (October CMS dan)
    const currentLang = $('html').attr('lang') || 'en';
    const langData = translations[currentLang] || translations['en'];

    // Matnlarni HTML'ga yuklash
    function loadTranslations() {
        $('#cookie-text').html(langData.cookieText);
        $('#settings-button-text').text(langData.settingsButton);
        $('#reject-button-text').text(langData.rejectButton);
        $('#accept-button-text').text(langData.acceptAllButton);
        $('#back-button-text').html('← ' + langData.backButton);
        $('#terms-title').text(langData.termsTitle);
        $('#terms-content').html(langData.termsContent);
        
        console.log('Cookie Notice: Translations loaded for language:', currentLang);
    }

    // Cookie funksiyalari
    function getCookieValue(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return null;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    // Analytics yoqish funksiyasi
    function enableAnalytics() {
        console.log('Cookie Notice: Analytics enabled');
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
    }

    // Analytics o'chirish funksiyasi
    function disableAnalytics() {
        console.log('Cookie Notice: Analytics disabled');
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }

    // Cookie notice ko'rsatish/yashirish
    function showCookieNotice() {
        cookieNotice.fadeIn(500);
        cookieOverlay.fadeIn(500);
        $('body').addClass('cookie-notice-open');
    }

    function hideCookieNotice() {
        cookieNotice.fadeOut(500);
        cookieOverlay.fadeOut(500);
        $('body').removeClass('cookie-notice-open');
        hideSettingsPanel();
    }

    function showSettingsPanel() {
        cookieContent.hide();
        cookieDetails.show();
        console.log('Cookie Notice: Settings panel opened');
    }

    function hideSettingsPanel() {
        cookieDetails.hide();
        cookieContent.show();
        console.log('Cookie Notice: Settings panel closed');
    }

    // Cookie consent holatini tekshirish
    function checkCookieConsent() {
        const consent = getCookieValue('cookie_consent');
        const consentDate = getCookieValue('cookie_consent_date');
        
        if (!consent || !consentDate) {
            showCookieNotice();
            return false;
        }

        const consentTimestamp = parseInt(consentDate);
        const currentTime = new Date().getTime();
        const daysDifference = (currentTime - consentTimestamp) / (1000 * 60 * 60 * 24);

        if (daysDifference > 365) {
            showCookieNotice();
            return false;
        }

        if (consent === 'accepted') {
            enableAnalytics();
        } else {
            disableAnalytics();
        }

        return true;
    }

    // Event listeners
    acceptAllButton.on('click', function(e) {
        e.preventDefault();
        setCookie('cookie_consent', 'accepted', 365);
        setCookie('cookie_consent_date', new Date().getTime().toString(), 365);
        enableAnalytics();
        hideCookieNotice();
        console.log('Cookie Notice: All cookies accepted');
    });

    rejectButton.on('click', function(e) {
        e.preventDefault();
        setCookie('cookie_consent', 'rejected', 365);
        setCookie('cookie_consent_date', new Date().getTime().toString(), 365);
        disableAnalytics();
        hideCookieNotice();
        console.log('Cookie Notice: Cookies rejected');
    });

    settingsButton.on('click', function(e) {
        e.preventDefault();
        showSettingsPanel();
    });

    backButton.on('click', function(e) {
        e.preventDefault();
        hideSettingsPanel();
    });

    // Sahifa yuklanganda ishga tushirish
    function initializeCookieNotice() {
        console.log('Cookie Notice: Initializing...');
        loadTranslations();
        setTimeout(function() {
            checkCookieConsent();
        }, 500);
        console.log('Cookie Notice: Initialization complete');
    }

    // Boshlash
    initializeCookieNotice();
});