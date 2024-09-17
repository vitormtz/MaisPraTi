// Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


const carro = {
    marca: 'BMW',
    modelo: 'Série 3',
    ano: 2022,
    cor: 'Preto'
}

for (const key in carro) {
    console.log(`${key}: ${carro[key]}`)
}