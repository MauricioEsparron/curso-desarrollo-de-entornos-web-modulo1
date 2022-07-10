function validaciones() {

    /*

    Regla Nombres y Apellidos

    - Debe tener letras

    - Mínimo 1 caracter
*/

    var objNombre = document.getElementById("nombre");
    var nombre;
    nombre = objNombre.value;
    var patron;


    patron = /^\D{1,10}$/;

    if(!patron.test(usuario)){
    alert("usuario incorrecto");
    return 0;}
    /*
        Regla Dirección
    
        - Alfanumérico
    
        - Mínimo 1 caracter
    */
    var objApellido = document.getElementById("apellido");
    var apellido
    apellido = objApellido.value;
    


    /*
        Regla DNI
    
        - 8 dígitos numéricos
    */
        var objDni = document.getElementById("dni");
        var dni = objDni.value;



    /*
        Regla Celular
    
        - Empezar con 9
    
        - 9 dígitos numéricos */

        var objCelular = document.getElementById("celular");
        var celular = objCelular.value;
}