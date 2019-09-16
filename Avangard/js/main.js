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
	});
});