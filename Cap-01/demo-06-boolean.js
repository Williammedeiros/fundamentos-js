const podeDirigir = true
if(podeDirigir) {
    console.log('Ele pode dirigir')
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('Nao tem saldo ')
}


// forca o valor a true ou false
// de acordo com a tabela
const boolComString = "Aee hackerzao !!"

console.log('boolComString',!! boolComString)

// negacao
console.log('negacao', !boolComString)

// negacao + forcar a Bool

console.log(
    'negacao + forca bool',
    ! (!! boolComString)
)