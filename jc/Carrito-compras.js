let boxMinus = document.getElementById("boxMinus"),
    boxCant = document.getElementById("boxCant"),
    boxPlus = document.getElementById("boxPlus");


    boxPlus.addEventListener("click", function(){
        let PlusCant = boxCantidad.innerHTML;
        if(PlusCant < 10){
            PlusCant++;
            boxCantidad.innerText=PlusCant;
        }
        
    })
    boxMinus.addEventListener("click", function(){
        let MinusCant = boxCantidad.innerHTML;
        if(MinusCant > 0){
            MinusCant--;
            boxCantidad.innerText=MinusCant;
        }
    })