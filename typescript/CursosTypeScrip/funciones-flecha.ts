(function(){


//Funcion de flachas

let miFUncion = function(a:string){
    return a.toUpperCase();
}

function funcion2(a:string){
    return a;
}

//Funcion flecha
let miFUncionFlecha = (a:string) => a.toUpperCase();


const sumarN = function (a:number, b:number){
    return a+ b;
}

const sumarF = (a:number, b:number) => a + b;


console.log(miFUncion('Normal'));
console.log(miFUncionFlecha('Flecha'));

console.log(`La suma funcion Normal:  ${sumarN(1,2)}` );
console.log(`La suma funcion Flecha:  ${sumarF(1,2)}` );


const hulk = {
    nombre : 'hulk',
    /*
    smash()
    {
        setTimeout(function () {
            console.log(`${this.nombre} smash!!`);
        },1000);
        
    }*/
    smash()
    {
        // la funcion de flecha no modifica el this.
        setTimeout(() => {
            console.log(`${this.nombre} smash!!`);
        },1000);
        
    }
}

hulk.smash();



})();


