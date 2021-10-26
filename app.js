let numbers = document.getElementsByClassName("num");
let result1 = document.querySelector(".resultBay");
let signs = document.getElementsByClassName("sign");
let operators = document.getElementsByClassName("operator");
let equals = document.getElementById("equals");
let silinecek = document.getElementById("sil");
let okay = document.getElementById("ok");


// ---------------NUMBERS-----------

for (var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", yazdir)
}
function yazdir(){
    result1.innerHTML += this.value 
}


// ---------------SİGNS--------------

for (var i = 0; i < signs.length; i++){
    signs[i].addEventListener("click", yazdir)
}
function yazdir(){
    result1.innerHTML += this.value 
}
// --------------OPERATORS-------------

for (var i = 0; i < operators.length; i++){
    if (i != 4){
    operators[i].addEventListener("click", yazdir)
    }
}
function yazdir(){
    result1.innerHTML += this.value 
}

equals.addEventListener("click", islem);

function islem() {
    
}




// -----------AC KOMPLE SİL---------

silinecek.addEventListener("click", siler);

function siler() {
    result1.innerHTML = "";
}

okay.addEventListener("click",teksil);

function teksil() {
    result1.textContent = "";
}