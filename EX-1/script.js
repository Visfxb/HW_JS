const currentTheme = localStorage.getItem("theme")

if (currentTheme === "dark") {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
}
else{
    document.body.classList.remove("dark")
    document.body.classList.add("light")
}

document.getElementById("theme-btn").addEventListener("click", function() {
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")

    let theme = "light"
    if (document.body.classList.contains("dark"))
        theme = "dark"
    localStorage.setItem("theme", theme)
});
