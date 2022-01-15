"use strict";
// Desafio Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrao 0)
// Obs 2.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 2) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto})`;
    }
}
const produto = new Produto('Bolacha', 11);
console.log(produto.resumo());
const produto2 = new Produto('Feijão', 50, 50);
console.log(produto2.resumo());