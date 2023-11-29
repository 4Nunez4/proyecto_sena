let btnClose = document.getElementById("btnClose"),
mainContent = document.getElementById("mainContent"),

// Obtén todas las imágenes dentro del contenedor box-modal-img
imagenes = document.querySelectorAll('.box-modal-img img'),


// Obtén el contenedor imgModal
imgModal = document.getElementById('imgModal');

// Agrega un evento de clic a cada imagen
imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    // Cambia la imagen principal en el contenedor imgModal
    imgModal.querySelector('.main-img-modal').src = imagen.src;
  });
});

// Event Listener for the close button
btnClose.addEventListener('click', function(){
    mainContent.style.display = "none";
    });

    // Seleccionar todos los elementos con la clase box-imagen-muestra
let miniaturas = document.querySelectorAll(".box-imagen-muestra");

// Seleccionar el elemento con el id imgBig
let imagenGrande = document.getElementById("imgBig");

// Recorrer el array de miniaturas con un bucle for
for (let i = 0; i < miniaturas.length; i++) {
  // Añadir un evento de click a cada miniatura
  miniaturas[i].addEventListener("click", function() {
    // Obtener el atributo src de la imagen dentro de la miniatura
    let srcMiniatura = miniaturas[i].querySelector("img").getAttribute("src");
    // Cambiar el atributo src de la imagen grande por el de la miniatura
    imagenGrande.setAttribute("src", srcMiniatura);
  });
}


//////////////////////////////////////////////////////////////////////
let star1 = document.getElementById("star1"),
star2 = document.getElementById("star2"),
star3 = document.getElementById("star3"),
star4 = document.getElementById("star4"),
star5 = document.getElementById("star5"),
puntuacion = document.getElementById("puntuacion").value;




















