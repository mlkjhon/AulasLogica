//Variaveis compostas / vetores / arrays
const prompt = require('prompt-sync')();
//variavel simples, cabe apenas 1 dado por vez
let fruta = 'maça';
fruta = 'banana';

//variavel composta, cabe mais que 1 dado
let frutas = ['maça' , 'banana' , 'abacaxi' , 'uva']
console.log(frutas);


console.log(frutas[1]);

//Declarando uma lista vazia
let lista_vazia = []

//declaração de uma lista de strings
let nomes3 = ['ana', 'joao', 'maria']

//declaração de uma lista mista
let lista_mista = [4, 'feijão', true, 7.55]

//declaração de uma lista com outras listas
let lista_arrays = [['coca-cola', 'hot-dog'],[5.00, 10.00]]
console.log(lista_arrays[0][0]);

//trocando itens da lista
frutas[3] ='melancia'
console.log(frutas);

//inserindo um novo item a lista
frutas = [...frutas, 'laranja'] //metodo spread (melhor / mais utilizado)
console.log(frutas);

//frutas.push('laranja'); //metodo push
//console.log(frutas);

//ou

//frutas[4] = 'laranja' // metodo antigo (nao recomendavel)
//console.log(frutas);

//inserindo um novo item em posição especifica
frutas.splice(2, 0, 'morango');
//      2 - posição
//      0 - quantidades de itens a serem removidos
console.log(frutas);

//excluindo itens da lista
frutas.splice(3, 1)  //excluindo item pelo indice
console.log(frutas);
//frutas.shift      //excluindo primeiro item da lista
//frutas.pop        //excluindo ultimo item da lista

frutas = ['maça','banana', 'morango', 'abacaxi', 'melancia','laranja', 'uva']
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);
console.log(frutas.sort());
console.log(frutas);
frutas.reverse()
console.log(frutas);