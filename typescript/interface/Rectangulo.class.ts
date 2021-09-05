
interface IFigura{
   base:number;
   altura:number;

  // getArea(): number;
}

 export class Rectangulo implements IFigura{
    constructor(public base:number,
                public altura:number
                ){}
                
    public getArea(): number {
       return this.base * this.altura; 
    }      
    
  
}