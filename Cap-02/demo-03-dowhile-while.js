let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 20
    if(contador %2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1

    // contador = contador =1
}

// roda a primeira vez e testa a variavel depois

do {
    console.log('So uma vez! pois termoDeParada e', termoDeParada)
} while(termoDeParada)

while(termoDeParada) {
    // nao vai executar
    console.log('Nem vai executar')
}