type IcontaBancaria = {
    saldo: number,
    depositar: (valor:number) => void
}

let contaBancaria: IcontaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}

type Icorrentista = {
    nome: string,
    contaBancaria: IcontaBancaria
    contatos: string[]
}


let correntista: Icorrentista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)