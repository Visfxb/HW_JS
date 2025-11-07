// EX 1
const R = 50;
let L = 2 * Math.PI * R;
console.log(`L: ${L}`);

// EX 2
let maxNum = Math.max(1, 3, 5, 6, 2);
console.log(`Max number: ${maxNum}`);

// EX 3
let randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Random Integer from -5 to 10: ${randomInteger(-5, 10)}`);

// EX 4

let guessNumber = confirm(`Користувач вгадує число комп'ютера?`) ? (min, max) => {
    // Користувач вгадує число комп'ютера
    document.body.innerHTML += `<p>Комп’ютер загадав число! Спробуйте вгадати його.</p>`
    
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    let userNumber;
    let attempt = 1;

    while ((userNumber = +prompt(`Введіть ваш варіант`)) != number) {
        document.body.innerHTML += `<p>Введіть ваш варіант: ${userNumber}</p>`;
        attempt++;

        if (userNumber < number) {
            alert(`Загадане число більше!`);
            document.body.innerHTML += `<p>Загадане число більше!</p>`;
        }
        else {
            alert(`Загадане число менше!`);
            document.body.innerHTML += `<p>Загадане число менше!</p>`;
        }
    }
    alert(`Вітаємо! Ви вгадали число ${number} за ${attempt} спроби!`);
    document.body.innerHTML += `<h3 style="color: yellow;">Вітаємо! Ви вгадали число ${number} за ${attempt} спроби!</h3>`;
    

}
: (min, max) => {
    // Комп'ютер вгадує число користувача
    while (min != max) {
        document.body.innerHTML += `<p>Ваше число більше ${min + parseInt((max - min) / 2)}?</p>`;
        if (confirm(`Ваше число більше ${min + parseInt((max - min) / 2)}?`)) {
            document.body.innerHTML += `<p>Так</p>`;
            min += parseInt((max - min) / 2) + 1;
        }
        else {
            document.body.innerHTML += `<p>Ні</p>`;
            max -= Math.ceil((max - min) / 2);
        }
    }
    alert(`Ваше число ${min}`);
    document.body.innerHTML += `<h3 style="color: yellow;">Ваше число ${min}</h3>`;
}

document.body.innerHTML += `
<h3 style = "display: flex; flex-direction: column; justify-content: center; align-items: center; color: blue;">
<p>==========================</p>
<p>Гра "Вгадай число"</p>
<p>==========================</p>
</h3>
`


let min = +prompt(`Enter min number`);
let max = +prompt(`Enter max number`);

document.body.innerHTML += `<p>Введіть діапазон чисел: </p>`;
document.body.innerHTML += `<h3 style="color: green;">Мінімальне значення: ${min}</h3>`;
document.body.innerHTML += `<h3 style="color: green;">Максимальне значення: ${max}</h3>`;
guessNumber(min, max);