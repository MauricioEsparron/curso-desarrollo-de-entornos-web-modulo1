function limitar(){
    
    var objCadena, objRestante;
    var cadena, tamaño;
    
    objCadena = document.getElementById("comentario");
    objRestante = document.getElementById("restante");

    cadena = objCadena.value;
    tamaño = cadena.length; //abchhiuhu...uyqweuiqDX
    //tamaño = 101

    if(tamaño > 100){
        cadena = cadena.substring(0, 100); //abchhiuhu...uyqweuiqD
        tamaño = 100;
        document.getElementById("comentario").value = cadena;
    }

    objRestante.innerHTML = 100 - tamaño; //0

}


