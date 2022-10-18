
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ];

 let upperDrinks = getraenke.map(function(g) {
    return g.toUpperCase();
 })
 console.log(upperDrinks);


//  BONUS: ArrowFunction
console.log("BONUS: ArrowFunction");
 let upperDrinks2 = getraenke.map((g) => {
   return g.toUpperCase();
 });
 console.log(upperDrinks2);



