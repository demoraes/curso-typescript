// Class com Generics
// Soma de numeros
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T,
        public operando2: T) {}

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3,69).executar())
console.log(new SomaBinaria(30,434).executar())

// Diferença entre datas
class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        console.log(new Date(`${mes}/${dia}/${ano}`).getTime(),'aqui a adata')
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1-t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1,2,2020)
const d2 = new Data(2,4,2020)
console.log(new DiferencaEntreDatas(d1,d2).executar())