const prompt = require('prompt-sync')();

//operações com variaveis

var nr1 = 7;
var nr2 = 15;

let soma = (nr1 + nr2)
console.log(soma);

var preço_celular = 1600
var desconto = 100
console.log('O valor é de', preço_celular - desconto);

valor = Number(prompt('qual é o valor do celular?'));
desconto = Number(prompt('Qual é o desconto em %?'));
valor = valor - (valor * desconto/100);
console.log(`Promoção celular com R$ ${desconto} % de desconto, por apenas R$${valor}`);

//reatribuição de valor variavel

var numero = 4/2;
numero = numero**2;
numero = numero*(50-20);
console.log('O valor é', numero);
console.log(`O valor é : ${numero}`);

let nr = Number (prompt('Qual o numero?'));
let dobro =nr*2
let metade= nr/2
console.log('O numero é', dobro-(metade*2));

