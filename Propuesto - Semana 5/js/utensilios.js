var actual = 0;
var Imagen = new Array(3); //Posiciones del 0 al 2
Imagen[0] = "img/cucharas.jpg";
Imagen[1] = "img/cuchillos.png";
Imagen[2] = "img/tenedores.jpg";

function rotacion(){

    var objImagen;

    objImagen = document.getElementById("imagen");

    objImagen.src = Imagen[actual]; //Imagen[2]
    actual++; //actual = 3

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

    var precios = [40, 50, 60]; //Posiciones del 0 al 2
    var objArticulo, respuesta = "";
    var i;
    var band = false;
    var objRespuesta;

    objArticulo = document.getElementsByName("utensilio");

    for(i = 0; i < objArticulo.length; i++){

        if(objArticulo[i].checked){
            respuesta = respuesta + "<p><strong>Articulo: </strong>"+objArticulo[i].value+
                        "; <strong>Precio: </strong>"+precios[i]+"</p>";
        
            band = true;
        }

    }

    if(band == false)
        respuesta = "Ud. no ha seleccionado ningún artículo";

    objRespuesta = document.getElementById("respuesta");
    objRespuesta.innerHTML = respuesta;

}