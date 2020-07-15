class Heroi {
    atacar() {
        console.log(`atacou !!!`)
    }
    defender() {
        console.log(`defendeu !!!!`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(
            `O ${this.nome} atacou !!!!!`
        )
    }
}

const heroi2 = new Heroi2 (
    `Flash`, 80
    )

class Heroi3 {
    static obterAnonascimento(idade){
        return 2020 - idade
    }
}

const anoNascimento = Heroi3.obterAnonascimento(19)
console.log(
    `O ano de nascimento do heroi e ${anoNascimento}`
)