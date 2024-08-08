// Conditional Statement
// let age = 18;
// if (20 > 18){
// console.log("Your old enough to watch a movie!")
// } else{
// console.log("You are not old enough to watch a movie")
// }

let minAge = 18;
let maxAge = 30;

// 1. if your less than 18 years your not allowed
// to watch a movie
// 2. if your age is more than 30 years please go home and rest
// 3. if your age doesn't meet the current requirements your disqualified

if (minAge >= 18) {
  console.log("You are old enough to watch a movie");
} else if (maxAge >= 31){
  console.log("You age is more than 30 years please go home and rest");
} else {
  console.log("Your age does not meet the current requirements your disqualified ")
}

// Truthy & Falsy Value

// Falsy
// false
// 0
// ""
// null
// undefined

let age = 0;
if (age) {
  console.log("Yes it is True")
} else {
  console.log("It is false")
}
 