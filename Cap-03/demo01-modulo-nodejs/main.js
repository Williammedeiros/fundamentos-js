const Matematica = require('./matematica')
//console.log(Matematica.somar(1,9))
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor\n', valor1 =>{
    terminal.question('Insira o segundo valor valor\n', valor2 =>{
        terminal.question('Insira a operacao\n', tipoOperacao =>{
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operacao ${tipoOperacao} de ${valor1} e ${valor2} e ${resultado}`
            )
            terminal.close()

        })

    })
})