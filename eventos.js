const contenedor = document.querySelector("div");
const btn = document.querySelector("button");

function alertaBoton(event) {
    alert('Hola!');
    event.stopPropagation();
}


contenedor.addEventListener("click", () => {
    alert('Hola soy el div!')
});