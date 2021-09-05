//import {ISuperHeroe} from './interface/ISuperHeroe';

(()=>{  

    // Uso de Let y Const
    const NOMBRE = 'Ricardo Tapia';
    let edad = 23;
  
    const Personaje = {
      nombre: NOMBRE,
      edad: edad
    };
  
  
    // Cree una interfaz que sirva para validar el siguiente objeto
    /*
    let batman : ISuperHeroe = {
      nombre: 'Bruno Díaz',
      artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    }
    */
  
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble( a :number, b :number ){
      return (a + b) * 2
    }

    // listo
    const resultadoDobleFlecha = ((a:number, b:number) : number => (a + b) * 2);
  
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    let  getAvenger = function( nombre:string, poder?:string, arma:string = 'pistola' ){
      var mensaje;
      if( poder ){
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      }else{
        mensaje = nombre + ' tiene un ' + poder
      }
    };
  
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    
    interface IFigura{
      base:number;
      altura:number;
    
     // getArea(): number;
    }

 class Rectangulo implements IFigura{
   constructor(public base:number,
               public altura:number
               ){}
               
   public getArea(): number {
      return this.base * this.altura; 
   }     
   
 
}

  
    const rectangulo = new Rectangulo(2,4);
    console.log(rectangulo.getArea());
    
  
  
  })();