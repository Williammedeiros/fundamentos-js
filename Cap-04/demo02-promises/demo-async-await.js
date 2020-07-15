const readfile = require('readline')
const terminal = readfile.createInterface({
    input: process.stdin,
    output: process.stdout
})


function questionAsync(texto) {
    return new Promise((resolve, reject) =>{
        terminal.question(`${texto}\n`, (msg) => {
            if(!msg) return  reject(new Error ('O campo nao pode estar vazio'))
            return resolve(msg)
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual e o seu nome')
        const telefone = await questionAsync('Qual e o seu telefone')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)

    }catch (error) {
        console.log('Deu ruim !!!!', error.stack)

    }
    finally{
        terminal.close()

    }
}
main()
