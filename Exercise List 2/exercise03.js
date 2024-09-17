// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.


const produto = {
    tamanho: 300,
    preco: 3999,
    peso: 169,
    estoque: 1750
}

const produtoFiltrado = filtrarPropriedadesPorValor(produto, 1000)

for (const key in produtoFiltrado) {
    console.log(`${key}: ${produtoFiltrado[key]}`)
}

function filtrarPropriedadesPorValor (produto, valor) {
    const produtoFiltrado = {}

    for (const key in produto) {
        if (produto[key] > valor) {
            produtoFiltrado[key] = produto[key]
        }
    }

    return produtoFiltrado
}