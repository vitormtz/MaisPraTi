const prompt = require('prompt-sync')()

// console.log(10 > 5) //true
// console.log(10 < 5) //false
// console.log(10 <= 5) //false
// console.log(10 >= 5) //true
// console.log(10 == 5) //false
// console.log(10 == '10') //true
// console.log(10 === '10') //false
// console.log(10 != '10') //false
// console.log(10 !== '10') //true

//Operadores Lógicos

// console.log((10 < 5) && (10 > 2)) //false
// console.log((10 > 5) || (10 < 2)) //true
// console.log((10 > 5) || !(10 < 2)) //true
// console.log(!(10 > 5) || (10 < 2)) //false

// let user = 'Vitor Brackmann'
// let password = 'teste123'

// let authentication = user === 'Vitor Brackmann' && password === "teste123"
// console.log(authentication)

// let inputUser = 'Vitor Brackmann'
// let inputPassword = 'teste123'
// if((user === inputUser) && (password === inputPassword)){
//     console.log('Usuário logado')
// }else {
//     console.log('Usuário ou senha incorretos')
// }

// const grade = 4

// if(grade >= 60){
//     console.log('APROVADO!')
// }else {
//     console.log('REPROVADO!')
// }

// let age = 24

// if((age >= 18) && (age <= 32)){
//     console.log('Pode se inscrever no concurso')
// }else if((age > 32) || (age < 18)){
//     console.log('Não pode se inscrever')
// }

// let ternaryResult = (10 < 100) ? true : false
// ternaryResult = (10 < 100) ? 'Verdadeiro' : 'Falço'
// ternaryResult = (10 < 100) ? 0 : 1
// ternaryResult = (18 >= age <= 32) ? console.log('Pode se inscrever no concurso') : console.log('Não pode se inscrever')

//Exercicio 1
// let num1 = 17
// num1 % 2 === 0 ? console.log('PAR') : console.log('IMPAR')

//Exercicio 2
// let num1 = 2
// let num2 = 5
// let num3 = 3
// if((num1 > num2) && (num1 > num3)){
//     console.log('O primeiro valor é maior')
// }else if ((num2 > num1) && (num2 > num3)){
//     console.log('O segundo valor é maior')
// }else if ((num3 > num1) && (num3 > num2)){
//     console.log('O terceiro valor é maior')
// }

//Exercicio 3
// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))
// let operation = prompt('Informe a operação desejada (+, -, *, /): ')
// let result = 0
// if(operation === '+'){
//     result = num1 + num2
// }else if (operation === '-'){
//     result = num1 - num2
// }else if (operation === '*'){
//     result = num1 * num2
// }else if (operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2
//     }else {
//         console.log('Erro: divisão por zero')
//         result = undefined
//     }
// }else {
//     console.log('Operação inválida')
// }
// if(result !== undefined){
//     console.log('Resultado: ' + result)
// }

// let option = 1

// switch(option) {
//     case 1:
//         console.log('Você selecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você selecionou a terceira opção')
// }