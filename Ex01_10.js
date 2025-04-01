const prompt = require('prompt-sync')();

let km = Number(prompt('Quantos km voce percorreu'));
let dias = Number(prompt('Quantos dias voce ficou com o carro'));

let valor_final = (km*0.15) + (dias * 60);

console.log(`Voce pagara R$${valor_final}`);
