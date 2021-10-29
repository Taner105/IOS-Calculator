window.onload = function(){
    var secılenOperator = "";
    var left = "";
    var right = "";

    var numbers = document.getElementsByClassName("num");
    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function(){
            document.getElementById("resultBay").innerHTML += this.value;

            if(secılenOperator == ""){
                left += this.value; 
            }
            else if (secılenOperator != ""){
                right += this.value
            }
        },false)
        
    }

    var operators = document.getElementsByClassName("operator");
    for(var i = 0; i < numbers.length; i++){
        operators[i].addEventListener("click", function(){
            document.getElementById("resultBay").innerHTML += this.value;
            secılenOperator += this.value;

            
        },false);
        
    }
    document.getElementById("equals").addEventListener("click", function(){
        if(secılenOperator == "+"){
            document.getElementById("resultBay").innerHTML = parseInt(left) + parseInt(right);
        }
        else if(secılenOperator == "-"){
            document.getElementById("resultBay").innerHTML = parseInt(left) - parseInt(right);
        }
        else if(secılenOperator == "*"){
            document.getElementById("resultBay").innerHTML = parseInt(left) * parseInt(right);
        }
        else if(secılenOperator == "/"){
            document.getElementById("resultBay").innerHTML = parseInt(left) / parseInt(right);
        }

    },false);

    document.getElementById("sil").addEventListener("click", function(){
       
        document.getElementById("resultBay").innerHTML = "";
    
    },false);
   

   
};