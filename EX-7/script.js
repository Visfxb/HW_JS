const countries = [
    'Україна','Німеччина','Франція','Італія','Іспанія',
    'Польща','Канада','США','Японія','Китай','Швеція'
];
let input = document.getElementById("input")

input.addEventListener("keyup", function(){
    document.getElementById("countries").innerHTML = ""
    let value = input.value.toLowerCase()
    if (value === "") return

    for (let i = 0; i < countries.length; i++){
        if (countries[i].toLowerCase().includes(value)){
            document.getElementById("countries").innerHTML += `
        <button onclick="addCountryToInput('${countries[i]}')">${countries[i]}</button>
            `
        }
    }
})

function addCountryToInput(country){
    document.getElementById('input').value = country
}