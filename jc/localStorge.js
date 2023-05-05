const N = document.querySelector("#datoNombre");
const P = document.querySelector("#datoApellido");
const F = document.querySelector("#datoFecha")
function almacenardata(){
//captura la data del html
    let nom, ape , fe
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fe = document.getElementById("fecha").value
// localStorage para almacenar informacion 
    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", ape);
    localStorage.setItem("Fecha", fe);

// limpia la informacion que esta en los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";

}
function cargarDatos(){
    let nombre, apellido ,fecha
    nombre = localStorage.getItem("Nombre")
    apellido = localStorage.getItem("Apellido")
    fecha = localStorage.getItem("Fecha")
    N.innerHTML= nombre
    P.innerHTML= apellido
    F.innerHTML= fecha
}