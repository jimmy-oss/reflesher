// Variable Declaration
var myAge = 20;
let myMoney = 100;
const myCity = 'Nairobi';
 
//! Primitive Data Types
// String
let fullName = "John Doe";
 
// Number
let accountBalance = 200;
 
// Boolean
let isMarried = true;

// Null
let pendingTransaction = null;

// Undefined
let country = undefined;

// What does null and undefined means in javascript 
// Both null and undefined represents absence of values
// But they are used in different circumstances
// For example undefined is a value that has been declared
// that has no assigned value and by default it will give
// you undefined
// null is an assignment value that has been assigned to a variable
// that represents no value or no object and it implies an empty
// or a non-existing value so in short they are both empty when a variable
// is declared but they have some differences is some situations.

// Symbol
let uniqueID = Symbol('id');

//! Non-Primitive Data Types
// Object
// It is used to multiple data in a single entity.
let user = {
  firstName: 'John',
  lastName: 'Doe',
   age: 30,
};

// Arrays
// It is used to store multiple data in a single entity.
let transactionAmount = [100, 200, 500, 50];

// Function
let greetUser = () => {
  console.log('Hello World');
};
