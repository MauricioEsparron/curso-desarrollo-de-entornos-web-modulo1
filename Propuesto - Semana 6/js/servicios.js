
function insertarZonaDebajo() {

    /*Obtener el distrito que ngresa el usuario*/
    var objNombreZona = document.getElementById("nombreZonaDeBajo");

    var nombreZona = objNombreZona.value;//Los olivos

    /*Obtener la posicion de la ZOna donde quiero ingresar el distrito DEBAJO*/
    var objNumZona = document.getElementById("numZonaDeBajo");

    var numZona = objNumZona.value;//1

    //Crear la estructura en base a nodos --> <p>los Olivos</p>

    var nuevoElemento = document.createElement("p");//crear <p></p> es memoria

    var nuevoTexto = document.createTextNode(nombreZona);//Los olivos como nodo en memoria

    nuevoElemento.appendChild(nuevoTexto);//<p></p>

    /*Insertar el nodo en la posición del HTML que corresponda*/

    var objZona = document.getElementsById("zonas").getElementByTagName("p")[numZona];

    insertAfter(nuevoElemento,objZona);

}

function insertAfter(i, e) {

    if (e.nextSibling) {
        e.parentNode.insertBefore(i, e.nextSibling);
    }
    else {
        e.parentNode.appendChild(i);
    }

}

function insertarDelante(){
    /*Obtener el distrito que ngresa el usuario*/
    var objNombreZona = document.getElementById("nombreZonaDelante");

    var nombreZona = objNombreZona.value;

    /*Obtener la posicion de la ZOna donde quiero ingresar el distrito DEBAJO*/

    var objNumZona = document.getElementById("numZonaDelante")

    var numZona = objNumZona.value;

    //Crear la estructura en base a nodos --> <p>los Olivos</p>

    var nuevoElemento = document.createElement("p");//crear <p></p> es memoria

    var nuevoTexto = document.createTextNode(nombreZona);//Comas como nodo en memoria

    nuevoElemento.appendChild(nuevoTexto);//<p></p>

    /*Insertar el nodo en la posición del HTML que corresponda*/

    var objZona = document.getElementsById("zonas").getElementByTagName("p")[numZona];

    var divZonas = document.getElementById("zonas");

    divZonas.insertBefore(nuevoElemento,objZona);
}














