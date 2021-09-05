(()=>{

    /*
    class Avenger {
        nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanas?: number;

        constructor(nombre: string,
            equipo: string,
            nombreReal: string,
            puedePelear: boolean) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;

        };

    };
*/

class Avenger {
    constructor(public nombre:string,
        public equipo: string,
        public nombreReal?: string,
        public puedePelear: boolean = true,
        public peleasGanas: number = 0        
    ){}

};
    const antman: Avenger = new Avenger('Antman', 'Capi');

    console.log(antman);


})();


