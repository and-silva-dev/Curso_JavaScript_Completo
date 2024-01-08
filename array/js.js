console.log("testin");
var videoGames = ['Xbox one', 'Xbox 360', 'PS4' , 'PS5']

for (var i = 0; i < videoGames.length; i++){
console.log(videoGames[i]);

}
console.log("----------------------------------------------");
for ( var numero = 1; numero <10 ; numero++){
  console.log(numero);
}

console.log("----------------------------------------------")

var num = 0;
while(num < 9){
  console.log(num+=1);
  num++;
}

console.log("----------------------------------------------")
console.log("----------------------------------------------")
var frutas = ['banana','abacate', 'manga', 'tangerina'];
frutas.forEach(function(item){
  console.log(item)
});
var ultimaFruta;
frutas.forEach(function(item){
  if (item === 'tangerina'){
ultimaFruta = item;
  }
})
console.log("----------------------------------------------")
console.log(ultimaFruta);