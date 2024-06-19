import {leerBiografia } from "./biografia.js";



/*export function renderizarModal(){
    let data = leerBiografia();
    data.forEach(valor => {
        let panel=document.getElementById("paneles");
        let fotoInv = document.createElement("img");
        let nombreInvi = document.createElement("h3");
        let descrInv = document.createElement("p");
        let series = document.createElement("div");

        fotoInv.src = valor.imgMod;
        nombreInvi.textContent = valor.nombreMod;
        descrInv.textContent=valor.descripcioMod;
        series.src = valor.pelicules;

        panel.appendChild(fotoInv);
        panel.appendChild(nombreInvi);

        panel.appendChild(descrInv);

        biografiaObtain.appendChild(panel);
    })

}


renderizarModal();*/


















/*export async function generarModal(){
    let data = await leerBiografia();

    

    data.forEach(valor => {
        let modal = document.createElement("dialog");
        let nombreInvi = document.createElement("h3");
        let fotoInv = document.createElement("img");
        let descrInv = document.createElement("p");
        let series = document.createElement("div");

        fotoInv.src = valor.imgMod;
        nombreInvi.textContent = valor.nombreMod;
        descrInv.textContent=valor.descripcioMod;
        series.src = valor.pelicules;

        modal.appendChild(fotoInv);
        modal.appendChild(nombreInvi);

        modal.appendChild(descrInv);

        biografia.appendChild(modal);
    })}*/