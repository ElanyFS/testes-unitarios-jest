const prompt = require("prompt-sync")();

let value = Number(prompt("Informe um valor: "));

// Soma dos numeros de 1 até N

function somaDeNumero(n) {
  // let soma = 0;
  // for (let i = 1; i <= n; i++) {
  //     soma += i
  // }
  // console.log(soma);
  // if (n == 0) {
  //     return 0;
  // }
  // return n + somaDeNumero(n-1)
  // if (n == 1) {
  //     return 1;
  // }
  // return n + somaDeNumero(n-1)
}

// somaDeNumero(value)

// console.log(somaDeNumero(10));

// Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(value));
