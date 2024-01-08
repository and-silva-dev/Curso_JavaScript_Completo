console.log("testin");
var pessoa = {
nome: "Anderson",
idade: 36,
}
console.log(pessoa.idade);

var quadrado = {
  lados:4,
  area: function(lado){
    return lado*lado;
  }, perimetro: function(lado){
    return lado * this.lados;
}
}

 
console.log(quadrado.area(8));
console.log(quadrado.perimetro(5));

console.log(Math.random());

console.table(pessoa);
console.table(quadrado);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e'
}
 console.log(menu.width); 