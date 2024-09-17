const prompt = require('prompt-sync')()


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else

let age = Number(prompt('Informe a idade da pessoa: '))

if(age <= 12){
    console.log(`Uma pessoa de ${age} anos é considerado uma crianaça`)
}else if(age <= 18){
    console.log(`Uma pessoa de ${age} anos é considerado um adolescente`)
}else if(age <= 60){
    console.log(`Uma pessoa de ${age} anos é considerado um adulto`)
}else {
    console.log(`Uma pessoa de ${age} anos é considerado um idoso`)
}