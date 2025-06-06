const prompt = require("prompt-sync")();

// Funcao que conta quantas vogais em uma string

// let string = prompt("Informe uma string: ");
// function countVogais(params) {
//   return params.match(/[aeiou]/gi).length;
// }

// console.log("Quantidade de vogais: ", countVogais(string));

// Funcao que gera um numero aleatório entre mim e max

// let value1 = Number(prompt("Informe o valor minimo: "));
// let value2 = Number(prompt("Informe o valor maximo: "));

// function geraNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(geraNumeroAleatorio(value1, value2));

// Funcao para verificar a diferenca entre datas

// let data1 = new Date(2015, 5, 14);
// let data2 = new Date(2015, 5, 24);

// function diferencaEntreDatas(data1, data2) {
//     const diaMilissegundos = 1 * 24 *60 * 60 * 1000;

//     return Math.abs(data2.getTime() - data1.getTime()) / diaMilissegundos;
// }

// console.log(diferencaEntreDatas(data1, data2));

// Funcao para formatar uma data.

// let data = new Date(2000, 8, 28);

// function formatarData(data) {
//     const dataFormat = `${String(data.getDate()).padStart(2,'0')}/${String(data.getMonth()).padStart(2,'0')}/${data.getFullYear()}`
//     return `Data formatada: ${dataFormat}`;
// }

// console.log(formatarData(data));

// Matriz
// let matriz1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let matriz2 = [
//   [7, 8, 9],
//   [10, 11, 12],
// ];


// let soma = [];

// for (let i = 0; i < matriz1.length; i++) {
//    soma[i] = [];

//    for (let j = 0; j < matriz1[i].length; j++) {
//     soma[i][j] = matriz1[i][j] + matriz2[i][j]
//    }
    
// }
// console.log(soma);


// let array = ['flamengo', 'botafogo', 'vasco', 'fluminense'];

// for (let i of array) {
//     console.log(i);
// }