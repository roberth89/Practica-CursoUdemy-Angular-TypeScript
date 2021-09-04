"use strict";
(function () {
    // 14. Introducción a los tipos de datos
    // Evitar con tipos ANY
    var mensaje2 = 'hola';
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var cualquierCosa;
    cualquierCosa = mensaje;
    cualquierCosa = numero;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    spiderman = {
        nombre: 'Juan',
        edad: 40
    };
})();
// Recordatorio abrir como los arhcivos ts, el navegador
// no lo reconoce se debe entrar a la terminal 
// para convertir el archivo ts a js  comando en terminal tsc app.ts
// Si se tiene problemas con el comando:   https://www.alexmedina.net/habilitar-la-ejecucion-de-scripts-para-powershell/
// Si da error porque no instalado el Node en C, debe entrar a variables de equipo y cambiarlo.
// tsc --init para creear achivo tsconfig.json
// tsc -w para guardar automanticamente el archivo js, cuando se hace cambio
// 13. Variables let y cons
// let nuevo scope.
// var usa el mismo espacio en memoria.
