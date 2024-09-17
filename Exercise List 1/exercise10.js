const prompt = require('prompt-sync')()


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

let num = Number(prompt('Informe um número: '))

for (let i = 0; i < 10; i++) {
    console.log(num)    
}