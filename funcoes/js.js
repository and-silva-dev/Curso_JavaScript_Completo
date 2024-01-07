function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado(10));

function pi(){
  return 3.14;
}
var total = pi()*5;
console.log(pi() * 5);
console.log(total);

function calculadoraImc(peso,altura){
const imc = peso / (altura **2 ); // para calcular expoente coloca-se ** para representar o expoente
return imc;
}
console.log( calculadoraImc(75,1.68));

function mostraConsole(){
  console.log('clicou');
}
addEventListener('click', mostraConsole);

function calculadoraImc2(peso,altura) { 
imc = peso / (altura **2);
console.log(imc);
}
calculadoraImc2(85,1.68); 

function terceiraIdade(idade){
  console.log(typeof idade);
  if (typeof idade !== 'number'){
    return 'Informe a sua idade';
  }else if (idade >= 60){
    return true;
} else {
  return false;
}
}
console.log(terceiraIdade('50'));


function faltarVisitar(paisesVisitados){
var totalPaises = 193;
return `Falta visitar ${totalPaises - paisesVisitados} paises`;


}
