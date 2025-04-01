const prompt = require('prompt-sync')();

let largura = Number(prompt('Qual a largura em metros'));
let altura = Number(prompt('Qual a altura em metros'));
let area = largura * altura
let rendimento = 2
let litros = area / rendimento
console.log(`para pintar ${area}m² voce precisa de ${litros}Litros de tinta`);
