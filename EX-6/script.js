let tds = document.querySelectorAll("td")

for (let i = 0; i < tds.length; i++){
    tds[i].addEventListener("mouseenter", function(){
        tds[i].style.backgroundColor = "red"
    })

    tds[i].addEventListener("mouseout", function(){
        tds[i].style.backgroundColor = ""
    })
}