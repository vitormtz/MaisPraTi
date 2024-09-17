const prompt = require('prompt-sync')()


// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente

let valueA = Number(prompt('Informe o primeiro valor: '))
let valueB = Number(prompt('Informe o segundo valor: '))

if(valueA < valueB){
    console.log(`A ordem crescente dos valores informados é: ` + valueA + ', ' + valueB)
}else {
    console.log(`A ordem crescente dos valores informados é: ` + valueB + ', ' + valueA)
}