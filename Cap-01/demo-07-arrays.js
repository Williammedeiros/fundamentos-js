const minhaLista = []
const minhaListaDeTarefas = [
    'mandar e-mail',
    'comparecer nas Daily',
    'programar em Ruby',
    'Criar CI no Jenkins',
    'Disponibilizar na AWS'
]

// console.log(minhaListaDeTarefas[2])
// console.log(minhaListaDeTarefas[3])
// console.log(minhaListaDeTarefas[8])

//Quantidade de itens no array
//console.log(minhaListaDeTarefas[2])

// Adicionar item
//minhaListaDeTarefas.push('Programar em Nodejs')
//console.log(minhaListaDeTarefas)

// remover ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

// remover o primeiro da lista.
//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro, minhaListaDeTarefas)

// remover um item especifico a partir de um indice.
// qual item de inicio
// quantos a remover
//minhaListaDeTarefas.splice(2 , 1)
//console.log(minhaListaDeTarefas)


const itens = [
    1, 'Canada', 10.0 ,
    2, 'USA', 9.8,
    3, 'New Zealand', 9.5
]

// verificar o tipo do array
//console.log(typeof(itens))

//console.log(Array.isArray(itens))

// ordenar
//const numeros = [9, 1, 3, 5, 2]
//console.log(numeros.sort())

//const texto = ['z', 'j', 'a', 'f', 'i', 's']
//console.log(texto.sort())

// juntar dois arrays
//const novo = itens.concat([1, 2, 3])
//console.log(novo)

//junstar arrays em uma string
//console.log(itens.join(''))

// verificar indice do item.
const index = itens.indexOf('USA')
console.log(index)
console.log(itens[index])


