const prompt = require('prompt-sync')();

//lendo o valor em metros
let metros = Number (prompt('digite uma medida em metros'));
//convertendo em centimetros
let cm = metros * 100
//convertendo em milimetros
let mm = metros * 1000
//convertendo em km
let km = metros/1000
//exibindo o valor
console.log(`${metros}m é ${cm}cm, ${mm}mm e ${km}km`);

