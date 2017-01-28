$(document).ready(function(){
$('.grid').click(function(){
	$('main').toggleClass('tg-pad');
});

$('.toggle').click(function(){
	$('.menu').addClass('menu-tog');
});
$('.close').click(function(){
	$('.menu').removeClass('menu-tog');
});
	});