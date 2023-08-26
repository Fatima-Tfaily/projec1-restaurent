const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

navbar.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});