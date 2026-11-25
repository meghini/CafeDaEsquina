const galeria = document.querySelector(".imagens");
const direita = document.querySelector("#direita");
const esquerda = document.querySelector("#esquerda");

const passo = () => galeria.querySelector("img").offsetWidth + 20; // largura da foto + gap

direita.addEventListener("click", () => {
    if (galeria.scrollLeft >= galeria.scrollWidth - galeria.clientWidth - 10) {
        galeria.scrollLeft = 0;
    } else {
        galeria.scrollLeft += passo();
    }
});

esquerda.addEventListener("click", () => {
    if (galeria.scrollLeft <= 10) {
        galeria.scrollLeft = galeria.scrollWidth;
    } else {
        galeria.scrollLeft -= passo();
    }
});
