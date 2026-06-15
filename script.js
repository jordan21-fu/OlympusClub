const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
function abrir(){
    menu.classList.toggle("active");
}

const elementos = document.querySelectorAll(
    ".abajo, .arriba, .izquierda, .derecha"
);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");

            observer.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    observer.observe(elemento);
});