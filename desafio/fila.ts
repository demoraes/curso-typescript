// Desafio Classe fila
// Atributo: fila (array)
// Métodos: entrar, proximo, imprimir

class Fila<T> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args
  }

  entrar(elemento: T) {
    this.fila.push(elemento)
  }

  proximo(): T {
    const primeiro = this.fila[0]
    this.fila.splice(0,1)
    return primeiro
  }

  imprimir() {
    console.log(this.fila)
  }
}

const fila = new Fila<string>('Gui','Pedro','Ana','Lu')
fila.imprimir()
fila.entrar('Gabriel')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())






