const prompt = require('prompt-sync')()

// let teste = function(){
//     console.log('Olá mundo')
// }

// function showFunction(sucessCallback, errorCallback){
//     if(false){
//         sucessCallback('Requisição bem sucedida')
//     }else {
//         errorCallback('Erro na requisição')
//     }
// }

// let sucessCallback = function(message) {
//     console.error(message)
// }

// let errorCallback = (message) => {
//     console.log(message)
// }

// showFunction(sucessCallback, errorCallback)


// 1. Soma dos elementos de um Array
// let num = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// console.log(sumElementsArray(num))

// function sumElementsArray (num){
//     let result = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     return result
// }


//2. Encontre o maior numero em um array
// let num = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// console.log(findHighNumberArray(num))

// function findHighNumberArray (num) {
//     let max = 0
//     for(let i = 0; i < num.length; i++){
//         if(num[i] > max){
//             max = num[i]
//         }
//     }   
//     return max
// }


//3. Criar um array invertido
// let num = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// console.log(num)
// console.log(invertedArray(num))

// function invertedArray (num){
//     let reverse = Array()
//     for(let i = (num.length -1); i >= 0; i--){
//         reverse.push(num[i])
//     }    
//     return reverse
// }


//4. Criar um novo array contendo apenas os números pares
// let num = Array()

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// console.log(justPairsNumbers(num))

// function justPairsNumbers (num){
//     let pares = Array()
//     for(let i = 0; i < num.length; i++){
//         if(!(num[i] % 2)){
//             pares.push(num[i])
//         }    
//     }
//     return pares
// }

//5. Contar ocorrencias de um valor
// let num = Array()
// let numExemp = 0

// do{
//     num.push(Number(prompt('Informe o número (digite 0 para sair): ')))
// }while(num.find(element => element === 0) === undefined)

// numExemp = Number(prompt('Informe o número que deseja verificar as ocorrencias: '))

// console.log(occurrencesValue(num))

// function occurrencesValue(num){
//     let occurrences = 0
//     for(let i = 0; i < num.length; i++){
//         if(numExemp === num[i]){
//             occurrences++
//         }    
//     }
//     return occurrences
// }


// let nome = " Vitor Martinez Brackmann "

// console.log('Vitor'.length)
// console.log('Vitor'.charAt(0))
// console.log(nome.indexOf('T'))
// console.log(nome.indexOf('t'))
// console.log(nome.indexOf('t'))
// console.log(nome.replace('Vi', 'Vic'))
// console.log(nome.substr(6, 10))
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// console.log('-' + nome.trim() + '-')


//Matemáticos

// console.log(Math.ceil(100.75))
// console.log(Math.ceil(100.25))
// console.log(Math.floor(100.75))
// console.log(Math.round(100.75))
// console.log(Math.round(100.25))
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100.20))
// console.log(Math.random() * 100)


//Datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getDay() + 1)
// console.log(date.getFullYear())
// console.log(date.getDate() + 720)
// console.log(date.toString())
// date.setDate(date.getDate() + 720)
// console.log(date.toString())
// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())
// console.log(date1.getTime())
// console.log(date2.getTime())

// let milisecondes_between_date = Math.abs(date1.getTime() - date2.getTime())

// console.log(milisecondes_between_date)

// let milisecondes_per_day = (1 * 24 * 60 * 60 * 1000)

// console.log(`Um dia tem ${milisecondes_per_day} milisegundos`)
// console.log(`A diferença entre as datas é de ${Math.ceil(milisecondes_between_date/milisecondes_per_day)} dias`)


// Inverter uma string
// let palavra = prompt('Informe uma palavra: ')

// console.log(invertWord(palavra))

// function invertWord (palavra){
//     let palavraInvertida = ''
//     for (let i = palavra.length; i >= 0; i--) {
//         palavraInvertida += palavra.charAt(i);
//     }
//     return palavraInvertida
// }


// Contar vogais
// let palavra = prompt('Informe uma palavra: ')

// console.log(vowelsCount(palavra))

// function vowelsCount (palavra) {
//     palavra = palavra.toLowerCase()
//     let vogais = ['a', 'e', 'i', 'o', 'u']
//     let contador = 0

//     for (let i = 0; i < palavra.length; i++) {
//         if (vogais.includes(palavra[i])) {
//             contador++
//         }
//     }
//     return contador
// }


// Gerar número aleatório
// console.log(randomNumber())

// function randomNumber () {
//     return Math.round(Math.random() * 100)
// }


// Dias entre duas datas
// let data1 = new Date(2024, 9, 1)
// let data2 = new Date(2024, 9, 10)

// console.log(diferenceBetweenDates(data1, data2))

// function diferenceBetweenDates(data1, data2) {
//     let umDiaEmMilissegundos = 24 * 60 * 60 * 1000
//     let diferencaEmMilissegundos = Math.abs(data2 - data1)
//     let diferencaEmDias = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos)
    
//     return diferencaEmDias
// }


// Formatar data
// let data = new Date()

// console.log(data)
// console.log(formatedDate(data))

// function formatedDate(data) {
//     let dia = String(data.getDate()).padStart(2, '0')
//     let mes = String(data.getMonth() + 1).padStart(2, '0')
//     let ano = data.getFullYear()
    
//     return `${dia}/${mes}/${ano}`
// }