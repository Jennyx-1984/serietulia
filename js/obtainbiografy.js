import {leerBiografia } from "./biografia.js";



export  async function renderizarModal(){
    let data = await leerBiografia();

    console.log(`esto es el valor de leerbiografia = ` + data);

     let panel=document.querySelector("dialog");
    console.log(`esto es el valor de panel = `+ panel)
    
    let updateButton = document.querySelector(".modal");
    console.log(`esto es el boton Veure biografia = `+ updateButton);


    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("class","cancel");
    panel.appendChild(cancelButton);
     cancelButton = document.querySelector(".cancel");
     console.log(`esto es el valor de cancelar = ` + cancelButton);


        //updateButton.addEventListener("click", function () {
        updateButton.addEventListener("click",()=>{
            //panel.showModal();
            panel.showModal();
          });
      
          //cancelButton.addEventListener("click", function () {
          cancelButton.addEventListener("click",()=>{
            panel.close();
          });
    










    data.forEach(valor => {
        
        
        let fotoInv = document.createElement("img");
        let nombreInvi = document.createElement("h3");
        let descrInv = document.createElement("p");
        let series = document.createElement("div");

        
        

        fotoInv.src = valor.imgMod;
        nombreInvi.textContent = valor.nombreMod;
        descrInv.textContent=valor.descripcioMod;
        series.src = valor.pelicules;



        fotoInv.setAttribute("class","img-panel");
        nombreInvi.setAttribute("class","nombreInvi");
        descrInv.setAttribute("class","texto-panel");
        series.setAttribute("class","pelis-panel");



        panel.appendChild(fotoInv);
        panel.appendChild(nombreInvi);
        panel.appendChild(descrInv);
        panel.appendChild(series);
        //biografiaObtain.appendChild(panel);




        
    })


    

}


renderizarModal();


















