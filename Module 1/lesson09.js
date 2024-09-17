const prompt = require('prompt-sync')()

//1. Soma dos elementos de um Array
// let num = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)
// console.log(num.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]
// }
// console.log(sum)

//2. Encontre o maior numero em um array
// let num = Array()
// let max = 0

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// for(let i = 0; i < num.length; i++){
//     if(num[i] > max){
//         max = num[i]
//     }
// }
// console.log(max)

//3. Criar um array invertido
// let num = Array()
// let reverse = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// for(let i = (num.length -1); i >= 0; i--){
//     reverse.push(num[i])
// }
// console.log(num)
// console.log(reverse)

//4. Criar um novo array contendo apenas os números pares
// let num = Array()
// let pares = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// for(let i = 0; i < num.length; i++){
//     if(!(num[i] % 2)){
//         pares.push(num[i])
//     }    
// }
// console.log(pares)

//5. Contar ocorrencias de um valor
// let num = Array()
// let occurrences = 0
// let numExemp = 0

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// numExemp = Number(prompt('Informe o número que deseja verificar as ocorrencias: '))

// for(let i = 0; i < num.length; i++){
//     if(numExemp === num[i]){
//         occurrences++
//     }    
// }
// console.log(occurrences)

//Arrays/Vetores multidimensionais
// let matriz1 = [
//     [1, 2, 3],
//     [4, 5, 6,],
//     [7, 8, 9,],
// ]
// let matriz2 = [
//     [3, 6, 5],
//     [10, 2, 9,],
//     [0, 4, 7,],
// ]

// console.table(matriz)
// console.log(matriz[0][2])

// for(let i = 0; i < matriz1.length; i++){
//     for(let j = 0; j < matriz1[i].length; j++){
//         console.log(`Elemento na posição [${i}, ${j}]: ` + matriz1[i][j])
//     }
// }

// let matriz3 = []

// if(matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length){
//     throw new Error('As arrays devem possuir o mesmo temanho')
// }else {
//     for(let i = 0; i < matriz1.length; i++){
//         let somaLinha = []
//         for(let j = 0; j < matriz1[i].length; j++){
//             somaLinha.push(matriz1[i][j] + matriz2[i][j])
//         }
//         matriz3.push(somaLinha)
//     }
//     console.table(matriz3)
// }