//let ruta="json/modal.json";


export async function leerBiografia(){
     try{
         console.log(`ha entrado`);
         let biografia = await fetch("json/modal.json").then(respuesta => respuesta.json()).then(obj =>console.log(obj));
         //let datos= await invitados.json();
         return biografia; 

     }catch(error){

         console.log(error);

     }
    
    
    
    
    /*console.log(`ha entrado`);
        let biografia = await fetch("json/modal.json")
        .then(respuesta => respuesta.json())
        .then(obj =>console.log(obj));
        //let datos= await invitados.json();
        return biografia;*/

}

leerBiografia();
//console.log(biografia);


