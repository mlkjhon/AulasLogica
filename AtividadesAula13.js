console.log('============================================================================================================================================');
//Atividade 01
let numeros1 = [1,2,3,4,5,6,7,8,9,10]
for (let conta of numeros1){
    console.log(conta);
}
console.log('============================================================================================================================================');
//Atividade 02
let nome = ['Gustavo', 'Diogo', 'Messias']
for(let imprima of nome){
    console.log(imprima);
    
}
console.log('============================================================================================================================================');

//Atividade 03
let mes = ['janeiro', 'Fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro' ,'dezembro']
for (let resultado of mes){
    if(resultado.includes('j')){
console.log(`Os meses que começam com 'J' são: ${resultado}`);

    }
}

console.log('============================================================================================================================================');
//Atiividade 04
let animais = ['gato', 'cachorro', 'passaro', 'peixe']
for (let minusculo of animais){
    console.log(minusculo.toUpperCase());
}
console.log('============================================================================================================================================');
//Atividade 05
// Gera uma lista com 5 números aleatórios entre 1 e 100
let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = Math.floor(Math.random() * 100) + 1;
  numeros.push(numero);
}

// Exibe o número e seu dobro
numeros.forEach((numero) => {
  console.log(`Número: ${numero} | Dobro: ${numero * 2}`);
});
console.log('============================================================================================================================================');
//Atividade 06
// Solicita uma palavra ao usuário
const prompt = require('prompt-sync')();
let palavra = prompt("Digite uma palavra:");

// Converte para minúsculas para facilitar a contagem
palavra = palavra.toLowerCase();

// Define as vogais
let vogais = "aeiou";

// Conta as vogais
let contagem = 0;
for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i])) {
    contagem++;
  }
}

// Exibe o resultado
console.log(`A palavra "${palavra}" tem ${contagem} vogal(is).`);
console.log('============================================================================================================================================');
//Atividade 07
// String com os nomes dos carros
let carros = 'Gol;Corsa;Palio;Monza;Fusca;';

// Remove o último ponto e vírgula, caso exista, e separa os itens em um array
let listaCarros = carros.split(';').filter(item => item !== '');

// Exibe cada item com sua posição
listaCarros.forEach((carro, index) => {
  console.log(`Posição ${index}: ${carro}`);
});
console.log('============================================================================================================================================');