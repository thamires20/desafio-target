// const str = "Olá, mundo!";
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr); // Saída: "!odnum ,álO"


function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const str = "Hello, world!";
const reversedStr = reverseString(str);
console.log(reversedStr);
