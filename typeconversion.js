
//let {score}  = req.body
//when this value comes from the front-end we are not sure whether the score is number or not so in that case type conversion is mandatory even if it is a number server side conversion is neccessary to prevent any error.

let score = "123abc";

console.log(typeof score);

let scoreInNumber = Number(score);

console.log(typeof(scoreInNumber))
console.log(scoreInNumber);

//no matter what the value is when we change it the type will be showed as number but when we print the value it will differ or will be NaN.


