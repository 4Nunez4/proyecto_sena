function formulario(){
    let producto = document.getElementById("nom-producto").value
    document.getElementById("res-producto").innerText = producto
    
    let produccion = document.getElementById("nom-produccion").value
    document.getElementById("res-produccion").innerText = produccion
   
    let version = document.getElementById("anterior").value
    document.getElementById("res-anterior").innerText = version

    let versiona = document.getElementById("actual").value
    document.getElementById("res-actual").innerText = versiona

    let modulo = document.getElementById("modulo").value
    document.getElementById("res-modulo").innerText = modulo
}

