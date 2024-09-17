// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


const estoque = [
    { produto: "Notebook", quantidade: 5, minimo: 10 },
    { produto: "Smartphone", quantidade: 15, minimo: 20 },
    { produto: "Tablet", quantidade: 8, minimo: 8 },
    { produto: "Smartwatch", quantidade: 3, minimo: 5 }
  ];
  

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
})

console.log(estoque)