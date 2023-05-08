window.onload = function(){
    cargarDatos()
}
const N = document.querySelector("#datoNombre");
const P = document.querySelector("#datoApellido");
const F = document.querySelector("#datoFecha")
function cargarDatos(){
    let nombre, apellido ,fecha
    nombre = localStorage.getItem("Nombre")
    apellido = localStorage.getItem("Apellido")
    fecha = localStorage.getItem("Fecha")
    N.innerHTML= nombre
    P.innerHTML= apellido
    F.innerHTML= fecha
}
cargarDatos()