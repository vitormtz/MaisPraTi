const prompt = require('prompt-sync')()


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for

let sum = 0

for (let i = 0; i < 5; i++) {
    sum += Number(prompt('Informe um número: '))
}
console.log('A soma total dos números informados é: ' + sum)