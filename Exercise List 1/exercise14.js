const prompt = require('prompt-sync')()


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while

let factorial = Number(prompt('Informe o número que deseja saber o fatorial: '))
let result = 1

for (let i = 1; i < factorial; i++) {
    result += result * i
}
console.log(result)