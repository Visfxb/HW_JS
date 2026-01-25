let input = document.getElementById("input")

input.addEventListener("keyup", function(){
    let cards = document.querySelectorAll(".card")
    for (let i = 0; i < cards.length; i++){
        if (cards[i].dataset.name.toLowerCase().includes(input.value.toLowerCase()))
            cards[i].style.display = ""
        else
            cards[i].style.display = "none"
    }
})