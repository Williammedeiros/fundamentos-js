function minhaFuncao1 (parametro1) {
    return `No problem`
}

const minhaFuncao2 = function(parametro1) {
    return `No problem ${parametro1} `
}

const minhaFuncao3 = (parametro1) => {
    return `No problem ${parametro1}`
}

const minhaFuncao4 = parametro1 => `No problem ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `No problem ${parametro1}`
}

obj1.minhaFuncao('Test')

const obj2 = {
    minhaFuncao (parametro1) {
        return `No problem ${parametro1}`
    }
}

obj2.minhaFuncao()