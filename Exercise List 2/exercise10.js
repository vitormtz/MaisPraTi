// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


const vendas = [
    { produto: "Coca-Cola", quantidade: 26, valor: 11},
    { produto: "Banana", quantidade: 32, valor: 7},
    { produto: "Maçã", quantidade: 45, valor:  4}
]

let valorTotalVendas = 0

vendas.forEach(venda => {
    valorTotalVendas += (venda.quantidade * venda.valor)
});

console.log(`O valor total de vendas de todos os produtos é R$${valorTotalVendas}`)