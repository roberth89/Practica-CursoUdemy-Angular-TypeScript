"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Uso de Let y Const
    const NOMBRE = 'Ricardo Tapia';
    let edad = 23;
    const Personaje = {
        nombre: NOMBRE,
        edad: edad
    };
    // Cree una interfaz que sirva para validar el siguiente objeto
    let batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2;
    }
    // listo
    const resultadoDobleFlecha = ((a, b) => (a + b) * 2);
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    let getAvenger = function (nombre, poder, arma = 'pistola') {
        var mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
        }
    };
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        getArea() {
            return this.base * this.altura;
        }
    }
    const rectangulo = new Rectangulo(2, 4);
    console.log(rectangulo.getArea());
})();
//# sourceMappingURL=app.js.map