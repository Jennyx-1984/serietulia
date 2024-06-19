let convidats=document.getElementById("convidats");
//let url="http://ragnarok.great-site.net/proyecto/json/convidats.json";


export async function obtenerDatos() {  
    
    try{

        //let invitados = await fetch(url).then(respuesta => respuesta.json());
        //let datos= await invitados.json();

        let url= await fetch("http://ragnarok.great-site.net/proyecto/json/convidats.json")
         let invitados= await url.json();
        console.log(invitados);
         
        return invitados; 

    }catch(error){

        console.log(error);

    }
    
}


