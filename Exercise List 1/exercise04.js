const prompt = require('prompt-sync')()


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada

console.log('===== Menu Interativo =====')
console.log('1) Exibir mensagem motivacional')
console.log('2) Fazer um cálcula simples')
console.log('3) Fechar o menu')
let option = Number(prompt(' '))

switch(option) {
    case 1:
        console.log('Não desista, você consegue!')
        break
    case 2:
        let num1 = Number(prompt('Insira o primeiro valor: '))
        let num2 = Number(prompt('Insira o segundo valor: '))
        let operation = prompt('Informe a operação desejada (+, -, *, /): ')
        let result = 0
        if(operation === '+'){
            result = num1 + num2
        }else if (operation === '-'){
            result = num1 - num2
        }else if (operation === '*'){
            result = num1 * num2
        }else if (operation === '/'){
            if(num2 !== 0){
                result = num1 / num2
            }else {
                console.log('Erro: divisão por zero')
                result = undefined
            }
        }else {
            console.log('Operação inválida')
        }
        if(result !== undefined){
            console.log('Resultado: ' + result)
        }
        break
    case 3:
        console.log('Fechando menu')
        break  
    default:
        console.log('Opção inválida')
}