/*
//scope.js
a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
   console.log(a, b)
   if (true) {
      console.log(a, b)
   }
}
console.log(a, b) // accessible*/

//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
   console.log(a, b) // JavaScript 10, accessible
   let c = 30
   if (true) {
      // we can access from the function and outside the function but 
      // variables declared inside the if will not be accessed outside the if block
      let a = 'Python'
      let b = 20
      let d = 40
      console.log(a, b, c) // Python 20 30
   }
   // we can not access c because c's scope is only the if block
   console.log(a, b) // JavaScript 10
   a = 'a is redefined inside func';
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible