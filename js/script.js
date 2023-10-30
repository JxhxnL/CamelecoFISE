document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel_publicidad");
    const imagenes = carrusel.querySelectorAll("img");
    const prevButton = carrusel.querySelector(".carrusel-prev");
    const nextButton = carrusel.querySelector(".carrusel-next");
    let currentIndex = 0;

    function mostrarImagen(index) {
        imagenes.forEach((imagen, i) => {
            if (i === index) {
                imagen.style.display = "block";
            } else {
                imagen.style.display = "none";
            }
        });
    }

    function mostrarSiguienteImagen() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        mostrarImagen(currentIndex);
    }

    function mostrarImagenAnterior() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(currentIndex);
    }

    prevButton.addEventListener("click", mostrarImagenAnterior);

    nextButton.addEventListener("click", mostrarSiguienteImagen);

    mostrarImagen(currentIndex);

    setInterval(mostrarSiguienteImagen, 8000);
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");

    modal.style.display = "block";

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

const imagen1clic = document.getElementById("imagen1clic");

imagen1clic.onclick = function () {
    window.open("https://www.instagram.com/camelecosas/", "_blank", "noopener noreferrer");
};

const imagen2clic = document.getElementById("imagen2clic");

imagen2clic.onclick = function () {
    window.open("https://www.facebook.com/CamelecoSAS", "_blank", "noopener noreferrer");
};

const imagen3clic = document.getElementById("imagen3clic");

imagen3clic.onclick = function () {
    window.open("https://www.linkedin.com/company/cameleco-limitada/?originalSubdomain=co", "_blank", "noopener noreferrer");
};

//Responsive imagenes carrusel

function cargarImagenesSegunAnchoVentana() {
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 768) { 
        document.getElementById("imagen1clic").src = "./img/imagen1-cel.png";
        document.getElementById("imagen2clic").src = "./img/imagen2-cel.png";
        document.getElementById("imagen3clic").src = "./img/imagen3-cel.png";
    } else {
        document.getElementById("imagen1clic").src = "./img/imagen1-pc.png";
        document.getElementById("imagen2clic").src = "./img/imagen2-pc.png";
        document.getElementById("imagen3clic").src = "./img/imagen3-pc.png";
    }
}

window.addEventListener("load", cargarImagenesSegunAnchoVentana);
window.addEventListener("resize", cargarImagenesSegunAnchoVentana);

//Patrocinadores

$(document).ready(function () {
    $("#patrocinadores-carousel").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });

    $(".arrow.prev").on("click", function() {
        $("#patrocinadores-carousel").slick("slickPrev");
    });

    $(".arrow.next").on("click", function() {
        $("#patrocinadores-carousel").slick("slickNext");
    });
});