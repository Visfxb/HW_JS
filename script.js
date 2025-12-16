// EX_1
let str_1 = `Сьогодні чудовий день! #happy #sunshine #2024`
const regExp_1 = /#\w*/g
console.log(str_1.match(regExp_1))

// EX_2
let str_2 = `https://www.google.com/search?q=javascript`
const regExp_2 = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/
console.log(regExp_2.exec(str_2)[1])

// EX_3
let str_3 = `256.100.50.25`
const regExp_3 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/
console.log(regExp_3.test(str_3))

// EX_4
let str_4 = `user_123`
const regExp_4 = /^[A-Za-z][\w]{2,15}$/
console.log(regExp_4.test(str_4))

// EX_5
let str_5 = `Текст <b>жирний</b> і <i>курсив</i>`
const regExp_5 = /<\/?[A-Za-z0-9_:-]+>/g
console.log(str_5.match(regExp_5))

// EX_6
let str_6 = `#ff5733`
const regExp_6 = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
console.log(regExp_6.test(str_6))

// EX_7
let str_7 = `Привіт, @user1 і @admin! Як справи, @super_user?`
const regExp_7 = /@\w+/g
console.log(str_7.match(regExp_7))

// EX_8
let str_8 = `1234 5678 9012 3456`
const regExp_8 = /\d{4} ?\d{4} ?\d{4} ?\d{4}/
console.log(regExp_8.test(str_8))