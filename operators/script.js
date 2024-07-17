//!  Arithmetic Operators
// Addition operator (+) adds two numbers together
const applesOnHand = 5;
const applesReceived = 10;
const totalApples = applesOnHand + applesReceived;
 
// Subtraction operator (-) subtracts two numbers together
const totalTickets = 100;
const ticketSold = 45;
const ticketLeft = totalTickets - ticketSold;

// multiplication operator (*) multiplies two numbers together
const bookCosts = 20;
const bookBought = 15;
const totalBookPrice = bookCosts * bookBought;

// Division operator (/) divides two numbers together
const totalPages = 200;
const pagesRead = 40;
const daysToFinish = totalPages / pagesRead;

// Remainder or modulo operator (%) divides one number by 
// another and returns the remainder
const totalPeople = 10;
const totalPizza = 3;
const singleSlice = 1;
const peoplePerSlice = totalPeople % totalPizza;

// Increment operator (++) increases a number by 1
let currentWebsiteViews = 1000;
currentWebsiteViews++
// Its the same as currentWebsiteViews +=1;
// You could increase the currentWebsiteViews +=10;
// And the result is 1010;

// Decrement operator (--) decreases a number by 1
let currentSalesSold = 1000;
currentSalesSold--;
// Its the same as currentSalesSold -=1;
// You could decrease the currentSalesSold -=10;
// And the result is 990;

//! Assignment Operators
// Assignment Operator (=)
// The assignment operator assigns a value to a variable
// Case study: You purchased 10 apples from the grocery
// store How can you use js to track how many apples you
// have now
let myTotalApples = 10;
// Assignment Operator (+=)
// This operator adds the value on the right to the 
// variable on the left and then assigns the result
// to the variable on the left
// As the mayor of a small town, the current population
// of your town is 100.During the year an additional 50 
// people moved into your town. How can you use js to
// to calculate the total population now
let myTotalPopulation = 100;
myTotalPopulation += 50;
// If you use const u will get an error because when you
// declare a variable to const it cannot be changed thats
// because its immutable

// Assignment Operator (-=)
// This operator subtracts the value on the right to the 
// variable on the left and then assigns the result
// to the variable on the left
// Case study: You have $200 in your wallet.After buying a
// book for $30,how can you calculate how much money you now
// have in your wallet
let myCurrentWallet = 200;
let afterBuying = 30;
let myTotalWallet = myCurrentWallet - afterBuying;
console.log(myTotalWallet)
// let myCurrentWallet = 200;
// myCurrentWallet -=30;
// console.log(myCurrentWallet);

// Assignment Operator (*=)
// You have 12 cookies and decide to break each one into 3
// pieces to share with your friends.How would you calculate
// the total number of cookie pieces you have now.

let myTotalCookies = 12;
let shareMyCookies = 3;
let myPieces = myTotalCookies * shareMyCookies;
console.log(myPieces);
// let myTotalCookies = 12;
// myTotalCookies *=3;
// total should be 36;

// Assignment Operator (/=)
// You have a 200 page book that you want to study
// over the next 5 days,planning to read the same 
// number of pages each day.How would you calculate
// how many pages you need to read each day

let myPageBook = 200;
myPageBook /= 5;

// Remainder Assignment Operator (%=)
// You have 25 concert tickets that you want to
// distribute equally among 4 friends.How would
// you calculate how many tickets each person

let myConcertTickets = 25;
myConcertTickets %=4;


// Exponential Operator (**=)
// In a math problem,you are given a base number of 2
// and asked to raise this number to the power of 4
// How would you calculate the result

let myMathProblem = 2;
myMathProblem **= 4;

//! Comparison Operators
// Used to compare values
// Equal to (==)
// The equal to '==' operator checks if the values of 
// two operands are equal or not regardless of their
// type
let myNumber = 21;// Number
let mySecondNumber = '21';// String
let myResult = myNumber == mySecondNumber;
console.log(myResult);
// So in double equal to does not consider data type
// that's why the result is true while triple equal to
// considers data type it checks if my string is equal
// to a number and that's where you get a false data type