const prompt = require('prompt-sync')(); 

//Criando nossa primeira varialvel
// Uma variavel serve para armazenar uma informação/valor

//estou falando para o computador: O memoraria crie um espaço com o nome de curso e  receba "=" o valor 'DEsenvolvimento de Sisitema' 
var curso = "Desenvolvimento de Sistemas";

console.log ('curso');

console.log (curso);

console.log ("curso",curso);

//criando e atribuindo valores a uma variavel 
var idade = 16; //inteira //integer

var temperatura = 24.5; //real //float

var nome = 'Jhonatan' //string

console.log('olá ',  nome ,  'voce tem ',  idade, 'anos ', 'voce esta com ',  temperatura,  'graus',  'voce esta cursando ',  curso)

//Declarando uma variavel logica ou boolean/ boleano (true/false)

var podedirigir = true;

var estachovendo = false;

var Escola;

//Exercicio
//NOTA1 valido
//NomeCompleto valido
//Nome Completo invalido
//Média invalido
//console invalido
//_salario valido
//9idade invalido
//Minha_Variavel valido
//var invalido
//valor$ invalido
//nome-completo invalido
//escola_ valido 
//TELEFONE valido
//true invalido

let cidade = 'andradina'

var turma = '2°B'

const ano = 2025

console.log(turma);

turma = '3°B' //reatribuindo o valor de uma variavel

console.log(turma); //ano= 2026 nao podemos reatribuir valor a uma constante

let _nome = 'Jhonatan'

let _idade = 16

let _peso = 67 

console.log (_nome, _idade,'anos', _peso, 'kg');

//mostrando no console quais sao os tipos dos dados
console.log (typeof _nome, typeof _idade, typeof _peso);

//no prompt o computador espera o usuario digitar uma informação
//sempre quando recebemos uma informação de entrada ela vem no tipo de STRING

_nome = prompt ('Qual é o nome?');

_idade = prompt ('Qual é a idade?');

_peso = prompt ('Qual é o peso?');

console.log (typeof _nome, typeof _idade, typeof _peso);

//criem 2 variaveis num1 e num2 e recebam as inforções pelo prompt2

var num1 = prompt ('Digite um numero');

var num2 = prompt ('Digite outro numero');

console.log(num1 + num2);

console.log(typeof num1);

NUM1 = Number(num1);

console.log(typeof num1);

//recebendo uma informação ja convertendo seu tipo de dado
let nr1 = Number(prompt ('Digite um numero'));

let nr2 = Number(prompt ('Digite outro numero'));

console.log(nr1 + nr2);

//convertendo os dados de uma variavel
nr1 = "100.14"; //string

nr1 = Number("100.14"); //convertendo string para number

nr1 = pearseInt("100.14"); //convertendo string para integer

nr1 = pearseFloat("100") //convertendo string para float

nr1 = string("100.14")  //convertendo number para string



_nome = prompt ('Qual é o nome?');  //string

_idade = pearseint(prompt) ('Qual é a idade?');  //string

_peso = pearseFloat(prompt) ('Qual é o peso?');   //string

console.log (typeof _nome, typeof _idade, typeof _peso);

//exercicio 1

var nome_aluno = "Jhonatan";
var altura = '1,66';
var ano_atual = '2025';
var escola = 'Sesi'

//exercicio 2

var nome_professor = 'Douglas';
var materia = 'Senai';
var ano_ingressado = '2025';

//exercicio 3

nome_aluno = prompt ('digite o nome');
escola = prompt('digite a escola');
ano_atual = pearseint(prompt('digite seu ano atual'));
altura = pearsefloat(prompt('digite sua altura'));
console.log(nome_aluno, escola, ano_atual, altura);
