const prompt = require('prompt-sync')();

let preco = Number(prompt('Qual é o preço do produto'));
let novo_preço = preco * 0.05
console.log(`O novo preço é ${novo_preço.toFixed(2)}`);
preco = preco-(preco*0.05)
