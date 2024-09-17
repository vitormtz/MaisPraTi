const prompt = require('prompt-sync')()


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra

let apples = Number(prompt('Informe o número de maçãs compradas: '))

if(apples < 12){
    console.log(`O valor total da compra de ${apples} maçãs a um custo de R$0,30 a unidade é: ` + (apples * 0.30))
}else {
    console.log(`O valor total da compra de ${apples} maçãs a um custo de R$0,25 a unidade é: ` + (apples * 0.25))
}