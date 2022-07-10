function comprar() {

    var objProducto, objCantidad;
    var nomProducto, cantidad, valorProducto;
    var compraValida = 0; // inicializando el valor en 0
    var dcto = 0;
    var precio;
    var confirmacion;


    objProducto = document.getElementById("tecnologia");
    objCantidad = document.getElementById("cantidad");

    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    cantidad = objCantidad.value;
    valorProducto = objProducto.value;

    if (nomProducto == "")
        alert("Debe escoger un producto");
    else
        if (cantidad == "" || cantidad == 0)
            alert("Debe introducir una cantidad");
        else
            compraValida = 1;
    if (promocionValida == 1)
        dcto = 200;
    if (compraValida == 1) {

        switch (valorProducto) {
            case "l": precio = (2500 - dcto) * cantidad; break;
            case "i": precio = (600 - dcto) * cantidad; break;
            default: precio = (800 - dcto) * cantidad;
        }

        confirmacion = confirm("Ud. desea comprar: " + cantidad + " " + nomProducto + " a " + precio + " soles");

        if (confirmacion)
            alert("Compra Realizada");
        else {

            alert("compra cancelada");
            promocionValida = 0;
        }
    }
    mostrarPrecio(precio);
}

// 1. Visualizar autmáticamente el producto apneas se elija

function mostrarItem(){

    //inicializar variables
    var objProducto;
    var nomProducto;

    //obtención del objeto
    objProducto = document.getElementById("tecnologia");
    objItem = document.getElementById("Resumen").getElementsByTagName("p")[0]; // <-- obtendras la poscicion 1

    /**
     * ObjItem --> TAMAÑO 2 --> POSICIÓN 0
     * getElementsByTagName
     * <p>item...</p>
     * <p></p>
     */

    //obtención de los valores del objeto
    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    
    //Escritura del objeto
    objItem.innerHTML = "<Strong>Item:</Strong>" + nomProducto;     

}

//2. Visualizar automáticamente la cabtidad apenas se digite
function mostrarCantidad(){

  //inicializar variables
  var objCantidad;
  var cantidad;

  //obtención del objeto
  objCantidad = document.getElementById("cantidad");
  objItem = document.getElementById("Resumen").getElementsByTagName("p")[1];// <-- obtendras la poscicion 2

  //obtención de los valores del objeto
  cantidad =  objCantidad.value;
  
  //Escritura del objeto
  objItem.innerHTML = "<Strong>Cantidad:</Strong>" + cantidad;    
}

//3. Visualizar el precio final cuando termine la compra
function mostrarPrecio(precio){

    //inicializamos variable
    var objPrecio;

    //obtencion del objeto
    objPrecio = document.getElementsByClassName("precio")[0];

     //Escritura del objeto
    objPrecio.innerHTML = "<Strong>Precio: </Strong>" + precio;    
    objPrecio.style.color = "Blue"; 
}



