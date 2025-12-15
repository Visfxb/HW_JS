function CaesarСipher(str, k) {
    output = ``;
    for(let char of str) {
        const isChar = /^[A-Z]+$/.test(char);
        if (isChar) {
            if (char.charCodeAt(0) - 'A'.charCodeAt(0) - k < 0)
                output += String.fromCodePoint(char.charCodeAt(0) + 26 - k)
            else
                output += String.fromCodePoint(char.charCodeAt(0) - k)
        }
        else
            output += char;
    }
    return output;
}

let str = prompt(`Enter string(A-Z)`)
let k = +prompt(`Enter k`)
alert(CaesarСipher(str, k))