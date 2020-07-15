class JogoDaMemoria {

    
    constructor({ tela }) {
        this.tela = tela
        this.iconePadrao = './arquivos/padrao.png'
        this.heroisIniciais = [ 
            { img: './arquivos/capitaoamerica.png', nome: 'capitaoamerica'},
            { img: './arquivos/flash.png', nome: 'flash'},
            { img: './arquivos/thor.png' , nome: 'thor'},
            { img: './arquivos/wolverine.png', nome: 'wolverine'},
        ]
        
        this.heroisEscondidos = []
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
        // quando essa função executar, vai ignorar o this de window 
        // ela vai usar o this dessa tela
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    esconderHerois (herois) {
        const heroisOcultos = herois.map(({ nome, id}) => ({
            id, 
            nome,
            img: this.iconePadrao
        }))

        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
    }
    embaralhar() {
        const copias = this.heroisIniciais

        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada um dos itens e gerar um id para cada
        .map((item) => {
            return Object.assign({}, item, { id: (Math.random() / 0.5 )})
        })
        // ordenar
        .sort(() => Math.random() - 0.5 )

        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    jogar() {
        this.embaralhar()
    }

}