const prompt = require('prompt-sync')()


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

let numDec = 0
let i = 0
let verify = 0

while(i !== -1){
    verify = Number(prompt('Informe os números decimais que deseja fazer a média (digite 0 para finalizar): '))
    if((verify !== 0) && (!Number.isInteger(verify))){
        numDec += verify
        i++
    }else if(verify === 0){
        numDec /= i
        i = -1
    }else {
        console.log('Número inválido')
    }
}
console.log('A média aritimética é: ' + numDec)