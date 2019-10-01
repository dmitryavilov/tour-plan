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

	$('.item-1').mouseenter(function() {
		$('.image-1').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-1').removeClass('title-and-description_title_hover');
		$('.desc-1').removeClass('description_hover');
		$('.image-1').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-1').toggleClass('title-and-description_title_hover');
		$('.desc-1').toggleClass('description_hover');
	});

	$('.item-1').mouseleave(function() {
		$('.image-1').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-1').toggleClass('title-and-description_title_hover');
		$('.desc-1').toggleClass('description_hover');
	});

	$('.item-2').mouseenter(function() {
		$('.image-2').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-2').removeClass('title-and-description_title_hover');
		$('.desc-2').removeClass('description_hover');
		$('.image-2').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-2').toggleClass('title-and-description_title_hover');
		$('.desc-2').toggleClass('description_hover');
	});

	$('.item-2').mouseleave(function() {
		$('.image-2').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-2').toggleClass('title-and-description_title_hover');
		$('.desc-2').toggleClass('description_hover');
	});

	$('.item-3').mouseenter(function() {
		$('.image-3').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-3').removeClass('title-and-description_title_hover');
		$('.desc-3').removeClass('description_hover');
		$('.image-3').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-3').toggleClass('title-and-description_title_hover');
		$('.desc-3').toggleClass('description_hover');
	});

	$('.item-3').mouseleave(function() {
		$('.image-3').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-3').toggleClass('title-and-description_title_hover');
		$('.desc-3').toggleClass('description_hover');
	});

	$('.item-4').mouseenter(function() {
		$('.image-4').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-4').removeClass('title-and-description_title_hover');
		$('.desc-4').removeClass('description_hover');
		$('.image-4').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-4').toggleClass('title-and-description_title_hover');
		$('.desc-4').toggleClass('description_hover');
	});

	$('.item-4').mouseleave(function() {
		$('.image-4').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-4').toggleClass('title-and-description_title_hover');
		$('.desc-4').toggleClass('description_hover');
	});

	$('.item-5').mouseenter(function() {
		$('.image-5').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-5').removeClass('title-and-description_title_hover');
		$('.desc-5').removeClass('description_hover');
		$('.image-5').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-5').toggleClass('title-and-description_title_hover');
		$('.desc-5').toggleClass('description_hover');
	});

	$('.item-5').mouseleave(function() {
		$('.image-5').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-5').toggleClass('title-and-description_title_hover');
		$('.desc-5').toggleClass('description_hover');
	});

	$('.item-6').mouseenter(function() {
		$('.image-6').removeClass('image_hover');
		$(this).removeClass('big-block_item_hover');
		$('.title-6').removeClass('title-and-description_title_hover');
		$('.desc-6').removeClass('description_hover');
		$('.image-6').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-6').toggleClass('title-and-description_title_hover');
		$('.desc-6').toggleClass('description_hover');
	});

	$('.item-6').mouseleave(function() {
		$('.image-6').toggleClass('image_hover');
		$(this).toggleClass('big-block_item_hover');
		$('.title-6').toggleClass('title-and-description_title_hover');
		$('.desc-6').toggleClass('description_hover');
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