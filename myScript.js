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
    var listaLi = document.querySelectorAll("#carouselProductosHome ul li");
    for (let i = 0; i < listaLi.length; i++) {
        listaLi[i].classList.remove("derecha");
        listaLi[i].classList.remove("izquierda");
    }
    if (orientacion == 1) {
        let primerItemActivo = document.getElementsByClassName("activo")[0];
        primerItemActivo.classList.replace("activo", "inactivo");
        listaUl.appendChild(primerItemActivo);
        let primerItemInactivo = document.getElementsByClassName("inactivo")[0];
        primerItemInactivo.classList.replace("inactivo", "activo");
        primerItemInactivo.classList.add("derecha");

    } else {
        let ultimoItemActivo = document.getElementsByClassName("activo")[2];
        ultimoItemActivo.classList.replace("activo", "inactivo");
        let ultimoItemInactivo = document.getElementsByClassName("inactivo")[1];
        ultimoItemInactivo.classList.replace("inactivo", "activo");
        ultimoItemInactivo.classList.add("izquierda");
        listaUl.insertBefore(ultimoItemInactivo, listaUl.firstChild);
    }
}