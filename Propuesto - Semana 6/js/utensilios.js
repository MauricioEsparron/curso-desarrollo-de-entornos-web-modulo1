var actual = 0; 
var Imagen = new Array(3); //Posiciones van del 0 al 2
Imagen[0] = "img/cucharas.jpg";
Imagen[1] = "img/tenedores.jpg";
Imagen[2] = "img/cuchillos.png";

function rotacion(){

    var objImagen;

    objImagen = document.getElementById("imagen");

    objImagen.src = Imagen[actual];
    actual++;

    if(actual == Imagen.length)
        actual = 0;

    setTimeout("rotacion()", 1500);

}

function cambiarImagen(pos){

    var objImagen;

    objImagen = document.getElementById("imagen");

    objImagen.src = Imagen[pos];
    actual = pos;

}

function consultarUtensilios(){

    var objArticulo, objRespuesta;
    var precios = [40, 50, 60]; //tamaño 3
    var respuesta = "";
    var band = false;

    objArticulo = document.getElementsByName("utensilio"); //tamaño 3 ---> 3 nodos

    for(i = 0; i < objArticulo.length; i++){

        if(objArticulo[i].checked){
            respuesta = respuesta + "<p><strong>Articulo: </strong>"+objArticulo[i].value+"; <strong>Costo: </strong>"+precios[i]+"</p>";
            band = true;
        }

    }

    if(band == false)
        respuesta = "Ud. no ha seleccionado ningún artículo";

    objRespuesta = document.getElementById("respuesta");
    objRespuesta.innerHTML = respuesta;

}

/*
    objArticulo[0] ---> value = "Cucharas"
    objArticulo[1] ---> value = "Tenedores"
    objArticulo[2] ---> value = "Cuchillos"

    for(i = 0; i < 3; i++)

        1ra simulacion ---> i = 0 ---> si (objArticulo[0].ACTIVADO????) ===> TRUE
            objArticulo[0].value ---> "Cucharas"
            precios[0] ---> 40
            respuesta = <p><strong>Articulo: </strong>Cucharas; <strong>Costo: </strong>40</p>

        2da simulacion ---> i = 1 ---> si (objArticulo[1].ACTIVADO????) ===> FALSE

        3ra simulacion ---> i = 2 ---> si (objArticulo[2].ACTIVADO????) ===> TRUE
            objArticulo[2].value ---> "Cuchillos"
            precios[2] ---> 60
            respuesta = <p><strong>Articulo: </strong>Cuchillos; <strong>Costo: </strong>60</p>
    */