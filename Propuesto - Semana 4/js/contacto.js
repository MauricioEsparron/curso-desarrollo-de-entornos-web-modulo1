function limitar(){
    
    var objComentario, objRestante;
    var comentario, longitud;

    objComentario = document.getElementById("comentario");
    objRestante = document.getElementById("restante");

    comentario = objComentario.value; //abcde...z    x
                                      //0       99  100    ----> TAMAÑO 101
    longitud = comentario.length; //TAMAÑO = 101

    if(longitud > 100){
        longitud = 100;
        comentario = comentario.substring(0, 100);
        document.getElementById("comentario").value = comentario;
    }

    objRestante.innerHTML = 100 - longitud;

}