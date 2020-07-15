const textoPar = "par"
const textoImpar = "impar"
// for(let index = 0; index <=10; index++) {
//     const decisao = index % 2 === 0 ? textoPar: textoImpar
//     console.log(`O numero e ${index} e ${decisao}`)
// }


const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Will',
        superPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Daniel',
        superPoder: 'Super Forca'
    }
]

console.log(minhaListaDeTarefas)

for(let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
}

// nao precisa de contador

for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome)
}

// nao precisa de index

for(const item of minhaListaDeTarefas) {
    console.log('Nome***', item.nome)
}