
// Exercises: Level 1
// Create a closure which has one inner function
// Exercises: Level 2
// Create a closure which has three inner functions

function Hello() {
   let nam = 'Andrey';
   function greet() {
      return `Hello, ${nam}!`
   }
   return greet
}

alert(Hello()());

function User(nam, surn, age) {
   this.name = function() {
      return `Name is ${nam}`
   }
   this.surname = function() {
      return `Lastname is ${surn}`
   }
   this.age = function() {
      return `Age is ${age}`
   }
}

let me = new User('Andrey', 'Kurd', 29);
console.log(me.name(), me.surname(), me.age());

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(firstname, lastname, incomes, expenses) {
   this.firstname = firstname;
   this.lastname = lastname;
   this.incomes = incomes;
   this.expenses = expenses;

   this.totalIncome = function() {
      let income = [...this.incomes];
      let totalInc= 0;
      income.forEach(([inc, _]) => {totalInc += inc})
      return totalInc
   } 

   this.totalExpense = function() {
      let expense = [...this.expenses]
      let totalExp = 0;
      expense.forEach(([exp, _]) => {totalExp += exp})
      return totalExp
   } 

   this.accountInfo = function() {
      return [`${this.firstname} ${this.lastname}`, 
             [...this.incomes],  [...this.expenses], 
             `totalIncome: ${this.totalIncome()}`,
             `totalExpense: ${this.totalExpense()}`,
             `Balance: ${this.accountBalance()}`].join('\n')
   }

   this.addIncome = function(newIncome, desc) {
      this.incomes.add([newIncome, desc]);
   }
   
   this.addExpense = function(newExpense, desc) {
      this.expenses.add([newExpense, desc]);
   }

   this.accountBalance =function() {
      return this.totalIncome() - this.totalExpense()
   }
}

let incomes = new Set();
incomes.add([12, 'sale']);
incomes.add([10, 'gift']);
incomes.add([50, 'salary']);

let expenses = new Set();
expenses.add([5, 'food']);
expenses.add([2, 'fuel']);
expenses.add([10, 'duty']);
let my = new personAccount('Andrey', 'Kurdyubov', incomes, expenses);

console.log('my.totalExpense() :>> ', my.totalExpense());
console.log(`my.accountInfo() :>>\n${my.accountInfo()}`);

my.addExpense(20, 'trip');
my.addIncome(100, 'work');

console.log('my.totalIncome() :>> ', my.totalIncome());
console.log(`my.accountInfo() :>>\n${my.accountInfo()}`);