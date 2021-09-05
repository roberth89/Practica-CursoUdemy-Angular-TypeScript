(()=>{

    // Poder ? opcional..
    interface Xmen{
        nombre:string;
        edad:number;
        poder? :string;
    }

    const enviarMision = (xmen: Xmen ) =>{
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarMision = (xmen: Xmen ) =>{
        console.log(`Regresando a ${xmen.nombre} a la mision`);
    }

    const wolverine : Xmen = {
        nombre:'Logan',
        edad:60
    }

    enviarMision(wolverine);
    regresarMision(wolverine);

})();


