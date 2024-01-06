//Operadores
var idade = 28;
var gols = 1000; // inteiro
var pi = 3.14; // decimal
var exp = 2e4; //  exponencial
var soma = 100 +50; //150
var expoente = 2 ** 4 // 16
var modulo = 14%5; // 4
var soma
console.log(exp);

//Operadores aritméticos (Strings) 


var soma2 = '100' + 50; // 10050 Nessa situação concatena-se a string com o numero inteiro
var subtracao = '100' - 50; // Nesse caso , consegue-se fazer a subtração por conta da coerção de tipos onde o JavaScript força os tipos a interagirem . Um tipo String de numero com um tipo inteiro .
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number) Aqui não foi possível a coerção porque na String contém texto junto com número
console.log(subtracao)


// Operadores 2

var idade = '28';
console.log(idade);
var idade1 = +'28'
console.log(idade1);

var expressao1 = 'Teste'/2;
var expressao2 = 'Teste' - 2;
console.log(expressao1 , expressao2);

var soma = +'200' + 50;
console.log(soma);

var x = 5;
x++;
console.log(x);

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade ; //'80kg'
var pesoPorDois = peso / 2; //  NaN (Not a number)