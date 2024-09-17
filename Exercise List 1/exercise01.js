const prompt = require('prompt-sync')()


// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if

let num = Number(prompt('Informe o número que você quer saber se é par ou ímpar: '))

if(num % 2){
    console.log(`O número ${num} é ímpar`)
}else {
    console.log(`O número ${num} é par`)
}