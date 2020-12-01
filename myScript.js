const mediaQuery768 = window.matchMedia('(max-width: 768px)');
const mediaQuery991 = window.matchMedia('(max-width: 991px)');

detectResize(); // Initial check

mediaQuery768.addEventListener("change", detectResize);
mediaQuery991.addEventListener("change", detectResize);


function detectResize() {
    var listaLiActivos = document.querySelectorAll("#carouselProductosHome ul li.activo");
    listaLiActivos.forEach(element => {
        element.classList.replace('activo', 'inactivo')
    });
    let max;
    if (mediaQuery768.matches) {
        max = 1;
    } else if (mediaQuery991.matches) {
        max = 2;
    } else {
        max = 3;
    }
    for (let index = 0; index < max; index++) {
        let primerItemInactivo = document.getElementsByClassName("inactivo")[0];
        primerItemInactivo.classList.replace("inactivo", "activo");
        portadasActivas = max;
    }
}
let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");

btnRight.addEventListener("click", function () {
    moverSlide(1);
})
btnLeft.addEventListener("click", function () {
    moverSlide(-1);
})

function moverSlide(orientacion) {
    var listaUl = document.querySelector("#carouselProductosHome ul");
    var listaLiInactivos = document.querySelectorAll("#carouselProductosHome ul li.inactivo");
    if (orientacion == 1) {
        let primerItemActivo = document.getElementsByClassName("activo")[0];
        primerItemActivo.classList.replace("activo", "inactivo");
        listaUl.appendChild(primerItemActivo);
        let primerItemInactivo = document.getElementsByClassName("inactivo")[0];
        primerItemInactivo.classList.replace("inactivo", "activo");
    } else {
        let ultimoItemActivo = document.getElementsByClassName("activo")[portadasActivas - 1];
        ultimoItemActivo.classList.replace("activo", "inactivo");
        let ultimoItemInactivo = document.getElementsByClassName("inactivo")[listaLiInactivos.length];
        ultimoItemInactivo.classList.replace("inactivo", "activo");
        listaUl.insertBefore(ultimoItemInactivo, listaUl.firstChild);
    }
}