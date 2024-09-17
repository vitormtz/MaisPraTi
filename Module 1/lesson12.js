// let series = {
//     nome: 'The Boys',
//     genero: ['Ação, paródia, Heróis'],
//     nrTemporadas: 4,
//     status: 'Em andamento',
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 12,
//         temp3: 24,
//         temp4: 12
//     },

//     mostrarCarcteristicas: function(){
//         return ('O nome da série é ' + this.nome + ', E sua classificação é +' + this.classificacao)
//         //return `O nome da série é ${this.nome}, e sua classificação é +${this.classificacao}`
//     }
// }

// console.log(series)
// console.log(series.nome)
// console.log(series.mostrarCarcteristicas())

// for(let key in series){
//     console.log(`${key}: ${series[key]}`)
// }

// for (let serie of Object.keys(series)) {
//     console.log(series[serie])
// }


// let motor = '1000'
// let nome = 'bmw s1000rr'
// let tipo = 'esportiva'
// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor,

//     setMotor: function(){
//         this.motor = '2000'
//         console.log(motor)
//     }
// }

// console.log(moto)
// console.log(moto.setMotor())


// let atleta = {
//     nome: 'Rayssa Leal',
//     esporte: 'Skate Street',
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil'
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronza: 3
// }
// atleta.celebrarVitoria = () => {return 'GANHEI!!!'}

// console.log(atleta)
// console.log(atleta.nacionalidade)
// console.log(atleta.medalhas)
// console.log(atleta.celebrarVitoria())


// let obj1 = {
//     nome: 'Bruce',
//     proficao: 'Batman'
// }

// let obj2 = obj1
// obj2.companheiro = 'Robin'

// console.log(obj1)
// console.log(obj2)


// function computador(cpu, gpu, ram, armazenamento) {
//     this.cpu = cpu
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         return `O ${this.cpu} está funcionando!`
//     }

//     this.mostrarEspeficacoes = function(){
//         return `
//         cpu: ${this.cpu}
//         gpu: ${this.gpu}
//         ram: ${this.ram}
//         armazenamento: ${this.armazenamento}`
//     }
// } 

// let pc = new computador('Ryzen 5 5300', 'GTX 1660TI', '16GB', 'HD 3TB')
// console.log(pc.mostrarEspeficacoes())


// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar,

//         mostrarCarcteristicas: function(){
//             return 'A empresa que lançou o jogo foi ' + empresa
//         }
//     }
// }

// let jogo1 = jogos('Shadows Of The Colossus', 'Ação', 2005, 'FromSoft', () => {return 'Jogando'})

// console.log(jogo1.jogar)
// console.log(jogo1.mostrarCarcteristicas())


// let carro = {
//     modelo: 'Bugati',
//     ano: 2012,
//     cor: 'Laranja'
// }

// for(let key in carro){
//     console.log(`${key}: ${carro[key]}`)
// }


// const jogadores = ['Pelé', 'CR7', 'Messi']

// for (let jogador of jogadores) {
//     console.log(jogador)
// }
