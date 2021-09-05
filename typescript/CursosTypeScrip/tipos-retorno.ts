(()=>{


    const sumar = (a:number, b:number) : number => a + b;

    const nombre = ():string => 'Hola Roberto';

    const obtenerSalrio = () : Promise<string> =>{

        return new Promise((resolve, reject) =>{
            resolve('Roberto');
        });

    }

    obtenerSalrio().then(a => console.log(a.toUpperCase));

})();


