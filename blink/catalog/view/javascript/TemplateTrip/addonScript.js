/*! Customized Jquery from Punit Korat.  punit@templatetrip.com  : www.templatetrip.com
Authors & copyright (c) 2016: TemplateTrip - Webzeel Services(addonScript). */
/*! NOTE: This Javascript is licensed under two options: a commercial license, a commercial OEM license and Copyright by Webzeel Services - For use Only with TemplateTrip Themes for our Customers*/
/* ------------ Start Content-width JS --------------- */
function contentwidth() {
	colsWidth = $('#column-right, #column-left').length;
	if($( window ).width() >= 1300) {
		$( "#content" ).addClass( "Cwidth" );
		$( "#column-left" ).addClass( "Lwidth" );
		$( "#column-right" ).addClass( "Rwidth" );
		if (colsWidth == 2) {
			$('.Cwidth').css('width', '60%');
			$('.Lwidth').css('width', '20%');
			$('.Rwidth').css('width', '20%');
		} else if (colsWidth == 1) {
			$('.Cwidth').css('width', '76%');
			$('.Lwidth').css('width', '24%');
			$('.Rwidth').css('width', '24%');
		} else {
			$('.Cwidth').css('width', '100%');
		}
	} else if($( window ).width() >= 1199) {
		$( "#content" ).addClass( "Cwidth" );
		$( "#column-left" ).addClass( "Lwidth" );
		$( "#column-right" ).addClass( "Rwidth" );
	if (colsWidth == 2) {
		$('.Cwidth').css('width', '60%');
		$('.Lwidth').css('width', '20%');
		$('.Rwidth').css('width', '20%');
		$("#column-left" ).addClass("Rtoggle" );
		$("#column-left h1.text-uppercase").click(function() {
			$(this).parent().toggleClass('active').find('.rightcolumn-toggle').slideToggle( "200" );
		});
	} else if (colsWidth == 1) {
		$('.Cwidth').css('width', '75%');
		$('.Lwidth').css('width', '25%');
		$('.Rwidth').css('width', '25%');
	} else {
		$('.Cwidth').css('width', '100%');
	}
	} else {
	$("#content").removeClass("Cwidth");
	$("#column-left").removeClass("Lwidth");
	$("#column-right").removeClass("Rwidth");
	$("#column-right" ).removeClass("Rtoggle" );
	$('#content').removeAttr("style");
	$('#column-left').removeAttr("style");
	$('#column-right').removeAttr("style");
	} 
}
$(document).ready(function(){contentwidth();});
$(window).resize(function() {contentwidth();});

/* ------------ End Content-width JS --------------- */
$(document).ready(function() {
	
  $('.image-additional img').on(
      'click',
      (event) => {
        $('.product-image img').attr('src',$(event.target).data('image-large-src'));
        $('.selected').removeClass('selected');
        $(event.target).addClass('selected');
        $('.product-image img').prop('src', $(event.currentTarget).data('image-large-src'));
      }
	);	

	$(".ttsearch_button").click(function() {
			$('.ttsearchtoggle').parent().toggleClass('active');
			$('.ttsearchtoggle').toggle('fast', function() {
			});
			$('.ttsearchtoggle .input-lg').attr('autofocus', 'autofocus').focus();
			$(".account-link-toggle").slideUp("slow");
			$(".header-cart-toggle").slideUp("slow");
			$(".currency-toggle").slideUp("slow");
			$(".language-toggle").slideUp("slow");
			$("body").removeClass("user-open");
			$("body").removeClass("cart-open");
			$("body").toggleClass("search-open");
			$("body").removeClass("language-open");
			$("body").removeClass("currency-open");
	 	});
	
		$("#top-links a.dropdown-toggle").click(function(){
			$( ".account-link-toggle" ).slideToggle( "2000" );
			$(".currency-toggle").slideUp("slow");
			$(".language-toggle").slideUp("slow");

		   	$(".header-cart-toggle").slideUp("slow");
			$('.ttsearchtoggle').parent().removeClass("active");
			$('.ttsearchtoggle').hide('fast');
			$("body").removeClass("search-open");
			$("body").removeClass("cart-open");
			$("body").toggleClass("user-open");
			$("body").removeClass("language-open");
			$("body").removeClass("currency-open");
    	});
			
		$("#cart button.dropdown-toggle").click(function(){
			$( ".header-cart-toggle" ).slideToggle( "2000" );														 
		   	$(".account-link-toggle").slideUp("slow");
			$(".language-toggle").slideUp("slow");
			$(".currency-toggle").slideUp("slow");
			$('.ttsearchtoggle').parent().removeClass("active");
			$('.ttsearchtoggle').hide('fast');
			$("body").removeClass("search-open");
			$("body").removeClass("user-open");
			$("body").toggleClass("cart-open");
			$("body").removeClass("language-open");
			$("body").removeClass("currency-open");
   	    });
		
		$("#form-currency button.dropdown-toggle").click(function(){
			$( ".currency-toggle" ).slideToggle( "2000" );	
			$(".language-toggle").slideUp("slow");
			$(".account-link-toggle").slideUp("slow");
			$(".header-cart-toggle").slideUp("slow");
			$('.ttsearchtoggle').parent().removeClass("active");
			$('.ttsearchtoggle').hide('fast');
			$("body").toggleClass("currency-open");
			$("body").removeClass("language-open");
			$("body").removeClass("search-open");
			$("body").removeClass("user-open");
			$("body").removeClass("cart-open");
    	});
		
        $("#form-language button.dropdown-toggle").click(function(){
			$( ".language-toggle" ).slideToggle( "2000" );																  
			$(".currency-toggle").slideUp("fast");
			$(".account-link-toggle").slideUp("slow");
			$(".header-cart-toggle").slideUp("slow");
			$('.ttsearchtoggle').parent().removeClass("active");
			$('.ttsearchtoggle').hide('fast');
			$("body").toggleClass("language-open");
			$("body").removeClass("currency-open");
			$("body").removeClass("search-open");
			$("body").removeClass("user-open");
			$("body").removeClass("cart-open");
       	});

	$(".option-filter .list-group-items a").click(function() {
		$(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
	});

	$("ul.breadcrumb li:nth-last-child(1) a").addClass('last-breadcrumb').removeAttr('href');

	$("#column-left .products-list .product-thumb, #column-right .products-list .product-thumb").unwrap();

	$("#content > h1, .account-wishlist #content > h2, .account-address #content > h2, .account-download #content > h2").first().addClass("page-title");
	
	$("#content > .page-title").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
	$(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
	$(".page-title-wrapper").prependTo($(".header-content-title .parallex"));
	
	$("#account-order #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
	$("#account-address #content > h2").wrap("<div class='page-title-wrapper'><div class='container'><div class='breadcrub'></div></div></div>");
	$(".page-title-wrapper .container .breadcrub").append($("ul.breadcrumb"));
	$("#content > .page-title-wrapper").appendTo($("#page > .header-content-title"));
	
	$('#column-left .product-thumb .image, #column-right .product-thumb .image').attr('class', 'image col-xs-5 col-sm-4 col-md-4');
	$('#column-left .product-thumb .thumb-description, #column-right .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-8 col-md-8');

		$('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-3 col-sm-3 col-md-4');
		$('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-8 col-sm-8 col-md-8');
		$('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
	
		$('select.form-control').wrap("<div class='select-wrapper'></div>");
		$('input[type="checkbox"]').wrap("<span class='checkbox-wrapper'></span>");
		$('input[type="checkbox"]').attr('class','checkboxid');
		$('input[type="radio"]').wrap("<span class='radio-wrapper'></span>");
		$('input[type="radio"]').attr('class','radioid');
		
		$('#column-left .products-list .btn-cart').removeAttr('data-original-title');
		$("#column-left .product-thumb .button-group, #column-right .product-thumb .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().find(".caption"));
		});
		
		
/*-------start go to top---------*/		
	$( "body" ).append( "<div class='backtotop-img'><div class='goToTop ttbox'></div></div>" );
	$( "body" ).append( "<div id='goToTop' title='Top' class='goToTop ttbox-img'></div>" );
	$("#goToTop").hide();
/*-------end go to top---------*/

/*-------ttcmssubbanner---------*/
$("body #ttcmssubbanner,body #ttcmsservices").wrapAll("<div class='subbanner-service'><div class='container'><div class='row'></div></div></div>");

   function sameheight(){
	    if ($(document).width() >= 544){    
	    var maxHeight = $("#ttcmssubbanner").height();
	    	$(".ttcmsservice").height(maxHeight);
	    }
	    else {
	    	$(".ttcmsservice").height("auto");
	    }
    }
	$(document).ready(function(){sameheight();});
    $(window).resize(function(){sameheight();});
    $(window).scroll(function() {sameheight();});
	
	/*-------ttcmssubbanner---------*/
/*---------------------- Inputtype Js Start -----------------------------*/
	$('.checkboxid').change(function(){
	if($(this).is(":checked")) {
	$(this).addClass("chkactive");
	$(this).parent().addClass('active');
	} else {
	$(this).removeClass("chkactive");
	$(this).parent().removeClass('active');
	}
	});
	
	$(function() {
	var $radioButtons = $('input[type="radio"]');
	$radioButtons.click(function() {
	$radioButtons.each(function() {
	$(this).parent().toggleClass('active', this.checked);
	});
	});
	});
/*---------------------- Inputtype Js End -----------------------------*/
/*------------- Slider -Loader Js Strat ---------------*/
		$(window).load(function() 
		{ 
		$(".ttloading-bg").fadeOut("slow");
		})
/*------------- Slider -Loader Js End ---------------*/

/* Slider Load Spinner */
$(window).load(function() { 
	$("#flexslider .ttloading-bg").removeClass("ttloader");
});
 
    /* ----------- End Carousel For Topcategories  ----------- *

	/* --------------- Start Sticky-header JS ---------------*/	
function menuClass() {
	if($( window ).width() > 1199) {
		$( ".left-main-menu" ).addClass( "left-menu" );
	}
	else {
		$( ".left-main-menu" ).removeClass( "left-menu" );
	}
}
$(document).ready(function(){menuClass();});
$(window).resize(function() {menuClass();});
		
		function header() {
		  if (jQuery(window).width() > 1199){
			if (jQuery(this).scrollTop() > 120) {
			  jQuery('.full-header').addClass("fixed");
			}else{
			  jQuery('.full-header').removeClass("fixed");
			}
		  } else {
			jQuery('.full-header').removeClass("fixed");
		  }
		}
			 
		$(document).ready(function(){header();});
		jQuery(window).resize(function() {header();});
		jQuery(window).scroll(function() {header();});
  /* --------------- End Sticky-header JS ---------------*/	
     /* ----------- Start  Left-col ----------- */
function left() {
	$('.leftbar').click(function(event) {
		$('.left-right-inner').addClass("nav-open");
		$('body').addClass("open");
	});

	$(".close-filter").click(function(){
		$(".left-right-inner").removeClass("nav-open");
		$('body').removeClass("open");
	});
}

$(document).ready(function() {
    left();
});
jQuery(window).resize(function() {
    left();
});
jQuery(window).scroll(function() {
    left();
});
/* ----------- End Left-col ----------- */
/* -----------Start carousel For TT-Service logo ----------- */
		   		var ttservice = $('#ttcmsservices .ttcmsservices').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:true,
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
					
				}
			});


    /* -----------End carousel For TT-Service logo ----------- */
/* -----------Start carousel For Testimonial JS ----------- */
	var tttestimonial = $('#tttestimonial-carousel').owlCarousel({
				items : 1, //1 items above 1000px browser width
				nav: false,
				dots: true,
				loop: false,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					481:{
						items:1
					},
					768:{
						items:1
					},
					992:{
						items:1
					},
					1200:{
						items:1
					}
				}
			});
    /* -----------End carousel For Testimonial JS ----------- */
	/* ----------- Start carousel For Service ----------- */

	var ttservices = $('#ttcmsservices .ttcmsservice').owlCarousel({
				items : 1, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:true,
				autoplaySpeed: 1000,
				autoplayHoverPause:true,
				smartSpeed:450,
				pagination:false,
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					420:{
						items:2
					},
					544:{
						items:1
					},
					768:{
						items:1
					},
					992:{
						items:2
					},
					1200:{
						items:2
					}
				}
			});
    /* ----------- End carousel For Service ----------- */
/* -----------Start carousel For Footerservice JS ----------- */
	var ttfooterservice = $('#ttcmsfooterservice .ttcmsservices').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					544:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});
    /* -----------End carousel For Footerservice JS ----------- */
		/* ----------- Start Smart Blog JS ----------- */
	  var ttblog = $('#ttsmartblog-carousel').owlCarousel({
				items : 2, //1 items above 1000px browser width
				nav : true,
				dots : false,
				loop: false,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					600:{
						items:2
					},
					767:{
						items:2
					},
					992:{
						items:3
					},
					1400:{
						items:3
					}
				}
			});
		// Custom Navigation Events
      $(".ttblog_next").click(function(){
			ttblog.trigger('next.owl.carousel',[700]);
	  })
	  $(".ttblog_prev").click(function(){
		 	ttblog.trigger('prev.owl.carousel',[700]);
	  })

/*-----------start menu toggle ------------*/
	$('.left-main-menu .TT-panel-heading').click(function() { 
		$('.left-main-menu .TT-panel-heading').toggleClass('active'); 
		$('.left-main-menu ul.dropmenu').slideToggle("2000"); 
	});  

/*-----------End menu toggle ------------*/
/* ------------ Start TemplateTrip Parallax JS ------------ */
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
	if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
	}else{
	$(".parallex").sitManParallex({  invert: true });
	}	
	/* ------------ End TemplateTrip Parallax JS ------------ */
	$(".ttpopupclose").click(function() {
        $("#dialog").removeClass("in");
        $("#dialog").css('display', 'none');
        $(".b-modal.__b-popup1__").remove();
        $(".newletter-popup").css('display', 'none');
    });

// Carousel Counter
colsCarousel = $('#column-right, #column-left').length;
if (colsCarousel == 1) {
	ci=1;
} else if (colsCarousel == 0) {
	ci=4;
} else {
	ci=4;
}
// product Carousel

// product Carousel

		initialize_owl($('#owl1'));
	
		$('a[href="#tab-latest-0"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl1'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl1'));
		});
	
		$('a[href="#tab-featured-0"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl2'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl2'));
		});
	
		$('a[href="#tab-bestseller-0"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl3'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl3'));
		});

		$('a[href="#tab-special-0"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl4'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl4'));
		});


/* Go to Top JS START */
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('.goToTop').fadeIn();
			} else {
				$('.goToTop').fadeOut();
			}
		});
	
		// scroll body to 0px on click
		$('.goToTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
	/* Go to Top JS END */
	
/* Active class in Product List Grid START */



	$('#list-view').click(function() {
		$('#grid-view').removeClass('active');
		$('#short-view').removeClass('active');
		$('#grid-view1').removeClass('active');
		$('#grid-view2').removeClass('active');
		$('#list-view').addClass('active');
		$('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-4 col-sm-4 col-md-4');
		$('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-8 col-sm-8 col-md-8');
		//$(".product-layout.product-list .product-thumb .button-group .btn-cart").removeAttr('data-original-title'); /* for remove tooltrip */
	
		$(".product-layout.product-list .product-thumb .caption .product-countdown").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
		$(".product-layout.product-list .product-thumb .thumb-description .product-price-and-shipping").each(function(){
		    $(this).insertAfter($(this).parent().parent().find(".thumb-description .description"));
		});
		$(".product-layout.product-list .product-thumb .image .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-list .product-thumb .caption .rating").each(function(){
		    $(this).insertAfter($(this).parent().parent().parent().find(".thumb-description .caption h4"));
		});
	});
	$('#grid-view').click(function() {
		$('#list-view').removeClass('active');
		$('#short-view').removeClass('active');
		$('#grid-view1').removeClass('active');
		$('#grid-view2').removeClass('active');
		$('#grid-view').addClass('active');
		$('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
		//$(".product-layout.product-grid .product-thumb .button-group .btn-cart").attr('data-original-title','Add to cart');/* for add tooltrip */
		$(".product-layout.product-grid .product-thumb .thumb-description .product-price-and-shipping").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-grid .product-thumb .caption .product-countdown").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
		$(".product-layout.product-grid .product-thumb .thumb-description .caption .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
	});
	
	
	$('#short-view').click(function() {
		$('#list-view').removeClass('active');
		$('#grid-view').removeClass('active');
		$('#grid-view1').removeClass('active');
		$('#grid-view2').removeClass('active');
		$('#short-view').addClass('active');
		$('#content .row > .product-sort .product-thumb .image').attr('class', 'image col-xs-4 col-sm-4 col-md-4');
		$('#content .row > .product-sort .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-8 col-sm-8 col-md-8');
		//$(".product-layout.product-sort .product-thumb .button-group .btn-cart").attr('data-original-title','Add to cart');/* for add tooltrip */
		$(".product-layout.product-sort .product-thumb .image .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-sort .product-thumb .caption .product-price-and-shipping").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description"));
		});
		$(".product-layout.product-sort .product-thumb .image .product-countdown").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-sort .product-thumb .caption .rating").each(function(){
		    $(this).insertAfter($(this).parent().parent().parent().find(".thumb-description .caption h4"));
		});
		
	});

$('#grid-view1').click(function() {
		$('#list-view').removeClass('active');
		$('#short-view').removeClass('active');
		$('#grid-view').removeClass('active');
		$('#grid-view2').removeClass('active');
		$('#grid-view1').addClass('active');
		$('#content .row > .product-grid1 .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid1 .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
		//$(".product-layout.product-grid .product-thumb .button-group .btn-cart").attr('data-original-title','Add to cart');/* for add tooltrip */
		$(".product-layout.product-grid1 .product-thumb .thumb-description .product-price-and-shipping").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-grid1 .product-thumb .caption .product-countdown").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
		$(".product-layout.product-grid1 .product-thumb .thumb-description .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
	});

	$('#grid-view2').click(function() {
		$('#list-view').removeClass('active');
		$('#short-view').removeClass('active');
		$('#grid-view').removeClass('active');
		$('#grid-view1').removeClass('active');
		$('#grid-view2').addClass('active');
		$('#content .row > .product-grid2 .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid2 .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
		//$(".product-layout.product-grid .product-thumb .button-group .btn-cart").attr('data-original-title','Add to cart');/* for add tooltrip */
		$(".product-layout.product-grid2 .product-thumb .thumb-description .product-price-and-shipping").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".thumb-description .caption"));
		});
		$(".product-layout.product-grid2 .product-thumb .caption .product-countdown").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
		$(".product-layout.product-grid2 .product-thumb .thumb-description .button-group").each(function(){
		    $(this).appendTo($(this).parent().parent().parent().find(".image"));
		});
	});
		 if (localStorage.getItem('display') == 'grid') {
			jQuery('#grid-view').trigger('click');
			
		  } else if (localStorage.getItem('display') == 'list'){
			jQuery('#list-view').trigger('click');
		  }
		  else if (localStorage.getItem('display') == 'sort'){
			jQuery('#short-view').trigger('click');
		  }
		  else if (localStorage.getItem('display') == 'grid1'){
			jQuery('#grid-view1').trigger('click');
		  }
		  else if (localStorage.getItem('display') == 'grid2'){
			jQuery('#grid-view2').trigger('click');
		  }
		  else{
			jQuery('#grid-view').trigger('click');
		  }  
	/* Active class in Product List Grid END */
});
// Documnet.ready() over....

function initialize_owl(el) {
    el.owlCarousel({
        items : 4, //1 items above 1000px browser width
		nav : true,
		dots : false,
		loop: false,
		autoplay:false,	
		responsive: {
			
			1450: {
				items: 4
			},
			1200: {
				items: 4
			},
			768: {
				items: 3
			},
			481: {
				items: 2
			},
			0:   {
				items:1
			}
		}
    });

	// Custom Navigation Events

$(".customNavigation .next").click(function(){
	$(this).parent().parent().find(".products-carousel").trigger('next.owl.carousel',[700]);
})
$(".customNavigation .prev").click(function(){
	$(this).parent().parent().find(".products-carousel").trigger('prev.owl.carousel',[700]);
})

$(".products-list .customNavigation").addClass('owl-navigation');

}
function destroy_owl(el) {
    if(typeof el.data('owlCarousel') != 'undefined') {
		el.data('owlCarousel').destroy();
		el.removeClass('owl-carousel');
	}
}

/*****************start animation script*******************/
function hb_animated_contents() {
	$(".hb-animate-element:in-viewport").each(function (i) {
	var $this = $(this);
	if (!$this.hasClass('hb-in-viewport')) {
	setTimeout(function () {
	$this.addClass('hb-in-viewport');
	}, 180 * i);
	}
	});
	}
	$(window).scroll(function () {
	hb_animated_contents();
	});
	$(window).load(function () {
	hb_animated_contents();
});
	

/*****************end animation script*******************/
function footerToggle() {
	if($( window ).width() < 992) {
		$("footer .footer-column h5").addClass( "toggle" );
		$("footer .footer-column1 h5").addClass( "toggle" );
		$("footer .footer-column h5.toggle").unbind("click");
		$("footer .footer-column1 h5.toggle").unbind("click");
			var Accordions = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;
		
				// Variables privadas
				var link = this.el.find('.toggle');
				// Evento
				link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
			}
		
			Accordions.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
				$next = $this.next();
		
				$next.slideToggle();
				$this.parent().toggleClass('active');
		
				if (!e.data.multiple) {
				$el.find('ul.list-unstyled').not($next).slideUp().parent().removeClass('active');
				};
			}	
		
			var accordions = new Accordions($('.footer-column'), false);
	} else {
		$("footer .footer-column h5.toggle").unbind("click");
		$("footer .footer-column1 h5.toggle").unbind("click");
		$("footer .footer-column h5").removeClass('toggle');
		$("footer .footer-column1 h5").removeClass('toggle');
	}
}
$(document).ready(function() {footerToggle();});
$(window).resize(function() {footerToggle();});

/* Category List - Tree View */
function categoryListTreeView() {
	$(".category-treeview li.category-li").find("ul").parent().prepend("<div class='list-tree'></div>").find("ul").css('display','none');

	$(".category-treeview li.category-li.category-active").find("ul").css('display','block');
	$(".category-treeview li.category-li.category-active").toggleClass('active');
}
$(document).ready(function() {categoryListTreeView();});


/* Category List - TreeView Toggle */
function categoryListTreeViewToggle() {
	$(".category-treeview li.category-li .list-tree").click(function() {
		$(this).parent().toggleClass('active').find('ul').slideToggle();
	});
}
$(document).ready(function() {categoryListTreeViewToggle();});

/*----------- menu hover -------------------*/

/* Animate effect on Review Links - Product Page */
$(".product-total-review, .product-write-review").click(function() {
    $('html, body').animate({ scrollTop: $(".product-tabs").offset().top }, 1000);
});

/* FilterBox - Responsive Content*/
function optionFilter(){

	if ($(window).width() <= 991) {
		$('#column-left .option-filter-box').appendTo('#content .category-description');
		$('#column-right .option-filter-box').appendTo('#content .category-description');

	} else {
		$('#content .category-description .option-filter-box').appendTo('#column-left .option-filter');
		$('#content .category-description .option-filter-box').appendTo('#column-right .option-filter');
	}
}
$(document).ready(function(){ optionFilter(); });
$(window).resize(function(){ optionFilter(); });


function columnToggle() {
	if($( window ).width() < 992) {
		$("#column-left .panel-heading").addClass( "toggle" );
		$("#column-left .list-group").css( 'display', 'none' );
		$("#column-left .panel-default.active .list-group").css( 'display', 'block' );
		$("#column-left .panel-heading.toggle").unbind("click");
		$("#column-left .panel-heading.toggle").click(function() {
		$(this).parent().toggleClass('active').find('.list-group').slideToggle( "fast" );
		});
		
		$("#column-left .box-heading").addClass( "toggle" );
		$("#column-left .products-carousel").css( 'display', 'none' );
		$("#column-left .products-list.active .products-carousel").css( 'display', 'block' );
		$("#column-left .box-heading.toggle").unbind("click");
		$("#column-left .box-heading.toggle").click(function() {
		$(this).parent().toggleClass('active').find('.products-carousel').slideToggle( "fast" );
		});
		
		$("#column-right .panel-heading").addClass( "toggle" );
		$("#column-right .list-group").css( 'display', 'none' );
		$("#column-right .panel-default.active .list-group").css( 'display', 'block' );
		$("#column-right .panel-heading.toggle").unbind("click");
		$("#column-right .panel-heading.toggle").click(function() {
		$(this).parent().toggleClass('active').find('.list-group').slideToggle( "fast" );
		});
		
		$("#column-right .box-heading").addClass( "toggle" );
		$("#column-right .products-carousel").css( 'display', 'none' );
		$("#column-right .products-list.active .products-carousel").css( 'display', 'block' );
		$("#column-right .box-heading.toggle").unbind("click");
		$("#column-right .box-heading.toggle").click(function() {
		$(this).parent().toggleClass('active').find('.products-carousel').slideToggle( "fast" );
		});
					
	} else {
		$("#column-left .panel-heading").unbind("click");
		$("#column-left .panel-heading").removeClass( "toggle" );
		$("#column-left .list-group").css( 'display', 'block' );

		$("#column-left .box-heading").unbind("click");
		$("#column-left .box-heading").removeClass( "toggle" );
		$("#column-left .products-carousel").css( 'display', 'block' );
		
		$("#column-right .panel-heading").unbind("click");
		$("#column-right .panel-heading").removeClass( "toggle" );
		$("#column-right .list-group").css( 'display', 'block' );

		$("#column-right .box-heading").unbind("click");
		$("#column-right .box-heading").removeClass( "toggle" );
		$("#column-right .products-carousel").css( 'display', 'block' );

	}
}

$(document).ready(function() {columnToggle();});
$(window).resize(function() {columnToggle();});


function responsivecolumn()
{
	if ($(window).width() <= 991)
	{
		$('#page > .container > .row > #column-left').appendTo('#page > .container > .row');
		$('#page > .container > .row > #column-right').appendTo('#page > .container > .row');
	}
	else if($(window).width() >= 992)
	{
		$('#page > .container > .row > #column-left').prependTo('#page > .container > .row');
		$('#page > .container > .row > #column-right').appendTo('#page > .container > .row');
	}
}
$(window).resize(function(){responsivecolumn();});
$(window).ready(function(){responsivecolumn();});
/*category filter js end*/

function stickyleft() {
	if ($('#column-left, #column-right').length){
	if ($(document).width() <= 1199) {
		jQuery('#content, #column-left, #column-right').theiaStickySidebar({
		additionalMarginBottom: 30,
		additionalMarginTop: 30
		});
	} else if ($(document).width() >= 1200) {
		jQuery('#content, #column-left, #column-right').theiaStickySidebar({
			additionalMarginBottom: 30,
			additionalMarginTop: 130
		});
	}
	}	
}
$(document).ready(function() {
	stickyleft();
});
$(window).resize(function() {
	stickyleft();
});




