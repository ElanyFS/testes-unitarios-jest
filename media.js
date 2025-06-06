// Média aritmetica de numeros informados pelo usuario até que o usuario digite 0;
let prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

let numero = Number(prompt("Informe um valor: "));

while (numero !== 0) {
  soma += numero;
  numero = Number(prompt("Informe outro valor: "));
  contador++;
}

let media = soma / contador;

console.log("Média dos números informador: ", media);