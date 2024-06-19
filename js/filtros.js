let $HBO = document.getElementById("HBO");
let $netflix = document.getElementById("netflix");
let $filmin = document.getElementById("filmin");
let $prime = document.getElementById("prime");
let $disney= document.getElementById("disney");
let $todos = document.getElementById("totes");
let series = document.getElementsByClassName("serie");

console.log(series); //3
console.log($todos);


function filtrarArticulos(title) {


    for(let i=0; i<series.length;i++){
        let articulo = series[i];
        let articuloTitle = articulo.getAttribute("title");
        console.log(articuloTitle);

        if(title === "totes" || articuloTitle === title){
            //esto los muestra
            articulo.classList.remove("ocultar");
            
        }else{
            //esto los oculta
            articulo.classList.add("ocultar");
        }
    }

}

$todos.addEventListener("click",() =>filtrarArticulos("totes"));
$HBO.addEventListener("click",() =>filtrarArticulos("HBO"));
$netflix.addEventListener("click",() =>filtrarArticulos("netflix"));
$filmin.addEventListener("click",()=> filtrarArticulos("filmin"));
$prime.addEventListener("click",()=>filtrarArticulos("prime"));
$disney.addEventListener("click",()=>filtrarArticulos("disney"));