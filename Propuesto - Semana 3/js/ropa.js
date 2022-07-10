//variable global
var precioSinIGV;

function mostrarPrecio(){

    var objProducto,objPrecio;
    var valorProducto;

    objProducto = document.getElementById("ropa");//obtengo el combobox que se llama ropa
    objPrecio = document.getElementById("bloque2").getElementsByTagName("p")[0];

    valorProducto = objProducto.value;//obtengo el valor de lo que escogio el usuario en el combobox

    switch(valorProducto){
        case "z": precioSinIGV = 80;break;
        case "s": precioSinIGV = 120;break;
        case "c": precioSinIGV = 40;break;
        case "j": precioSinIGV = 60;break;
        default: precioSinIGV = 0;
    }

    objPrecio.innerHTML =  "<strong>Precio sin IGV: </strong>" + precioSinIGV;



}

function adicionarCarrito(){

    /*
        1.Nombre del Producto
        2.Cantidad
        3.Precio con IGV
    */


        var objProducto,objCantidad,objTabla;
        var nomProducto,cantidad,precioConIGV;

        var numeroFilas,fila,celdaNombre,celdaCantidad,celdaPrecio;

        objProducto = document.getElementById("ropa");
        objCantidad = document.getElementById("cantidad");
        objTabla = document.getElementById("miTabla");

        nomProducto = objProducto.options[objProducto.selectedIndex].text;
        cantidad = objCantidad.value;
        precioConIGV = precioSinIGV * 1.18;

        numeroFilas = objTabla.rows.length;


        //crear y obtener una fila

        fila = objTabla.insertRow(numeroFilas);

        //crear y obtener las celdas 
        celdaNombre.fila.insertCell(0);
        celdaCantidad.fila.insertCell(1);
        celdaPrecio.fila.insertCell(2);

        celdaNombre.innerHTML = nomProducto;
        celdaCantidad.innerHTML = cantidad;
        celdaPrecio.innerHTML = parseFloat(precioConIGV).toFixed(1);

}


