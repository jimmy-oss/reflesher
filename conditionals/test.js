// Exercise
// A certain institution is giving out full scholarship
// to applicants who meet the following requirement

// 1. If your total final examination is more than
// 80%. Print a message you qualified for full scholarship
// otherwise print you got a partial scholarship

let fullScholarship = 80;
let partialScholarship = 40;

let myResult = 80;

if (myResult >= fullScholarship) {
  console.log("I have qualified for a full scholarship")

} else if (myResult >= partialScholarship) {
  console.log("I have qualified for a partial scholarship")
} else {
  console.log("You are disqualified")
}