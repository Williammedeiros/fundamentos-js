// meses do ano comecam com 0 
//const dataAniversario = new Date(2020, 0, 20)
//console.log(dataAniversario)

//const primeiroDataDoJs = new Date(0)
//console.log(primeiroDataDoJs)

//const hoje = new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

// formato global recomendado !!!!!
//console.log(hoje.toISOString())

//const dia = hoje.getDate()
//hoje.setDate(dia + 3) // + 3 dias depois
//hoje.setHours(10, 30, 0)
//console.log(hoje)

console.log(`
   Dia: ${hoje.getDate()}
   Mes: ${hoje.getMonth()}
   Ano: ${hoje.getFullYear()}
   Hora: ${hoje.getHours()}
   Minutos: ${hoje.getMinutes()}
   Segundos: ${hoje.getSeconds()}
`)

console.log(
   new Date(2020, 1, 21) > new Date(2000, 2, 2)
)