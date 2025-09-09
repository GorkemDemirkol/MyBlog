var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

console.log(items);

for(var i =0; i<items.length; i++){
    items[i].addEventListener("click",editItem);  
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);  
}


function editItem(){
    this.className ="edit";
    var input = this.querySelector("input");
    input.focus();
    console.log("Şuanki değerin eleman sayısı ", input.value.length);
    input.setSelectionRange(0, input.value.length);
}

function updateItem(){
    var input =this;
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className= "";
}

function itemKeypress(event){
    if(event.key === "Enter" ){
        updateItem.call(this);

    }
}
document.getElementById("hareket");
function hareketEttir(event){

    hareket.style.position='absolute';
    hareket.style.left= event.pageX + 'px' ;
    hareket.style.top= event.pageY + 'px';

}

// document.getElementById(d1);
// var sp = checklist.querySelectorAll("s1");
//  sp = d1.addEventListener('mouseenter') => {

//      console.log('içinde')
//  }

const d1 = document.getElementById("d1");
const s1 = document.getElementById("s1");


d1.addEventListener('onmouseover', () => {s1.innerText= "İçinde"});