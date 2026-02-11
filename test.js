// learning let const and var
var name = "Manish";
let name2 = "Kartikay";
const address = "bhandup";

if (1) {
  var name = "akhil";
  let name2 = "amar";
  //   address = "kanjur";
}

console.log(name);
console.log(name2);
// name variable is declared again in the if block and it overwrites the previous variable hence we should not use var keyword in js, because it doesn't provide scope block-scope control a variable if defined again changes the state of previously defined variable with the same name event out of the scope.

//but by using let the scope of a variable is limited only till the block if defined inside some condition or loop. this is called block-scope control.

//const is used to declare a constant whose value can't be changed throughout it's life.
