const titles = document.querySelectorAll(".block .title")
const contents = document.querySelectorAll(".block .content")

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", () => {
        contents.forEach(c => c.style.display = "none")
        contents[i].style.display = "block"
    })
}