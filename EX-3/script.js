const images = ["../images/1.jfif", "../images/2.jfif", "../images/3.jfif",
     "../images/4.jfif", "../images/5.jfif", "../images/6.jfif"]
let currentIndex = 0
let image = document.getElementById("image")
let timer

document.getElementById("prev-btn").addEventListener("click", function(){
    if (timer !== null) clearInterval(timer)
    currentIndex--
    if (currentIndex < 0) currentIndex += images.length
    image.src = images[currentIndex]
})
document.getElementById("next-btn").addEventListener("click", function(){
    if (timer !== null) clearInterval(timer)
    currentIndex++
    if (currentIndex >= images.length) currentIndex -= images.length
    image.src = images[currentIndex]
})
document.getElementById("slide-show-btn").addEventListener("click", function(){
    timer = setInterval(function(){
        currentIndex++
        if (currentIndex >= images.length) currentIndex -= images.length
        image.src = images[currentIndex]
    }, 1500)
})
