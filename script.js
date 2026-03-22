const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const projectBtn = document.querySelector(".btn-primary");
const contactBtn = document.querySelector(".btn-secondary");

projectBtn.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

contactBtn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});



const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {
    slider.addEventListener("wheel", (event) => {
        event.preventDefault();

        const speed = 2; // 🔥 increase this for faster scroll

        if (event.deltaX !== 0) {
            slider.scrollLeft += event.deltaX * speed;
        } else {
            slider.scrollLeft += event.deltaY * speed;
        }
    });
});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.1)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});