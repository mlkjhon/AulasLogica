//estrutura de laço de repetição while
const prompt = require('prompt-sync')();

let resposta = 'S';
//laço infinito:
//while (resposta == 'S'){
//    console.log('Voce esta dentro do Bloco');}
    

    while (resposta == 'S'){
    console.log('Voce esta dentro do Bloco');
    resposta = prompt('Deseja continuar?')

}

console.log('Fim');
