// Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.


const empresa = {
    departamentos: [
      {
        nome: "Recursos Humanos",
        funcionarios: ["Ana", "Carlos", "Vitor"]
      },
      {
        nome: "Desenvolvimento",
        funcionarios: ["Fernanda", "João", "Mariana"]
      },
      {
        nome: "Marketing",
        funcionarios: ["Pedro", "Larissa", "Isabela"]
      }
    ]
  }

for (const index in empresa.departamentos) {
    const departamento = empresa.departamentos[index]
    console.log(`Departamento: ${departamento.nome}`)

    for (const funcionario of departamento.funcionarios) {
        console.log(` - Funcionário: ${funcionario}`)
    }
}