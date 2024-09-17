// Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.


const carrinho = {
    itens: [
      { nome: "Notebook", quantidade: 2, precoUnitario: 3000 },
      { nome: "Smartphone", quantidade: 3, precoUnitario: 2000 },
      { nome: "Tablet", quantidade: 1, precoUnitario: 1500 }
    ]
  }

let valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
})

console.log(`Valor Total do Carrinho: R$${valorTotal.toFixed(2)}`) 