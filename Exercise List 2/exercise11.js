// Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


const pedidos = [
    { cliente: "Vitor", produto: "Notebook", quantidade: 10 },
    { cliente: "Ana", produto: "Smartphone", quantidade: 3 },
    { cliente: "Carlos", produto: "Tablet", quantidade: 2 },
    { cliente: "Vitor", produto: "Smartwatch", quantidade: 2 },
    { cliente: "Ana", produto: "Notebook", quantidade: 1 }
  ]
  
const quantidadePorCliente = {}

pedidos.forEach(pedido => {
if (quantidadePorCliente[pedido.cliente]) {
    quantidadePorCliente[pedido.cliente] += pedido.quantidade
} else {
    quantidadePorCliente[pedido.cliente] = pedido.quantidade
}
})

console.log(quantidadePorCliente)