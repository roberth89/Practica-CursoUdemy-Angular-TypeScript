"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola, ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    // Recordatorio abrir como los arhcivos ts, el navegador
    // no lo reconoce se debe entrar a la terminal 
    // para convertir el archivo ts a js  comando en terminal tsc app.ts
    // Si se tiene problemas con el comando:   https://www.alexmedina.net/habilitar-la-ejecucion-de-scripts-para-powershell/
    // Si da error porque no instalado el Node en C, debe entrar a variables de equipo y cambiarlo.
    // tsc --init para creear achivo tsconfig.json
    // tsc -w para guardar automanticamente el archivo js, cuando se hace cambio
})();
