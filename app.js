(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    // Recordatorio abrir como los arhcivos ts, el navegador
    // no lo reconoce se debe entrar a la terminal 
    // para convertir el archivo ts a js
})();
