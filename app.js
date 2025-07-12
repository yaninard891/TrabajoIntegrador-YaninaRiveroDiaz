let item= [];

const formulario= document.getElementById("formulario");
const inputTexto= document.getElementById("input-texto");
const lista= document.getElementById("lista");
const limpiarTodo = document.getElementById("limpiar-todo");

const mostrarlista = () => { 
    lista.innerHTML = item.map((item,index) => 
    `<div class="tarjeta"> ${item}
                     </div>`).join("");

    };

        
limpiarTodo.addEventListener("click", () => {
            item = [];
            mostrarlista();
        });


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = inputTexto.value.trim();
    if (texto === "") return;
        
    item.push(texto);
    inputTexto.value = "";
    mostrarlista();
    })
