"use strict"; //treat the code as new verison

//null vs undefined
//undefined -> when any value is not assigned but variable is declared then it is assigned undefined by the engine automatically.

//null -> when we intentionally keep the value as empty, we declared a variable but we want to keep it null, null itself is a value which is assigned intentionally.

// null - known empty
// undefined - unknown

function printName(name = "Bob") {
  console.log(name);
}

printName(undefined);
printName(null);

// type of null is -> object
// type of undefined is -> undefined
