let numbers = document.getElementsByClassName("num");
let result1 = document.querySelector(".resultBay");
let signs = document.getElementsByClassName("sign");
let operators = document.getElementsByClassName("operator");
let equals = document.getElementById("equals");

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

equals.addEventListener("click", eşittirSonuc);

function eşittirSonuc() {
    result1.innerHTML = eval(result1.class);
}