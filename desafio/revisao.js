"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() { console.log('Toooooooooot!'); }
    acelerar(delta) {
        return this.velocidade += delta;
    }
}
const moto = new Moto('V14');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo;
// retangulo.base = 9
// retangulo.altura = 5
console.log(retangulo.area(), 'retangulo are');
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get() {
        return this._primeiroNome;
    }
    set(nome) {
        if (nome.length >= 3) {
            return this._primeiroNome = nome;
        }
        else {
            return this._primeiroNome = 'Fulano';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.get());
estagiario.set('Le');
console.log(estagiario.get());
estagiario.set('Leonardo');
console.log(estagiario.get());
