// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


const produtos = [
    { nome: "Coca-Cola", preco: 100, desconto: 25},
    { nome: "Banana", preco: 123, desconto: 30},
    { nome: "Maçã", preco: 250, desconto: 20}
]

produtos.forEach(produto => {
    produto.preco -= 0.1 * produto.preco
    produto.desconto += 10
    console.log(`A ${produto.nome} está com um desconto de ${produto.desconto}%, custando apenas R$${produto.preco}`)
})