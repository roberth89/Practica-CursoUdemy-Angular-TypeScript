(function(){

    function getEdad(){
        return 10 + 10 + 10 + 1;
    }

    // Template Literales
    const nombre = 'Roberto';
    const apellido = 'Cordero';
    const edad = 31;   
    
    const salida = `${nombre} \n${apellido} \n${getEdad()}`;

    console.log(salida);


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

