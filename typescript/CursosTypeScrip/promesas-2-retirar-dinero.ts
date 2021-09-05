// Practica promesas retirar dinero
(()=>{
    
    var dineroActual : number = 1000;

    //Funcion para retirar
    let fnRetirarDinero = ((montoRetiro : number): Promise<number> => {
        return new Promise((resolve, reject) =>{

            if(montoRetiro > dineroActual){
                return reject('No tiene dinero disponible');
            }else{
                // Acumulador
                dineroActual -= montoRetiro;
                return resolve(dineroActual);
            }
        })
    });

    // llamados
    //500
    fnRetirarDinero(500)
    .then(monto => console.log(`El monto disponible es: ${monto}`))
    .catch(err => console.warn(err));
    //400
    fnRetirarDinero(400)
    .then(monto => console.log(`El monto disponible es: ${monto}`))
    .catch(err => console.warn(err));
    //200
    fnRetirarDinero(200)
    .then(monto => console.log(`El monto disponible es: ${monto}`))
    .catch(err => console.warn(err));




})();


