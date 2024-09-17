// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


const livro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'J. K. Rowling',
    anoPublicacao: 1999,
    genero: ['Romance', ' Literatura fantástica']    
}
let existePropriedade = false

for (const key in livro) {
    if (key.match('editora')) {
        existePropriedade = true
        break
    }
}

if(!existePropriedade){
    livro.editora = 'londrina Bloomsbury'
}

for (const key in livro) {
    console.log(`${key}: ${livro[key]}`)
}