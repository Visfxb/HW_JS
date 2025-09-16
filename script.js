// EX 1
let number = prompt(`Enter number`);
if (number[0] != number[1] && number[1] != number[2])
    alert(`Digits don't repeat`)
else
    alert(`Digits are repeated`)
document.body.innerHTML += `
    <div class="block">
        <p>
            <b>Завдання 1</b><br>
            Запитати у користувача тризначне число та перевірити, чи є в ньому однакові цифри<br>
            <br>Input: ${number}<br>Output: ${number[0] != number[1] && number[1] != number[2] ? `Digits don't repeat` : `Digits are repeated`}
        </p>
    </div>`


// EX 2
let year = +prompt(`Enter year`);
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
    alert(`Year is leap`);
else
    alert(`Year isn't leap`);
document.body.innerHTML += `
    <div class="block">
        <p>
            <b>Завдання 2</b><br>
            Запитати у користувача рік та перевірити, чи є він високосним. Високосний рік або
кратний 400, або кратний 4 і при цьому не кратний 100<br>
            <br>Input: ${year}<br>Output: ${(year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? `Year is leap` : `Year isn't leap`}
        </p>
    </div>`

// EX 3
let euro = +prompt(`Euro`);
let currency = prompt(`Currency UAN or AZN`);
if (currency == `UAN`)
    alert(`${euro} EUR =  ${euro * 48} UAN`);
else if (currency == `AZN`)
    alert(`${euro} EUR = ${euro * 2} AZN`);

// EX 4
let score = 0;
if (+prompt(`1 + 1 = `) == 2) score += 2;
if (+prompt(`1 + 2 = `) == 3) score += 2;
if (+prompt(`1 + 3 = `) == 4) score += 2;
alert(`Your score is ${score}`);

// EX 5
let day = +prompt(`Day`);
let month = +prompt(`Month`);
year = +prompt(`Year`);

day++;
let daysInMonth;
if (month == 2)
    daysInMonth = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 29 : 28;
else if (month == 4 || month == 6 || month == 9 || month == 11)
    daysInMonth = 30;
else
    daysInMonth = 31;

if (day > daysInMonth) {
    day = 1;
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
}
alert(`${day}.${month}.${year}`);

// EX 6
number = +prompt(`Number`);
let shifts = +prompt(`number of shifts`);

for (let i = 0; i < 6 - shifts; i++) {
    let digit = number % 10;
    number = parseInt(number / 10);
    number += digit * 100000
}
alert(number);

// EX 7
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log(`FizzBuzz`);
    else if (i % 5 == 0) console.log(`Buzz`);
    else if (i % 3 == 0) console.log(`Fizz`);
    else console.log(i);
}

// EX 9
let low = 0;
let hight = 100;

while (low != hight) {
    if (confirm(`Is your number more than ${low + parseInt((hight - low) / 2)}`))
        low += parseInt((hight - low) / 2) + 1;
    else
        hight -= Math.ceil((hight - low) / 2);
}
alert(`your number is ${low}`);