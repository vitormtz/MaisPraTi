// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


const pessoas = [
    { nome: "Vitor", idade: 26, cidade: "Porto Alegre" },
    { nome: "Ana", idade: 32, cidade: "São Paulo" },
    { nome: "Carlos", idade: 45, cidade: "Rio de Janeiro" }
]

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}