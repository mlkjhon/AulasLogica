const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Digite a velocidade '));


if(velocidade >80){
    let conta = (velocidade-80)*7
    console.log(`Voce multado em R$ ${conta}`);
    
}
else{
    console.log('Voce nao foi multado');
    
}