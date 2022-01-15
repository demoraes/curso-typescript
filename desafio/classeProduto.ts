// Desafio Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrao 0)
// Obs 2.: Criar dois produtos: passando dois e três params

class Produto {
    constructor(public nome: string,public preco: number,
        public desconto: number = 2) {}

    public resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto})`
    }
}

const produto = new Produto('Bolacha',11)
console.log(produto.resumo())
const produto2 = new Produto('Feijão', 50, 50)
console.log(produto2.resumo())
