let padre = document.getElementById("padre-box");
let hijo = document.getElementById("hijo-box");

padre .addEventListener("click", function() {
    if (hijo.classList.contains("hijo") ){
        hijo.classList.add("hijo-cam","padre-cam");
        hijo.classList.remove("hijo");
        hijo.classList.add("hijo-cam","padre-cam");
        hijo.classList.remove("hijo");
    
    }
    else {
        hijo.classList.remove("hijo-cam","padre-cam");
        hijo.classList.add("hijo");
        hijo.classList.remove("hijo-cam","padre-cam");
    }
   
});