(()=>{


    const avenger = {
        nombre : 'Ssteve',
        clave: 'Capitan America',
        poder: 'Droga'
    };

    const extraer = ({nombre, poder}: any) => {
       // destructuracion
       //const {nombre, clave } = avenger;

       console.log(nombre);
       console.log(poder);
    } 
    extraer(avenger);

    // areglos
    const avengers : string[] = ['Thor', 'IronMan', 'SpiderMan']

    // destructuracion de arreglos
    const [ thor, ironman, spiderman ] = avengers; 

    const [ , , test ] = avengers; 

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
    console.log(test);

    // psra hacer destructuracion en parametros.
    const extraerArr = ([thor, ironman, spiderman]: string[]) => {

        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers);


})();


