function comprar(){
    
    var objProducto, objCantidad;
    var nomProducto, cantidad, valorProducto;
    var compraValida = 0; //Inicializado como compra inválida
    var dcto = 0; //Inicializado sin descuento
    var precio;
    var confirmacion;

    objProducto = document.getElementById("tecnologia");
    objCantidad = document.getElementById("cantidad");

    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    cantidad = objCantidad.value;
    valorProducto = objProducto.value;

    if(nomProducto == "")
        alert("Debe escoger un producto");
    else
        if(cantidad == "" || cantidad == 0)
            alert("Debe introducir una cantidad");
        else
            compraValida = 1;

    if(promocionValida == 1)
        dcto = 200;

    if(compraValida == 1){

        switch(valorProducto){
            case "l": precio = (2500 - dcto)*cantidad; break;
            case "i": precio = (600 - dcto)*cantidad; break;
            default: precio = (800 - dcto)*cantidad;
        }

        confirmacion = confirm("Ud. desea comprar: "+cantidad+" "+
                    nomProducto+" a "+precio+" soles");

        if(confirmacion)
            alert("Compra Realizada");
        else{
            alert("Compra Cancelada");
            promocionValida = 0;
        }

    }

    mostrarPrecio(precio);

}

//1. Visualizar el producto en la zona de Item, apenas se escoja
function mostrarItem(){
    
    //Inicialización de Variables
    var objProducto, objItem;
    var nomProducto;

    //Obtención del Objeto
    objProducto = document.getElementById("tecnologia");
    objItem = document.getElementById("Resumen").getElementsByTagName("p")[0];
    
    //Obtención del valor del objeto
    nomProducto = objProducto.options[objProducto.selectedIndex].text;

    //Escritura en objeto
    objItem.innerHTML = "<strong>Item: </strong>"+nomProducto;

}

//2. Visualizar la cantidad en la zona de cantidad, apenas se digite
function mostrarCantidad(){
    
    //Inicialización de Variables
    var objCantidad, objItem;
    var cantidad;

    //Obtención del Objeto
    objCantidad = document.getElementById("cantidad");
    objItem = document.getElementById("Resumen").getElementsByTagName("p")[1];

    //Obtención del valor del objeto
    cantidad = objCantidad.value;

    //Escritura en objeto
    objItem.innerHTML = "<strong>Cantidad: </strong>"+cantidad;  

}

//3. Visualizar el precio final, al comprar
function mostrarPrecio(precio){
    
    //Inicialización de Variables
    var objPrecio;

    //Obtención del Objeto
    objPrecio = document.getElementsByClassName("precio")[0];

    //Escritura en objeto
    objPrecio.innerHTML = "<strong>Precio: </strong>"+precio;
    objPrecio.style.color = "blue";

} 