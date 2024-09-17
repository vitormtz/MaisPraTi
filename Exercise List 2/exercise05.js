// Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


const pessoas = [
    { nome: "Vitor", nota1: 4, nota2: 6},
    { nome: "Ana", nota1: 5, nota2: 2},
    { nome: "Carlos", nota1: 8, nota2: 10}
]

for (const pessoa of pessoas) {    
    console.log(`${pessoa.nome} possui uma média: ` + ((pessoa.nota1 + pessoa.nota2) / 2));
}