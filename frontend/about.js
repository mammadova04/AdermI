const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navLinks.classList.toggle("show");
});
