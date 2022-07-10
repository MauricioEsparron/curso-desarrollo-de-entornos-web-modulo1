function validar(){

    var objUsuario,usuario;

    var patron;
    objUsuario = document.getElementById("usuario");
    usuario = objUsuario.value;

        /**REGLAS
         * Debe emepezar con la letra "i" 
         * sequido de la letra "i", vienen 9 digitos númericos
         * Despues de los 9 dígitos numericos, se debera escribir @cibertec.edu.pe
        */
    patron = /^[i]\d{9}@cibertec\.edu\.pe$/;

    if(!patron.test(usuario)){
    alert("usuario incorrecto");
    return 0;}

    /**
     * validacion clave 
     * */    

    var objClave, clave;

    objClave = document.getElementById("clave");
    clave = objClave.value;
    var  patron;   
        /**
         * 
         * Acepte letras y números, no simbolos
         * minimo 1 carcater
         */

    patron = /^\w+$/;    

     if(!patron.test(clave)){
         alert("clave incorrecta");
         return  0;
     }   
    alert("Bienvenido");

    window.open("registro.html");
    window.close();

}


