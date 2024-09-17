// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.


const filmes = [
    { titulo: "The Godfather", diretor: 'Francis Ford Coppola', anoLancamento: 1972},
    { titulo: "Pulp Fiction", diretor: 'Quentin Tarantino', anoLancamento: 1994},
    { titulo: "Inception", diretor: 'Christopher Nolan', anoLancamento: 2010}
]

const titulos = [];

filmes.forEach(filme => {
  titulos.push(filme.titulo);
});

console.table(titulos)