let numbers = document.getElementsByClassName("num");
let result1 = document.querySelector(".resultBay");
let signs = document.getElementsByClassName("sign");
let operators = document.getElementsByClassName("operator");

for (var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", yazdir)
}
function yazdir(){
    result1.innerHTML += this.value 
}



for (var i = 0; i < signs.length; i++){
    signs[i].addEventListener("click", yazdir)
}
function yazdir(){
    result1.innerHTML += this.value 
}
// let okay = document.getElementById("ok");
// okay.addEventListener("click", sil);
// function sil(){
//    ok.remove().innerHTML = this.value;
// }


for (var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", yazdir)
}
function yazdir(){
    result1.innerHTML += this.value 
}