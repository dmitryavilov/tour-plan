$(document).ready(function() {
	$('.collapse__icon').click(function(event) {
		$('body').toggleClass('dont_scroll');
		$('.collapse__menu').toggleClass('header_collapse-menu_active');
		$(this).toggleClass('collapse_icon_hover');
		$('.overlay').toggleClass('overlay_active');
	});
});