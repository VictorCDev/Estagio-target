/*
EXERCICIO 5

5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

node Exercicio5.js

*/

const prompt = require("prompt-sync")();
let str = prompt("Digite uma palavra ou frase para inverter:"); // solicita a entrada da string a ser invertida pelo usuário
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr); // imprime a string invertida
