const prompt = require('prompt-sync')();

//atividade 1
let numero = Number (prompt('Digite um numero de 1 a 7'));

if (numero == 1){
    console.log('Domingo: ');
    
}
if (numero == 2){
    console.log('Segunda: ');
    
}if (numero == 3){
    console.log('Terça: ');
    
}if (numero == 4){
    console.log('Quarta: ');
    
}if (numero == 5){
    console.log('Quinta: ');
    
}if (numero == 6){
    console.log('Sexta: ');
    
}if (numero == 7){
    console.log('Sabado: ');
    
}

//atividade2
let ano_de_nascimento = Number(prompt('Digite seu ano de Nascimento'));
let ano_atual = 2025
let idade = ano_atual - ano_de_nascimento

console.log(`Sua idade é ${idade} anos`);

if (idade <10) {
    console.log('Voce é uma Criança');
    
}
if (idade >= 11 && idade <= 17) {
    console.log('Voce é um Adolescente');
    
}
if (idade >=18 && idade <= 59) {
    console.log('Voce é um Adulto');
    
}
if (idade > 60) {
    console.log('Voce é um Idoso');
    
}

//atividade3

let mes = Number (prompt('Digite um numero de 1 a 12: '));

if (mes == 1){
    console.log('Janeiro');
    
}
if (mes == 2){
    console.log('Fevereiro');
    
}if (mes == 3){
    console.log('Março');
    
}if (mes == 4){
    console.log('Abril');
    
}if (mes == 5){
    console.log('Maio');
    
}if (mes == 6){
    console.log('Jun');
    
}if (mes == 7){
    console.log('Julho');
    
}
if (mes == 8){
    console.log('Agosto');
    
}
if (mes == 9){
    console.log('Setembro');
    
}

if (mes == 10){
    console.log('Outubro');
    
}
if (mes == 11){
    console.log('Novembro');
    
}
if (mes == 12){
    console.log('Dezembro');
    
}
//atividade4
let mes2 =  (prompt('Digite um mes:  '));

if (mes2 == 'Janeiro'){
    console.log('Janeiro tem 31 dias');
    
}
if (mes2 == 'Fevereiro'){
    console.log('Fevereiro tem 28 dias');
    
}if (mes2 == 'março'){
    console.log('Março tem 31 dias');
    
}if (mes2 == 'Abril'){
    console.log('Abril tem 30 dias');
    
}if (mes2 == 'Maio'){
    console.log('Maio tem 31 dias');
    
}if (mes2 == 'Junho'){
    console.log('Junho tem 30 dias');
    
}if (mes2 == 'Julho'){
    console.log('Julho tem 31 dias');
    
}
if (mes2 == 'Agosto'){
    console.log('Agosto tem 31 dias');
    
}
if (mes2 == 'Setembro'){
    console.log('Setembro tem 30 dias');
    
}

if (mes2 == 'Outubro'){
    console.log('Outubro tem 31 dias');
    
}
if (mes2 == 'Novebro'){
    console.log('Novembro tem 30 dias');
    
}
if (mes2 == 'Dezembro'){
    console.log('Dezembro tem 31 dias');
    
}
//atividade5
var notas1 = Number(prompt('Digite sua primeira nota'));
var notas2 = Number(prompt('Digite sua segunda primeira nota'));

var nota_final = (notas1 + notas2)/2

if (nota_final > 7){
    console.log('Aprovado');
    
}
if (nota_final >=5 && nota_final <=7) {
    console.log('Recuperação');
    
}
if (nota_final < 5) {
    console.log('Reprovado');
    
}
//atividade6
let salario = Number(prompt('Diga seu salario'));


if(salario <= 2000){
    let reajuste12 = (salario / 100) * 12
    console.log(`Seu reajuste é de ${reajuste12 + salario}`);
    
} else if(salario <= 4000){
    let reajuste10 = (salario / 100) * 10
    console.log(`Seu reajuste é de ${reajuste10 + salario}`);
   
} else if(salario > 4000){
    let reajuste8 = (salario / 100) * 8
    console.log(`Seu reajuste é de ${reajuste8 + salario}`);
    
}