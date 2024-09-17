const prompt = require('prompt-sync')()


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else

let weight = Number(prompt('Informe o peso da pessoa: '))
let height = Number(prompt('Informe a altura da pessoa: '))
let imc = (weight / (height ** 2)).toFixed(2)

if(imc <= 18.5){
    console.log(`IMC de ${imc} é considerado peso baixo`)
}else if(imc <= 24.9){
    console.log(`IMC de ${imc} é considerado peso normal`)
}else if(imc <= 29.9){
    console.log(`IMC de ${imc} é considerado sobrepeso`)
}else {
    console.log(`IMC de ${imc} é considerado obesidade`)
}