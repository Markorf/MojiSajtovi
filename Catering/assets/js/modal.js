window.onload = function(){

var container = document.getElementById('container');
var modal = document.getElementById('modal');
var overlay = document.createElement("DIV");
overlay.className = 'overlay';
var parag = document.createElement('P');
parag.innerHTML = "&#10006";
parag.className = 'pClass';
overlay.appendChild(parag);

var contDiv = document.createElement('DIV');
var header = document.createElement("DIV");
var textDiv = document.createElement("DIV");

header.innerHTML = "<h1 id='myH1'>Welcome to my website</h1>"

textDiv.innerHTML = "<p id='myP'>Lorem ipsum dolor sit amet, aeque homero te has. Vel reque dicat dolorem cu, duo modo dicam et. Ea graeci impetus adipisci sed, posse nostrud quaerendum duo ei. Eu ius modo mandamus, eu ius iisque detraxit maiestatis, cu has iriure pertinax deterruisset. Dicit quaeque reprimique in quo, labores fastidii nam in, et convenire periculis pro. Mea feugiat copiosae et, sed no modo zril maiestatis. Id pri tempor perfecto, mea soluta maiorum et.</p>"

var btn = document.createElement("BUTTON");
btn.id = 'myBTN';
btn.textContent = 'CLOSE';
header.className = 'hClass';
textDiv.className = 'tClass';
textDiv.appendChild(btn);

contDiv.appendChild(header);
contDiv.appendChild(textDiv);
contDiv.className = 'contClass';

overlay.appendChild(contDiv);

modal.onclick = function(){
    document.body.insertBefore(overlay, container);
}

var butt = document.getElementById('myBTN');
btn.onclick = closeModal;
parag.onclick = closeModal;

function closeModal(){
    document.body.removeChild(overlay);
}
    
    }