const prompt = require('prompt-sync')();

let reais = Number(prompt('Quanto tem na carteira em R$'));
let dolar = reais / 5.78
console.log(`voce tem R$ ${reais} convertendo tem ${dolar.toFixed(2)} dólares`);
