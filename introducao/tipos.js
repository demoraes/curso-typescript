"use strict";
let funcionarios = {
    supervisores: ['gabriel', 'marcelo'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(10));
// type IcontaBancaria = {
//     saldo: number,
//     depositar: (valor:number) => void
// }
// let contaBancaria: IcontaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }
// type Icorrentista = {
//     nome: string,
//     contaBancaria: IcontaBancaria
//     contatos: string[]
// }
// let correntista: Icorrentista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)
