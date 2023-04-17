function formulario(){
    let producto = document.getElementById("nom-producto").value
    document.getElementById("res-producto").innerText = producto
    let produccion = document.getElementById("nom-produccion").value
    document.getElementById("res-produccion").innerText = produccion
    console.log(producto, produccion)
}