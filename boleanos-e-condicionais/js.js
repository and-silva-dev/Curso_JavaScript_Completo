// if
/**
 * 

var possuiGraduacao = false;
var possuiDoutorado = false;
if(possuiGraduacao ){
  console.log("É verdadeiro");
}else{
  console.log("É falso");
}

var entrada = prompt("Por favor digite false ou true");

console.log("O valor da entrada foi " + entrada)
 */
//switch
console.log("testing");
var corFavorita = "Amarelo";
switch(corFavorita){
  case 'Amarelo':
    console.log("Atenção! Não atravesse ainda");
    break;
  case 'vermelho':
    console.log("Livre para os pedestres , parada para o veículo");
    break;
  case 'verde':
    console.log("Pedestres esperam e veículos avançam");
    break;
default:
  console.log("Não é uma cor ");
}