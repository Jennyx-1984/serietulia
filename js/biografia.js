//let ruta="json/modal.json";


export async function leerBiografia(){
     try{
         console.log(`ha entrado`);
/*          let biografia = await fetch("json/modal.json").then(respuesta => respuesta.json()).then(obj =>console.log(obj));*/
       let ruta= await fetch("json/modal.json")
         let biografia= await ruta.json();
        console.log(biografia);
         return biografia; 

     }catch(error){

         console.log(error);

     }
    
    
    
    
    
}





