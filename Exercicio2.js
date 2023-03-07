/*
EXERCICIO 2

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

node Exercicio2.js

*/

const prompt = require("prompt-sync")();
const infoNumber = Number(prompt("Digite um número: ")); // solicita ao usuário que digite um número

let first = 0, second = 1, next;
let belongs = false;

if (infoNumber === first || infoNumber === second) {
  belongs = true;
} else {
  for (let i = 3; i <= infoNumber; i++) {
    next = first + second;
    first = second;
    second = next;

    if (infoNumber === next) {
      belongs = true;
      break;
    }
  }
}

if (belongs) {
  console.log(`O número ${infoNumber} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${infoNumber} não pertence à sequência de Fibonacci.`);
}