/* ==========================================
   MENÚ MÓVIL
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* ==========================================
   CERRAR MENÚ AL HACER CLICK
========================================== */

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==========================================
   BOTÓN VOLVER ARRIBA
========================================== */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   ANIMACIÓN AL APARECER
========================================== */

const elements = document.querySelectorAll(
    ".step, .menu-card, .review, .info-card, .history-highlight"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    element.classList.add("animation-element");

    observer.observe(element);

});


/* ==========================================
   ANIMACIÓN SUAVE DE NÚMEROS
========================================== */

const stats = document.querySelectorAll(".stat strong");

let statsAnimated = false;

const statsObserver = new IntersectionObserver(

    (entries) => {

        if (entries[0].isIntersecting && !statsAnimated) {

            statsAnimated = true;

            stats.forEach(stat => {

                const finalValue = stat.textContent;

                if (!isNaN(parseInt(finalValue))) {

                    let number = 0;
                    const target = parseInt(finalValue);

                    const interval = setInterval(() => {

                        number += Math.ceil(target / 20);

                        if (number >= target) {

                            number = target;
                            clearInterval(interval);

                        }

                        stat.textContent = number;

                    }, 50);

                }

            });

        }

    },

    {
        threshold: 0.5
    }

);


const statsSection = document.querySelector(".stats");

if (statsSection) {
    statsObserver.observe(statsSection);
}