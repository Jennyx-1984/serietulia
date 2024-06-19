/* let inputValue=document.querySelector("#email").value;
//let pattern=/(([a-z\d.]+)[@]([a-z\d]+)[.]([a-z]+))/
let pattern=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
let result=pattern.test(inputValue);

document.getElementById('email').innerHTML=result; */



const FORM = document.getElementById('formulario');

FORM.addEventListener('submit',function(event){

    event.preventDefault();

    let email = document.getElementById('email').value;
    
    let checkbox = document.getElementById('politica').checked;

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailTrimed = email.trim();
    

        if(emailTrimed === ""){
        alert('Por favor, introduce tu email.');
        document.getElementById('email').style.borderColor="red";
        return;
        }else if(!emailRegex.test(emailTrimed)){
        alert('Por favor, introduce un email válido.');
        document.getElementById('email').style.borderColor="red";
        event.preventDefault();
    }else if(!checkbox){
        alert('Debes aceptar los términos y condiciones');
        document.getElementById('email').style.borderColor="green";
        event.preventDefault();
    }else{
        this.submit();

    }

})




    const FORM2 = document.getElementById('formulario2');
    FORM2.addEventListener('submit',function(event){
        event.preventDefault();
        let email2= document.getElementById('email2').value;

        let checkbox2 = document.getElementById('politica2').checked;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let emailtrimed2 = email2.trim();

    if(emailtrimed2 ===""){
        alert('Por favor, introduce tu email.');
        document.getElementById('email2').style.borderColor="red";
        return;
        }else if(!emailRegex.test(emailtrimed2)){
        alert('Por favor, introduce un email válido.');
        document.getElementById('email2').style.borderColor="red";
        event.preventDefault();
    }else if(!checkbox2){
        alert('Debes aceptar los términos y condiciones');
        document.getElementById('email2').style.borderColor="green";
        event.preventDefault();
    }else{
        this.submit();

    }
    
    
    
    
    
})
