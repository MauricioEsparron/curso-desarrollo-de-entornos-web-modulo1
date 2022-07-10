var precioSinIGV;

function mostrarPrecio(){
0
    var objProducto, objPrecio;
    var valorProducto;

    objProducto = document.getElementById("ropa");
    objPrecio = document.getElementById("bloque2").getElementsByTagName("p")[0];

    valorProducto = objProducto.value;

    switch(valorProducto){
        case "z": precioSinIGV = 80; break;
        case "s": precioSinIGV = 120; break;
        case "c": precioSinIGV = 40; break;
        case "j": precioSinIGV = 60; break 
        default: precioSinIGV = 0;
    }

    objPrecio.innerHTML = "<strong>Precio sin IGV: "+precioSinIGV+"</strong>";

}

function adicionarCarrito(){

    var objProducto, objCantidad, objTabla;
    var nomProducto, cantidad, precioConIGV;
    var numeroFilas, fila;
    var celdaItem, celdaCantidad, celdaPrecioConIGV;

    objProducto = document.getElementById("ropa");
    objCantidad = document.getElementById("cantidad");
    objTabla = document.getElementById("miTabla");

    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    cantidad = objCantidad.value;
    precioConIGV = precioSinIGV*cantidad*1.18;
    
    numeroFilas = objTabla.rows.length; //1

    //Crear la fila y obtenerla
    fila = objTabla.insertRow(numeroFilas);

    //Crer las celdas y obtenerlas
    celdaItem = fila.insertCell(0);
    celdaCantidad = fila.insertCell(1);
    celdaPrecioConIGV = fila.insertCell(2);

    //Escribir en las celdas
    celdaItem.innerHTML = nomProducto;
    celdaCantidad.innerHTML = cantidad;
    celdaPrecioConIGV.innerHTML = precioConIGV;

}