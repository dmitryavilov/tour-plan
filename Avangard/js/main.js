$(document).ready(function() {

	$('.collapse__icon').click(function() {
		$('body').toggleClass('dont_scroll');
		$('.icon_2').toggleClass('icon_2_active');
		$('.icon_1').toggleClass('icon_1_active');
		$('.icon_3').toggleClass('icon_3_active');
		$('.collapse__menu').toggleClass('header_collapse-menu_active');
		$(this).toggleClass('collapse_icon_hover');
		$('.overlay').toggleClass('overlay_active');
	});

	$('.overlay').on('click', function() {
		$('.collapse__menu').removeClass('header_collapse-menu_active');
		$(this).removeClass('overlay_active');
		$('body').removeClass('dont_scroll');
		$('.collapse__icon').removeClass('collapse_icon_hover');
		$('.icon_2').toggleClass('icon_2_active');
		$('.icon_1').toggleClass('icon_1_active');
		$('.icon_3').toggleClass('icon_3_active');
	});

	$('.benefits__advantage-1').mouseenter(function() {
		$('.benefits__advantage-img-1').toggleClass('benefits_advantage_hover-spin');
	});
	$('.benefits__advantage-1').mouseleave(function() {
		$('.benefits__advantage-img-1').toggleClass('benefits_advantage_hover-spin');
	});
	$('.benefits__advantage-2').mouseenter(function() {
		$('.benefits__advantage-img-2').toggleClass('benefits_advantage_hover-spin');
	});
	$('.benefits__advantage-2').mouseleave(function() {
		$('.benefits__advantage-img-2').toggleClass('benefits_advantage_hover-spin');
	});
	$('.benefits__advantage-3').mouseenter(function() {
		$(this).queue(function () {$('.benefits__advantage-img-3').css('transform', 'rotate(-20deg)');$(this).dequeue();});
		$(this).queue(function () {$('.benefits__advantage-img-3').css('transition', '0.3s');$(this).dequeue();});
		$(this).delay(300).queue(function () {$('.benefits__advantage-img-3').css('transform', 'rotate(20deg)');$(this).dequeue();});
		$(this).delay(400).queue(function () {$('.benefits__advantage-img-3').css('transform', 'rotate(0deg)');$(this).dequeue();});
	});

	$('.offers__slider-sm').slick({
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		autoplay: true,
  		autoplaySpeed: 1000,
  	responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  	
	});
});