// 1) Calcular a média das notas dos alunos de um professor e verificar se está acima da média
//    de aprovação. Use um loop for...in para interar sobre as propriedades dentro de professor.grades.
//    Imprima se o professor está acima da média da aprovação (considerando 6.0 como média).

// const professor = {
//     name: 'Tony Stark',
//     subject: 'Matemática',
//     grades: {
//         aluno1: 10,
//         aluno2: 6,
//         aluno3: 2
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for (const aluno in professor.grades) {
//     sumGrades += professor.grades[aluno]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// if(average >= 6){
//     console.log('Os alunos estão acima da média')
// }else{
//     console.log('Os alunos estão abaixo da média')
// }

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6 ? `${professor.name} está acima da média` : `${professor.name} está abaixo da média`)


// 2) Verificar e listar livros publicados antes de 2000.
//    Use um loop for...of para para interar sobre o array biblioteca.
//    Imprima o título e o ano dos livros que atendem a essa condição.

// const library = [
//     {title: 'Harry Potter', author: 'J.K. Rolling', year: 2002},
//     {title: 'Diario de um banana', author: 'Sei lá', year: 1998},
//     {title: 'O Hobbit', author: 'Romario', year: 1970},
//     {title: 'A sutil arte de falar bosta', author: 'Monark', year: 2023}
// ]

// for (const book of library) {
//     if(book.year <= 2000) {
//         //console.log(book)
//         console.log(`Livro ${book.title}, escito por ${book.author}, foi publicato no ano de ${book.year}`)
//     }
// }


// 3) Contar a quantidade de filmes por gênero.
//    Usar o método forEach para interar sobre o array filmes.
//    Para cada filme, verifique se o gênero já existe no objeto de contagem.
//    Se existir, incrementar a contagem. Se não, adicione o gênero ao objeto com a contagem inicial de 1.

// const movies = [
//     {title: 'Topra de elite', genre: 'Militar'},
//     {title: 'Top Gun', genre: 'Ação'},
//     {title: 'Interestelar', genre: 'Sci-Fi'},
//     {title: 'Senhor do anéis', genre: 'Aventura'},
//     {title: 'Poderoso Chefão', genre: 'Máfia'},
//     {title: 'Vingadores', genre: 'Heróis'},
//     {title: 'DeadPool', genre: 'Heróis'}
// ]

// let genreCount = {}

// movies.forEach(movie => {
//     if (genreCount[movie.genre]){
//         genreCount[movie.genre]++
//     } else {
//         genreCount[movie.genre] = 1
//     }
// });

// for (const genre in genreCount) {
//     console.log(`Existe/m ${genreCount[genre]} filme/s do gênero ${genre}`)
// }

// console.log(genreCount)