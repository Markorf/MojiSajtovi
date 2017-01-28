$(document).ready(function(){

$('.fa-bars').click(function(){
    $('.sidebar').addClass('showSide');
});
$('.fa-times').click(function(){
    $('.sidebar').removeClass('showSide');
}); 
});