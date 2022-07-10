var lista = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
var indice = 0;
var estado;

function carrucel() {

    var objImagen = document.getElementById("banner");
    objImagen.src = lista[indice];//imagen va a ser obtenida de la lista [0]
    indice++;
    if (indice == lista.length)
        indice = 0;


    estado = setTimeout("carrucel()", 1000);


}

function pausar() {

    if (estado != null) {
        clearTimeout(estado);
        estado = null; 
    }

}

function play(){

    if (estado == null) {
        clearTimeout(estado);
        estado = setTimeout("carrucel()", 1000); // o solo llamar a la función carrucel() luego del if;
    }

}

$(document).ready(function(){
    carrucel();

    $("#pausar").click(function(){
        pausar();
    });

    $("#avanzar").click(function(){
        play();
    });

    $(".imagen").mouseover(function(){
        $(this).css("transform", "scale(1.5)");
        $(this).css("transition", "all 0.5s");
    })

    $(".imagen").mouseout(function(){
        $(this).css("transform", "scale(1)");
        $(this).css("transition", "all 0.5s");
    })
});


