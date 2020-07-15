const pessoa = {
     _nome: '',
     _idade: 20,
     get nome () {
         return this._nome

     },
     set nome(valor) {
         this._nome = valor.toUpperCase()
     },

     get podeDirigir() {
         return this._idade > 18
     },
     set idade(valor) {
         this._idade = valor 
     }

}


pessoa.nome = "Daniel Pedro"
console.log(pessoa.nome)
pessoa.idade = 17
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)
