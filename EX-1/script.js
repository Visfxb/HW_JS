let field = document.getElementById("football")
let ball = document.getElementById("ball")

field.addEventListener("click", function(event){
    const rect = field.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    ball.style.transform = `translate(${x - 50}px, ${y - 50}px)`
})