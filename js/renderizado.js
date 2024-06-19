import { obtenerDatos } from "./fetch.js";


export async function generarTarjetas(){
    let datos = await obtenerDatos();

    let convidatsContenedor = document.getElementById("convidats");
    datos.forEach(valor => {
        let card = document.createElement('article');
        let nombreInv = document.createElement("h4");
        let descripcionInv = document.createElement("p");
        let fotoInv = document.createElement("picture");
        let sourceInv = document.createElement("source");
        let imgInv = document.createElement("img");
        let enlaceModal= document.createElement("button");




        nombreInv.textContent = valor.nombre;

        descripcionInv.textContent = valor.descripcio;

        enlaceModal.textContent = valor.modal;

        sourceInv.srcset = valor.img.srcset;

        imgInv.src = valor.img.src;

        imgInv.alt = valor.img.alt;


        //================================================================================
        //invencion
        card.classList.add("invitado");
        enlaceModal.classList.add("modal");
        //let modal=document.createElement("dialog");
        //enlaceModal.appendChild(modal);
        //let id=document.createAttribute("id");
        //id.value="updateDetails";
        let id=enlaceModal.setAttribute("id","updateDetails");
        enlaceModal.getAttribute(id);


        



       let updateButton = document.getElementById("updateDetails");
    let cancelButton = document.getElementById("cancel");


        updateButton.addEventListener("click", function () {
            paneles.showModal();
          });
      
          cancelButton.addEventListener("click", function () {
            paneles.close();
          });



        
        
        
        //enlaceModal
        //=========================================================================================





        card.appendChild(fotoInv);
        fotoInv.appendChild(sourceInv);
        fotoInv.appendChild(imgInv);
        card.appendChild(nombreInv);
        card.appendChild(descripcionInv);
        card.appendChild(enlaceModal);
        convidatsContenedor.appendChild(card);

    });
}

