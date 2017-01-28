var img = document.getElementById('mainImg');

window.onload = function(){
	var t = setTimeout(change1, 5000);
};
function change1(){
    img.src = "img/img_la.jpg";
    setTimeout(change2, 5000);
}
function change2(){
   img.src = "img/img_ny.jpg";
    setTimeout(change3, 5000);
}
function change3(){
    img.src="img/img_chicago.jpg";
    setTimeout(change1, 5000);
}