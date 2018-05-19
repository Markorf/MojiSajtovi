// get vars
var about = document.getElementById('about');
var menu = document.getElementById('menu');
var contact = document.getElementById('contact');
var list = document.getElementById('myUL').children;
var tags=[about, menu, contact];
var links = document.getElementsByTagName('a');
//var timer;
var current;
var myScroll = window.pageYOffset;

// disable clicks

for(let j = 0; j<links.length; j++){
    links[j].onclick = function(){ return false;
}
    }

for(let i=1; i<list.length; i++){
    list[i].addEventListener('click', scrollex, false);
}

function scrollex(e){
    current = this.dataset.numb;
    if(tags[current] == about){
    scrollAbout();
}else if(tags[current] == menu){
    scrollMenu();
}else if(tags[current] == contact){
    scrollContact();
}else {
    return false;
}
    }

function scrollAbout(){
     var aot = about.offsetTop;
        setInterval(function(){
            if(myScroll< aot){
                myScroll+=10;
                window.scrollTo(0, myScroll-60);
            }    
        }, 30);     
    }

function scrollMenu(){
     var mot = menu.offsetTop;
        setInterval(function(){
            if(myScroll < mot){
                myScroll+=10;
                window.scrollTo(0, myScroll-80); 
            }
        
      }, 10);   
    }

function scrollContact(){
     var cot = contact.offsetTop;
        setInterval(function(){
            if(myScroll < cot){
                myScroll+=10;
                window.scrollTo(0, myScroll-80);    
            }
        }, 10);   
    }
