const prompt = require('prompt-sync')()

// console.log(5 * 1)
// console.log(5 * 2)
// console.log(5 * 3)
// console.log(5 * 4)
// console.log(5 * 5)
// console.log(5 * 6)
// console.log(5 * 7)
// console.log(5 * 8)
// console.log(5 * 9)
// console.log(5 * 10)

//<Variável>; <condição>; <incremento>

//let multiplier = Number(prompt('Informe o número que você quer saber a tabuada: '))
//let multiplier = 7

// for(let counter = 1; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }

//Imprimir os valores pares entre 1 e 20
// for(let i = 2; i <= 20; i += 2){
//     console.log(i)
// }

//Calcular a soma dos números de 1 até 100
// let num1 = 0
// for(let i = 0; i <= 100; i++){
//     num1 += i
// }
// console.log(num1)

//Imprimir ps caçpres de 1 até 10 em ordem decrescente
// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// }

//Calcular a soma dos números de 1 a 100 usando while
// let num1 = 0
// let i = 0
// while(i <= 100){
//     num1 += i
//     i++
// }
// console.log(num1)

//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritimética desses números
// let numDec = 0
// let i = 0
// let verify = 0

// while(i !== -1){
//     verify = Number(prompt('Informe os números decimais que deseja fazer a média (digite 0 para finalizar): '))
//     if((verify !== 0) && (!Number.isInteger(verify))){
//         numDec += verify
//         i++
//     }else if(verify === 0){
//         numDec /= i
//         i = -1
//     }else {
//         console.log('Número inválido')
//     }
// }
// console.log('A média aritimética é: ' + numDec)

//Solicitar números ao usuário até que ele insira um valor negativo
// let numDec = 0

// do {
//     numDec = Number(prompt('Informe um número (digite um valor negativo para finalizar): '))
// } while(numDec >= 0)