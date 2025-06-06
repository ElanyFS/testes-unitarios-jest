const prompt = require("prompt-sync")();

// // let valor1 = Number(prompt("Insira o primeiro valor: "));
// // let valor2 = Number(prompt("Insira o segundo valor: "));

// // let op = prompt("Insira a operação desejada: (+, -, *, /)");

// let valor1 = 10
// let valor2 = 2

// let op = '+'

// let resultado = 0;

// if (op === "+") {
//   resultado = valor1 + valor2;
// } else if (op === "-") {
//   resultado = valor1 - valor2;
// } else if (op === "*") {
//   resultado = valor1 * valor2;
// } else if (op === "/") {
//   if (valor2 !== 0) {
//     resultado = valor1 / valor2;
//   } else {
//     resultado = undefined;
//   }
// } else {
//   console.log("Operação inválida");
// }

// switch (op) {
//   case "+":
//     resultado = valor1 + valor2;
//     break;
//   case "-":
//     resultado = valor1 - valor2;
//     break;
//   case "*":
//     resultado = valor1 * valor2;
//     break;
//   case op == "/" && valor2 == 0:
//     resultado = undefined;
//     break;
//   case op == "/" && valor2 !== 0:
//     resultado = valor1 / valor2;
//     break;
//   default:
//     resultado = "Erro ao tentar executar. Tente novamente";
//     break;
// }

// if (resultado == undefined) {
//   console.log("Operação inválida.");
// } else {
//   console.log(resultado);
// }

// Exercicio 1: verificar se um numero é positivo, negativo ou zero

// let value = Number(prompt("Informe um número: "));
// if (value > 0) {
//     console.log("Número positivo");
// } else if(value < 0) {
//     console.log("Número negativo");
// }else if(value == 0) {
//     console.log("Número é zero");
// }else{
//     console.log("Erro ao processar número");
// }

// Exercicio 2: Verificar se o ano é bissexto
// let year = Number(prompt("Informe um ano: "));

// if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
//   console.log("O ano informado é bissexto");
// } else {
//   console.log("O ano não é bissexto");
// }

// Exercicio 3: Definir faixa etario para crianca, adolescente e adultos e com switch mostre na tela se a pessoa pertence a uma, se sim qual

let ageRange = [
  { min: "1", max: "15" },
  { min: "16", max: "19" },
  { min: "20", max: "69" },
  { min: "70" },
];

let name = Number(prompt("Informe seu nome"));
let idade = Number(prompt("Informe sua idade"));

switch (idade) {
  case idade >= ageRange[0].min && idade <= ageRange[0].max:
    console.log('name');
    
    break;

  default:
    break;
}
