const images = ["../images/1.jfif", "../images/2.jfif", "../images/3.jfif",
     "../images/4.jfif", "../images/5.jfif", "../images/6.jfif"]

document.getElementById("image-btn").addEventListener("click", function(){
    let index = Math.floor(Math.random() * (images.length))
    console.log(index)
    document.getElementById("image").src = images[index]
})
