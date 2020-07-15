function nomeDaFuncao(parametro1){
    // bloco de codigo
}

function queDiaEHoje(){
    const data = new Date()
    console.log(`Hoje e dia: ${data.getDate()}`)
}
queDiaEHoje()


function soma (valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} e `, valor1 + valor2)
}

soma(10, 70)
soma(9,3)

function soma(valor1, valor2) {
    return valor1 + valor2
}
const idade = 30
const tamanho = 10
const resultado = soma (idade, tamanho)
console.log('resultado', resultado)

function multiplicar(valor1, valor2) {
    const resultado = valor1 + valor2
    return resultado
}
console.log('O resultado e', multiplicar(30, 80))

const funcionario1 = {
    nome: 'Daniel',
    desconto: 0.3 ,
    salarioBruto: 9800,
    salarioLiquido: 0

}

const funcionario2 = {
    nome: 'Luzinha',
    desconto: 0.2,
    salarioBruto: 8500,
    salarioLiquido: 0
}

//const descontoFuncionario1 =
 //    funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)

//const descontoFuncionario2 =
    // funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)   
     
   //  console.log(
   //      `Funcionario1: ${descontoFuncionario1}
   //       Funcionario2: ${descontoFuncionario2}`
 //    )


 function calcularDescconto(salarioBruto, desconto) {
     return salarioBruto - (salarioBruto * desconto)
 }

 funcionario1.salarioLiquido = calcularDescconto(
    funcionario1.salarioBruto,
    funcionario1.desconto 
 )

 funcionario2.salarioLiquido = calcularDescconto(
     funcionario2.salarioBruto,
     funcionario2.desconto
 )

 console.log(
     `Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
      Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`
 )