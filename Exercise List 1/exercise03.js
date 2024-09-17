const prompt = require('prompt-sync')()


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

let score = Number(prompt('Informe a nota do aluno: '))

if((score < 0) || (score > 10)){
    console.log(`Nota inválida`)
}
else if(score <= 4.99){
    console.log(`Reprovado`)
}else if(score <= 6.99){
    console.log(`Recuperação`)
}else {
    console.log(`Aprovado`)
}