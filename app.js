let item= [];

const formulario= document.getElementById("formulario");
const inputTexto= document.getElementById("input-texto");
const lista= document.getElementById("lista");

const mostrarlista = () => { 
    lista.innerHTML = item.map((item) => 
        '<div class="tarjeta"> ${item} </div>').join("");

    };

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;
        
    item.push(texto);
    input.value = "";
    mostrarlista();
    })
