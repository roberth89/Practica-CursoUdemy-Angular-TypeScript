(function(){


    // Signo de interrogacion para opcionales
   function activar(quien:string,                    
                    momento? : string,
                    objeto:string = 'batiseñal',  ){

        if(momento){
            console.log(`${quien} activo ${objeto} en la ${momento}`)
        }else{
            console.log(`${quien} activo ${objeto}`)
        }

    

   }


   activar('Gordon', 'tarde');


})();


