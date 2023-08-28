let hamburguerMenu = document.getElementById("hamburguerMenu");
let mainMenu = document.getElementById("mainMenu");

hamburguerMenu.addEventListener("click", function() {
    if (mainMenu.classList.contains("menu2") ){
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("menu2");
    }
    else {
        mainMenu.classList.remove("main-menu-block");
        mainMenu.classList.add("menu2");
    }
   
});