window.addEventListener("load",()=> {
    let boton = document.querySelector("#boton");
    boton.addEventListener("click",(event)=>{
        event.preventDefault();
        alert("HOLA!");
    });
});
