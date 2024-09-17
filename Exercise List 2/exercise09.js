// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.


const clientes = [
    { nome: "Vitor", idade: 26, cidade: "Porto Alegre" },
    { nome: "Ana", idade: 32, cidade: "São Paulo" },
    { nome: "Carlos", idade: 45, cidade: "Rio de Janeiro" }
]

let contador = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        contador++
    }
});

console.log(`${contador} clientes possuem mais que 30 anos`)