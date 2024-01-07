console.log("testin");
//Crie uma função para veriricar se um valor é verdadeiro
function verificar(valor){
 return !!valor;
}
console.log(verificar());
//Crie uma função que retorne o perímetro de um quadrado lembrando que perímetro é a soma dos quatro lados de um quadrado.
function perimetro(valor){
lado = valor * 4;
return lado;
}
console.log(perimetro(50));

//Crie uma função que verifica se um numero é par
function parImpar(valor){
if (valor % 2 === 0) {
  console.log('Número par');
}else if (valor % 2 === 1) {
  console.log('Número impar');
}else{
  console.log('Número indefinido');
}
}
console.log(parImpar());


//Crie uma função que retorne seu nome completo
function nomeCompleto(nome,sobrenome){
var completo = nome + " " + sobrenome;
return completo ;
}

console.log(nomeCompleto('Anderson','Silva'));

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function dado(valor){
  return typeof valor;
}
console.log(dado());
//addEventListener é uma função nativa do Javascript o primeiro parametro é o evento que ocorre e o segundo é o callback . utilize essa função para mostrar no console o seu nome completo quando o evento scroll ocorrer

function mostrar(){
  console.log('Anderson L.');
}

(addEventListener("click", mostrar));

