// Exercício 1 - Classe
class Moto {
    constructor(public nome: string, public velocidade: number = 0) {}

    buzinar(): void { console.log('Toooooooooot!') }

    acelerar(delta: number): number { 
        return this.velocidade += delta 
    }
}
 
const moto = new Moto('V14')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
abstract class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {}

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo
// retangulo.base = 9
// retangulo.altura = 5
console.log(retangulo.area(), 'retangulo are')
 
// Exercício 3 - Getters & Setters

class Estagiario {
    protected _primeiroNome: string = ''

    get(): string {
        return this._primeiroNome
    }

    set(nome: string): string {
        if(nome.length >= 3) {
            return this._primeiroNome = nome
        } else {
            return this._primeiroNome = 'Fulano'
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.get())
estagiario.set('Le')
console.log(estagiario.get())
estagiario.set('Leonardo')
console.log(estagiario.get())