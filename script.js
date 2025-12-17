// EX_1
let arr_1 = []
for (let i = 0; i < 50; i++)
    arr_1[i] = Math.floor(Math.random() * 100 - 50)

let arr_1_2 = []
for (const element of arr_1)
    if (element >= -5 && element <= 5)
        arr_1_2.push(element)
let count = arr_1_2.length

console.log(arr_1)
console.log(arr_1_2)
console.log(count)

// EX_2
let arr_2 = []
for (let i = 0; i < 50; i++)
    arr_2[i] = Math.floor(Math.random() * 100 - 50)

let sum = 0
let minPositive = arr_2[0]
for (const element of arr_2) {
    if (element < 0)
        sum += element
    
    if (minPositive < 0 && element > 0)
        minPositive = element
    else if (element > 0 && element < minPositive)
        minPositive = element
}

console.log(arr_2)
console.log(`Sum before adding minPosive: ${sum}`)

if (sum < -100)
    sum += minPositive

console.log(minPositive)
console.log(`Sum after adding minPosive: ${sum}`)

// EX_3
let arr_3_1 = []
for (let i = 0; i < 7; i++)
    arr_3_1[i] = Math.floor(Math.random() * 11 - 5)

let arr_3_2 = []
for (let i = 0; i < arr_3_1.length - 1; i++) {
    arr_3_2[i] = arr_3_1[i + 1] - arr_3_1[i]
}
console.log(arr_3_1)
console.log(arr_3_2)

// EX_⭐
function association(arr_1, arr_2) {
    let output = []
    arr_1 = arr_1.concat(arr_2)
    for (const element of arr_1)
        if (output.indexOf(element) == -1)
            output.push(element)
    return output
}

function crossing(arr_1, arr_2) {
    let output = []
    for (const element of arr_1)
        if (arr_2.indexOf(element) != -1)
            output.push(element)
    return output
}

function difference(arr_1, arr_2) {
    let output = []
    for (const element of arr_1)
        if (arr_2.indexOf(element) == -1)
            output.push(element)
    return output
}

let arr_s_1 = [1, 2, 3, 4, 5, 6]
let arr_s_2 = [1, 2, 4, 6, 9, 0, 8]
console.log(association(arr_s_1, arr_s_2))
console.log(crossing(arr_s_1, arr_s_2))
console.log(difference(arr_s_1, arr_s_2))

// EX_⭐⭐
let arr_ss = []
let arr_ss_even = []
let arr_ss_odd = []
for (let i = 0; i < 100; i++){
    arr_ss[i] = Math.floor(Math.random() * 201 - 100)
    if (arr_ss[i] % 2 == 0)
        arr_ss_even.push(arr_ss[i])
    else
        arr_ss_odd.push(arr_ss[i])
}
console.log(arr_ss)
console.log(arr_ss_even)
console.log(arr_ss_odd)