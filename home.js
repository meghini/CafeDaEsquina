const galeria = document.querySelector(".imagens");
const direita = document.querySelector("#direita");
const esquerda = document.querySelector("#esquerda");

direita.addEventListener("click", () => {
    if (galeria.scrollLeft >= galeria.scrollWidth - galeria.clientWidth - 10) {
        galeria.scrollLeft = 0;
    } else {
        galeria.scrollLeft += 320;
    }
});

esquerda.addEventListener("click", () => {
    if (galeria.scrollLeft <= 10) {
        galeria.scrollLeft = galeria.scrollWidth;
    } else {
        galeria.scrollLeft -= 320;
    }
});