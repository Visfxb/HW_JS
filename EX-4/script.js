const btn = document.getElementById("up");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 100 ? "flex" : "none"
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
});