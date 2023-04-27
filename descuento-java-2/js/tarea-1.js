
function sinDescuento(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotalSinDescuento
    valorTotalSinDescuento = cantidad*valor

    document.getElementById("con").innerHTML =
    "<div> el valor es "+ valorTotalSinDescuento +"</div>"
}
//==============================================================
function conDescuento(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotalSinDescuento
    valorTotalSinDescuento = cantidad*valor*85/100

    document.getElementById("con").innerHTML =
    "<div> el valor es "+ valorTotalSinDescuento +"</div>"
}
//===============================================================
function cincuenta(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotalSinDescuento
    valorTotalSinDescuento = cantidad*valor

    let valorTotal1 
    valorTotal1 = valorTotalSinDescuento*50/100

    document.getElementById("con").innerHTML =
    "<div> el valor es "+ valorTotal1 +"</div>"
}