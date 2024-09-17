// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


const funcionarios = [
    { nome: "Vitor", cargo: 'Gerente', salario: 8000},
    { nome: "Ana", cargo: 'Atendente De Caixa', salario: 1125},
    { nome: "Carlos", cargo: 'Operador De Empilhadeira', salario: 2500}
]

for (const funcionario of funcionarios) {
    if(funcionario.salario > 2000){
        console.log(`${funcionario.nome} possui o cargo de ${funcionario.cargo} e ganha R$${funcionario.salario} de salário`);
    }
}