const readLine = require('readLine')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual e o seu nome\n', nome => {
//     terminal.question('Qual e o seu telefone\n', telefone =>{
//         console.log (
//             `
//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve, reject) =>{
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""

Promise.resolve()
        .then(()=> questionAsync('Quel e o seu nome'))
        .then(respostaNome => {
            if(!respostaNome) throw new Error('Campo vazio')
            nome = respostaNome
        })
        .then(()=> questionAsync('Qual e o seu telefone'))
        .then(respostaTelefone => {
            if(!respostaTelefone) throw new Error('Campo Vazio')
            telefone = respostaTelefone
        })
        .then(()=> {
            console.log(`Nome: ${nome}, Telefone:${telefone}`)
        })
        .catch(error =>{
            conseole.error('Deu ruim !!!', error.stack)
        })
        .finally(() => terminal.close())