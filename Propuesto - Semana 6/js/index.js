function comprar(){

    //Inicialización de Variables
    var objProducto, nomProducto, valorProducto;
    var objCantidad, cantidad;
    var compraValida = 0; //Inicializado como compra inválida
    var precio;
    var dcto = 0; //Inicializado como descuento CERO
    var opcion;

    //Obtención de Objetos
    objProducto = document.getElementById("tecnologia");
    objCantidad = document.getElementById("cantidad"); 

    //Obtención de los Valores de los Objetos
    nomProducto = objProducto.options[objProducto.selectedIndex].text;
    cantidad = objCantidad.value;
    valorProducto = objProducto.value;

    //Validaciones
    if(nomProducto == "")
        alert("Debe escoger un producto");
    else{
        if(cantidad == "" || cantidad == 0)
            alert("Debe introducir una cantidad");
        else
            compraValida = 1;
    }

    //Control del Descuento
    if(tieneVale == 1)
        dcto = 200;

    //Compra Válida
    if(compraValida == 1){

        //Establecer Precios
        switch(valorProducto){
            case "l": precio = (2500-dcto)*cantidad; break;
            case "i": precio = (600-dcto)*cantidad; break;
            default: precio = (800-dcto)*cantidad;
        }

        opcion = confirm("Ud. desea comprar : "+nomProducto+" "+cantidad+" "+precio);

        if(opcion)
            alert("Compra Realizada");
        else{
            alert("Compra Cancelada");
            tieneVale = 0;
        }
            
    }

    mostrarPrecio(precio);

}

function mostrarItem(){
    
    //Inicialización de variables
    var objProducto, nomProducto;
    var objItem;

    //Obtención de Objetos
    objProducto = document.getElementById("tecnologia");
    objItem = document.getElementById("Resumen").getElementsByTagName("p")[0];

    //Obtención de los Valores de los Objetos
    nomProducto = objProducto.options[objProducto.selectedIndex].text;

    //Escritura en los Objetos
    objItem.innerHTML = "<strong>Item: </strong>"+nomProducto;

}

function mostrarCantidad(){

    //Inicialización de variables
    var objCantidad, cantidad;
    var objItem;

    //Obtención de Objetos
    objCantidad = document.getElementById("cantidad");
    objItem = document.getElementById("Resumen").getElementsByTagName("p")[1];

    //Obtención de los Valores de los Objetos
    cantidad = objCantidad.value;

    //Escritura en los Objetos
    objItem.innerHTML = "<strong>Cantidad: </strong>"+cantidad;

}

function mostrarPrecio(precio){

    //Inicialización de variables
    var objPrecio;

    //Obtención de Objetos
    objPrecio = document.getElementsByClassName("precio");

    //Cambios en el precio
    objPrecio[0].style.color = "blue";
    objPrecio[0].innerHTML = "<strong>Precio: </strong>"+precio;

}