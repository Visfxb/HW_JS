// EX_1
let ex1 = document.createElement("div")
ex1.id = "ex1"
ex1.innerHTML += `
		<textarea id="text-input" placeholder="Введіть текст українською..."></textarea>
		<br><button id="analyze-btn">Проаналізувати</button>
		<div id="ex-1-result"></div>
`
document.body.appendChild(ex1)
document.getElementById("analyze-btn").addEventListener("click", () => {
	const text = document.getElementById("text-input").value.trim()
	const resultDiv = document.getElementById("ex-1-result")

	if (!text) {
		resultDiv.innerHTML = `<p class="error">Будь ласка, введіть текст!</p>`
		return
	}

	const charCount = text.length

	const words = text.split(/\s+/).filter(word => word.length > 0)
	const wordCount = words.length

	const vowels = text.match(/[аеєиіїоуюя]/gi)
	const vowelCount = vowels ? vowels.length : 0

	let longestWord = ""
	for (const word of words) {
		if (word.length > longestWord.length)
			longestWord = word
	}

	resultDiv.innerHTML = `
				<table>
					<tr>
						<th>Показник</th>
						<th>Значення</th>
					</tr>
					<tr>
						<td>Кількість символів</td>
						<td>${charCount}</td>
					</tr>
					<tr>
						<td>Кількість слів</td>
						<td>${wordCount}</td>
					</tr>
					<tr>
						<td>Кількість голосних</td>
						<td>${vowelCount}</td>
					</tr>
					<tr>
						<td>Найдовше слово</td>
						<td>${longestWord}</td>
					</tr>
				</table>
	`
})

// EX_2
let arr = []
for (let i = 0; i < 20; i++)
	arr.push(Math.floor(Math.random() * 101 - 50))

let pos = 0, neg = 0, nulls = 0
let sum = 0

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) pos++
	else if (arr[i] < 0) neg++
	else nulls++

	sum += arr[i]
}

let even = []
for (let i = 0; i < arr.length; i++)
	if (arr[i] % 2 == 0)
		even.push(arr[i])

let ex2 = document.createElement("div")
ex2.id = "ex2"
ex2.innerHTML += `
		<p>Згенерований масив 20 елементів</p>
		<p>${arr.join(", ")}</p>
		<p>Позитивні: ${pos} Негативні: ${neg} Нулі: ${nulls}</p>
		<p>Сума: ${sum}</p>
		<p>Середнє арифметричне: ${sum / arr.length}</p>
		<p>Масив парних елементів</p>
		<p>${even.join(", ")}</p>
		<p>Мінімальне число: ${Math.min(...arr)}</p>
		<p>Максимальне число: ${Math.max(...arr)}</p>
`
document.body.appendChild(ex2)

// EX_3

let shop = {
	"Ноутбук": 32000,
	"Мишка": 800,
	"Клавіатура": 1500,
	"Монітор": 12000,
	"Навушники": 2200
}

let ex3 = document.createElement("div")
ex3.id = "ex3"
ex3.innerHTML += `
		<input type="number" id="discount" placeholder="Введіть знижку %">
		<br><button id="submit-discount-btn">Відправити</button>
		<div id="ex-3-result">
		</div>
`
document.body.appendChild(ex3)

document.getElementById("submit-discount-btn").addEventListener("click", () => {
	let discount = document.getElementById("discount").value

	if (discount < 0 || discount > 100 || discount === ''){
		document.getElementById("ex-3-result").innerHTML = `<p class="error">Будь ласка, введіть число від 0 до 100</p>`
		return
	}

	let reuslt = ``
	for (const [name, price] of Object.entries(shop))
		reuslt += `
					<tr>
						<td>${name}</td>
						<td>${price}</td>
						<td>${price / 100 * (100 - discount)}</td>
					</tr>
		`
	document.getElementById("ex-3-result").innerHTML = `
			<table>
				<thead>
					<tr>
						<td>Товар</td>
						<td>Ціна</td>
						<td>Знижка ${discount}%</td>
					</tr>
				</thead>
				<tbody>
					${reuslt}
				</tbody>
			</table>
	`
})

// EX_4

function onBirthDateChange(obj) {
    const birthInput = obj.value
    const result = document.getElementById("ex4-result")

    const birthDate = new Date(birthInput)
    const today = new Date()
    
    today.setHours(0, 0, 0, 0)

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today)
        nextBirthday.setFullYear(today.getFullYear() + 1)

    const diffInMs = nextBirthday.getTime() - today.getTime()
    const daysToBirthday = Math.round(diffInMs / (1000 * 60 * 60 * 24))

    let age = nextBirthday.getFullYear() - birthDate.getFullYear()

    result.innerHTML = `
        <p>До наступного дня народження: <b>${daysToBirthday}</b> днів</p>
        <p>Виповниться років: <b>${age}</b></p>
    `
}

const days = [`Неділя`, `Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`]
let date = new Date()

let DD = date.getDate().toString().padStart(2, "0")
let MM = (date.getMonth() + 1).toString().padStart(2, "0")
let YYYY = date.getFullYear()
let hh = date.getHours().toString().padStart(2, "0")
let mm = date.getMinutes().toString().padStart(2, "0")
let ss = date.getSeconds().toString().padStart(2, "0")

const now = new Date()
const endOfYear = new Date(now.getFullYear(), 11, 31)
const daysToEnd = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24))

let ex4 = document.createElement("div")
ex4.id = "ex4"
ex4.innerHTML = `
		<p>${DD}.${MM}.${YYYY} ${days[date.getDay()]} ${hh}:${mm}:${ss}</p>
		<p>До кінця року залишилось ${daysToEnd} днів</p>
		<input onchange="onBirthDateChange(this)" type="date" id="date-input">
		<div id="ex4-result"></div>
`
document.body.appendChild(ex4)