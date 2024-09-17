const prompt = require('prompt-sync')()


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero

let valueA = Number(prompt('Informe o valor do lado A: '))
let valueB = Number(prompt('Informe o valor do lado B: '))
let valueC = Number(prompt('Informe o valor do lado C: '))

if((valueA === valueB) && (valueB === valueC)){
    console.log('É um triângulo equilátero')
}else if((valueA === valueB) || (valueB === valueC) || valueA === valueC){
    console.log('É um triângulo isósceles')
}else {
    console.log('É um triângulo escaleno')
}