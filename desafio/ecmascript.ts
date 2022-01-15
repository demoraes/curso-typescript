// Exercicio 1 
const dobro = (valor: number): number => valor + 2;

console.log(dobro(15),'valor')

// Exercicio 2
const dizerOla = function(nome:string='Pessoa'): void {
    
    console.log('Olá, ' + nome)
}

dizerOla('Gabrial')


// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array = [55,40]
array.push(...nums)
console.log(array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [notas1,notas2] = notas
console.log(notas2)

// Exercicio 6
const cientista = { primeiroNome:'Will', experiencia: 12 }
const { primeiroNome, experiencia } = cientista;
console.log(experiencia)