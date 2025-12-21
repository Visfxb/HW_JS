// EX_1
let calculator = {
    read: function() {
        this.num1 = +prompt("Введіть число 1")
        this.num2 = +prompt("Введіть число 2")

        document.getElementById("ex_1").innerHTML += `<p>Перше число: ${this.num1}<br>Друге число: ${this.num2}</p>`
    },
    sum: function(){ return this.num1 + this.num2 },
    mul: function(){ return this.num1 * this.num2 }
}

document.getElementById("ex_1").innerHTML += `<p class="title">Ex 1  Calculator</p>`
calculator.read()
document.getElementById("ex_1").innerHTML += `<hr>`
document.getElementById("ex_1").innerHTML += `<p>Їхня сума: ${calculator.sum()}</p>`
document.getElementById("ex_1").innerHTML += `<p>Їхній добуток: ${calculator.mul()}</p>`

// EX_2
let date = {
    hours: 20,
    minutes: 30,
    seconds: 45
}

function showDate(date) {
    document.getElementById("ex_2").innerHTML += `<p>${date.hours}:${date.minutes}:${date.seconds}</p>`
}
function addSeconds(date, seconds) {
    date.seconds += seconds
    if (date.seconds >= 60) {
        date.minutes += Math.floor(date.seconds / 60)
        date.seconds %= 60

        if (date.minutes >= 60) {
            date.hours += Math.floor(date.minutes / 60)
            date.minutes %= 60

            if (date.hours >= 24)
                date.hours %= 24
        }
    }
}
function addMinutes (date, minutes) {
    addSeconds(date, minutes * 60)
}

function addHours (date, hours) {
    addMinutes(date, hours * 60)
}

document.getElementById("ex_2").innerHTML += `<p class="title">Ex 2  Date</p>`

document.getElementById("ex_2").innerHTML += `<p>Початкова дата</p>`
showDate(date)

document.getElementById("ex_2").innerHTML += `<hr><p>+ 30 секунд</p>`
addSeconds(date, 30)
showDate(date)

document.getElementById("ex_2").innerHTML += `<hr><p>+ 5 годин</p>`
addHours(date, 5)
showDate(date)

// EX_3
function autoInfo(automobile) {
    document.getElementById("ex_3").innerHTML += `<p>
    Колір: ${automobile.color}<br>
    Модель: ${automobile.model}<br>
    Рік випуску: ${automobile.year}<br>
    Виробник: ${automobile.manufact}<br>
    </p>`
}
function driverInfo(automobile) {
    if (automobile.name === undefined || automobile.experience === undefined)
        console.log(`Ім'я власника або стаж не знайдений`)
    else
        document.getElementById("ex_3").innerHTML += `<p>
    Ім'я власника: ${automobile.name}<br>
    Водійський стаж: ${automobile.experience}<br>
    </p>`
}
function compareYear(automobile) {
    let year = +prompt(`Введіть рік автомобіля`)
    document.getElementById("ex_3").innerHTML += `<p>${automobile.year === year ? `Підходить` : `Жаль`}</p>`
}
function changeColor(automobile) {
    automobile.color = prompt(`Введіть новий колір автомобіля`)
}

let automobile = {
    color: "red",
    model: "Skyline",
    year: 2020,
    manufact: "Nissan"
}
automobile.name = "Петя"
automobile.experience = 5

document.getElementById("ex_3").innerHTML += `<p class="title">Ex 3  Automobile</p>`




autoInfo(automobile)
driverInfo(automobile)
document.getElementById("ex_3").innerHTML += `<hr>`
compareYear(automobile)
document.getElementById("ex_3").innerHTML += `<hr><p>Новий колір<br></p>`
changeColor(automobile)
autoInfo(automobile)