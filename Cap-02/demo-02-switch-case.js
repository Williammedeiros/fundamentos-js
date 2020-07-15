const readLine = require('readline')
const terminal = readLine.createInterface({
    // modo de entrada será via terminal
    input: process.stdin,
    // todo texto de saida será via terminal
    output: process.stdout
})

// texto Menu
const textoMenu = `
Ola, seja bem vindo ao Sistema de Media
Digite 1 para acessar o menu Inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o Menu das Indias Guerreiras
Digite 0 para Sair
`
//console.log('textoMenu', textoMenu)
// const opcao = 2
// switch(opcao) {
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou 2')
//         break;
//     case 3:
//         console.log('pressionou 3')
//         break;
//     default:
//         console.log('opcao Inavlida !!!!')
//         break        
// }

// terminal.question('Qual e seu nome?', (msg) => {
//     console.log('Voce escreveu ', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'Submenu!! Pressione enter para selecionar mais opcoes....',
        fn: opcao1
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

function opcao1 (msg) {
    console.log('nao ha mais opcoes!!!!')
    terminal.close()
}

function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNan(opcao)) {
        throw new Error('Nao e um numero', msg)
    }
    switch(opcao) {
        case 0:
            console.log('Saindo..........')
            terminal.close()
            break;
        case 1:
            conssole.log('Menu Inicial ..')
            terminal.question(
                question.opcao1.texto,
                question.opcao1.fn
            )
            break;
        default:
            console.log('Opcao Invalida!!!')
            terminal.close() 
            break;   
            
    }
}


