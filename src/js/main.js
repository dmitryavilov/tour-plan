$(document).ready(function() {
	$('.tovar-param').mouseenter(function(event) {
		$(this).removeClass('tovar-active');
		$(this).toggleClass('tovar-active');
		$(this).css('border-color', 'white');
	});
	$('.tovar-param').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('tovar-active');
		$(this).css({
			transition: '0.4s',
			border: '3px solid #f3f3f3',
		});
	});


	$('.tovar-param-m').mouseenter(function(event) {
		$(this).removeClass('tovar-active');
		$(this).toggleClass('tovar-active');
		$(this).css('border-color', 'white');
	});
	$('.tovar-param-m').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('tovar-active');
		$(this).css({
			transition: '0.4s',
			border: '3px solid #f3f3f3',
		});
	});

	$('.goods').mouseenter(function(event) {
		$(this).removeClass('tovar-active');
		$(this).toggleClass('tovar-active');
		$(this).css('box-sizing', 'border-box');
		$(this).css('border', 'none');
	});
	$('.goods').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('tovar-active');
		$(this).css({
			transition: '0.4s',
			border: '3px solid #f3f3f3',
		});
	});


	$('.goods-one').mouseenter(function(event) {
		$(this).removeClass('tovar-active');
		$(this).toggleClass('tovar-active');
		$(this).css('box-sizing', 'border-box');
		$(this).css('border', 'none');
	});
	$('.goods-one').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('tovar-active');
		$(this).css({
			transition: '0.4s',
			border: '3px solid #f3f3f3',
		});
	});


	$('.goods-two').mouseenter(function(event) {
		$(this).removeClass('tovar-active');
		$(this).toggleClass('tovar-active');
		$(this).css('box-sizing', 'border-box');
		$(this).css('border', 'none');
	});
	$('.goods-two').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('tovar-active');
		$(this).css({
			transition: '0.4s',
			border: '3px solid #f3f3f3',
		});
	});

	$('.p-prem').mouseenter(function(event) {
		$(this).removeClass('prem-active');
		$(this).toggleClass('prem-active');
	});
	$('.p-prem').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('prem-active');
	});

	$('.p-prem-m').mouseenter(function(event) {
		$(this).removeClass('prem-active');
		$(this).toggleClass('prem-active');
	});
	$('.p-prem-m').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('prem-active');
		$(this).css('transition', '0.4s');
	});

	$('.serv').mouseenter(function(event) {
		$(this).removeClass('prem-active');
		$(this).toggleClass('prem-active');
	});
	$('.serv').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('prem-active');
	});

	$('.whitebl').mouseenter(function(event) {
		$(this).removeClass('contact-active');
		$(this).toggleClass('contact-active');
	});
	$('.whitebl').on('mouseleave',  function(event) {
		event.preventDefault();
		$(this).toggleClass('contact-active');
	});

});
