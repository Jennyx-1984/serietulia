let convidats=document.getElementById("convidats");
let url="json/convidats.json";


export async function obtenerDatos() {  
    
    try{

        let invitados = await fetch(url).then(respuesta => respuesta.json());
        //let datos= await invitados.json();
        return invitados; 

    }catch(error){

        console.log(error);

    }
    
}


