const prompt = require('prompt-sync')();
//Desafio 01
var salario = Number(prompt('Diga seu salario'));


var IRPF1 = salario * (0 / 100);
var IRPF2 = salario * (7.5 / 100);
var IRPF3 = salario * (15 / 100);
var IRPF4 = salario * (22.5 / 100);
var IRPF5 = salario * (27.5 / 100);

var por1 = 0
var por2 = 7.5
var por3= 15
var por4 = 22.5
var por5 = 27.5


var INSS1 = salario * (7.5 / 100)
var INSS2 = salario * (9 / 100)
var INSS3 = salario * (12 / 100)
var INSS4 = salario * (14 / 100)
var INSS5 = salario - 908.85

var In1 = 7.5
var In2 = 9
var In3 = 12
var In4 = 14
var In5 = 908.85


//Irpf
if (salario <= 2259.20 ) {
    console.log(`Seu IRPF é de ${por1}%, sendo R$ ${IRPF1} de salario`);
    
}

if ( salario > 2259.20 && salario <= 2826.65  ){
    console.log(`Seu IRPF é de ${por2}%, sendo R$ ${IRPF2}`);
    
}
if (salario <= 3751.03 && salario > 2826.65){
    console.log(`Seu IRPF é de ${por3}%, sendo R$ ${IRPF3}`);
    
}
if (salario <= 4664.68 && salario >3751.03){
    console.log(`Seu IRPF é de ${por4}%, sendo R$ ${IRPF4}`);
    
}

if (salario > 4664.68){
    console.log(`Seu IRPF é de ${por5}%, sendo R$ ${IRPF5}`);
    
}

if (salario <= 1412){
    console.log(`Seu INSS é de ${In1}%, sendo R$ ${INSS1}`);
    
}



//Inss
if (salario <= 2666.68 && salario > 2259.20){
    console.log(`Seu INSS é de ${In2}%, sendo R$ ${INSS2}`);
    
}
if (salario <= 4000.03 && salario > 2666.68){
    console.log(`Seu INSS é de ${In3}%, sendo R$ ${INSS3}`);
    
}
if (salario <= 7786.02 && salario > 4000.03){
    console.log(`Seu INSS é de ${In4}%, sendo R$ ${INSS4}`);
    
}
if (salario > 7786.02){
    console.log(`Seu INSS é de ${In5} reais, sendo R$ ${INSS5}`);
    
}

if (IRPF1 + INSS1) {
    console.log(`Salario final de ${salario - (IRPF1 + INSS1)}`);
    
}
if (IRPF2 + INSS2) {
    console.log(`Salario final de ${salario - (IRPF2 + INSS2)}`);
    
}
if (IRPF3 + INSS3) {
    console.log(`Salario final de ${salario - (IRPF3 + INSS3)}`);
    
}
if (IRPF4 + INSS4) {
    console.log(`Salario final de ${salario - (IRPF4 + INSS4)}`);
    
}
if (IRPF5 + INSS5) {
    console.log(`Salario final de ${salario - (IRPF5 + INSS5)}`);
    
}