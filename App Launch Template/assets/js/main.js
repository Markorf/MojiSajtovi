// toggleDivs

var current = 1;
var sectionHeader = document.getElementById('headSection');
var sections = sectionHeader.children;

function addToCont(n){
    current+=n;
    if(current<sections.length+1){
    changeContent(current);
        }else {
            current = 1;
            changeContent(current);
        }
}

function changeContent(current){
    for(var i = 0; i<sections.length; i++){
        sections[i].style.opacity = '0'; // w
        sections[i].style.display = 'none';
    }
    
    sections[current-1].style.display = 'flex';
    setTimeout(function(){
      sections[current-1].style.opacity = '1';
    },50);
    
}

changeContent(current);

//overlay
var overlay = document.querySelector('.overlay');
var closeOverlay = document.querySelector('.close');
var callOverlay = document.querySelectorAll('.btn');

for(var i=0; i<callOverlay.length; i++){
    callOverlay[i].onclick = popUp;
}

function popUp(){
    overlay.style.display = 'block';
    setTimeout(function(){
        overlay.style.opacity = '1';
    },100);
}


closeOverlay.onclick = function(e){
    e.preventDefault();
    overlay.style.opacity = '0';
    overlay.style.display = 'none';
}


// myQucikFunc

var fakeBtn = document.getElementById('fakeBtn');
 fakeBtn.onclick = function(){
     alert("Thank you for downloading out package");
     window.location.reload();
 }