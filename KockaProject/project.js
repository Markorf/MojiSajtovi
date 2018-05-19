var kocka = document.getElementById('myCube');
var ugaoY = 10;
var ugaoX = 10;



addEventListener('keydown', rotateCube);

function rotateCube(e){
    if(e.which==37){
        kocka.style.transform = `rotateY(${ugaoY}deg)`;
        ugaoY+=90;
    }
       if(e.which==39){
           ugaoY -=90;
        kocka.style.transform = `rotateY(${ugaoY}deg)`;
       
    }
           if(e.which==38){
        kocka.style.transform = `rotateX(${ugaoX}deg)`;
        ugaoX+=90;
       
    }
            if(e.which==40){
            ugaoX -=90;
        kocka.style.transform = `rotateX(${ugaoX}deg)`;
    }
  
}
