//para imprimir mensaje en la consola
console.log("aprobado")
//=====================================================
//al dar click en el boton imprime la funcion en la consola, variable 

function verficha(){
    let mensaje
mensaje="mensaje de prueba"
console.log(mensaje)

}
//=====================================================
// con let se declara la variable 
function verficha(){
    let n1
    //guardando datos de html en la respectiva variable
    n1 = document.getElementById("numero-1").value

    //enviar variable a html
    document.getElementById("respuesta").innerHTML =
    "<div>"+n1*n1*n1+"</div>"
}