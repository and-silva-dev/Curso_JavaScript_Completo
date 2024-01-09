//window.alert("Isso aí");

const h1Selecionado = document.querySelector('h1');

const altura = h1Selecionado.offsetHeight;
const comprimento= h1Selecionado.offsetWidth

function callback1(){
  console.log('Clicou em ' + h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click',callback1
 )

 console.log('-----------------------------------------------------------------------------' );

 //Retorne o url da página atual utilizando o objeto window 
const url = window.location.href;
console.log(url)

 //Seleciona o primeiro elemento da página que possua a clase ativo;
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);
 //retorne a linguaguem do navegador
 const linguagem = window.navigator.language;
console.log(linguagem);
 //retorne a largura da janela
 const largura = window.innerWidth;
 console.log(largura);

