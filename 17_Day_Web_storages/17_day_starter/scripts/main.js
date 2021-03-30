// Exercises
// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const firstName = 'Andrey';
const lastName = 'Kurdyubov';
const age = 29;
const country = 'Russia';
const city = 'Saint-Petersburg';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age.toString());
localStorage.setItem('country', country);
localStorage.setItem('city', city);

class Student {
   constructor(firstName, lastName, age, skills, country, enrolled) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
      this._skiils = skills;
      this._country = country;
      this._enrolled = enrolled;
   }

   personInfo() {
      const obj = {
         firstName: this.getFirstName,
         lastName: this.getLastName,
         age: this.getAge,
         skills: this.getSkills,
         country: this.getCountry,
         enrolled: this.getEnrolled
      }
      return  obj;
   }

   get getFirstName() {
      return this._firstName;
   }
   get getLastName() {
      return this._lastName;
   }
   get getAge() {
      return this._age;
   }
   get getSkills() {
      return this._skiils;
   }
   get getCountry() {
      return this._country;
   }
   get getEnrolled() {
      return this._enrolled;
   }
}

const student1 = new Student('Andrey', 
                             'Kurdyubov',
                             29,
                             ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'],
                             'Russia',
                             true);

localStorage.setItem('student1', JSON.stringify(student1.personInfo()));

// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(firstName, lastName, incomes = new Set(), expenses = new Set()) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.incomes = incomes;
   this.expenses = expenses;
   
   this.totalIncome = function() {
      let summ = 0;
      [...this.incomes].forEach(x => {summ += x[0]});
      return summ; 
   }
   this.totalExpense = function() {
      let summ = 0;
      [...this.expenses].forEach(x => {summ += x[0]});
      return summ; 
   }
   this.addIncome = function(newIncome, descr) {
      this.incomes.add([newIncome, descr]);
   }
   this.addExpense = function(newExpense, descr) {
      this.expenses.add([newExpense, descr]);
   }
   this.accountBalance = function() {
      return this.totalIncome() - this.totalExpense();
   }
   this.accountInfo = function() {
      console.log(`${this.firstName} ${this.lastName}`);
      [...this.incomes].forEach(x => {
         console.log(`income: ${x[1]} ${x[0]}`);
      });
      [...this.expenses].forEach(x => {
         console.log(`expence: ${x[1]} ${x[0]}`);
      });
      console.log(`total income: ${this.totalIncome()}`);
      console.log(`total expense: ${this.totalExpense()}`);
      console.log(`balance: ${this.accountBalance()}`);
   }
}

const me = new personAccount('A', 'B');
console.log('me.expenses :>> ', me.expenses);
me.addExpense(10, 'lalala');
me.addExpense(20, 'blala');
me.addIncome(25, 'y55');
me.addIncome(27, 'y77');
console.log('me.totalExpense() :>> ', me.totalExpense());
console.log('me.totalIncome() :>> ', me.totalIncome());
console.log('me.accountBalance() :>> ', me.accountBalance());
me.accountInfo();

localStorage.setItem('me', JSON.stringify(me));
console.log('JSON.stringify(me, undefined, 2) :>> ', JSON.stringify(me, undefined, 2));
// Sets do not get stingified
console.log('me :>> ', me);

// const arr = [...me.econsole.log('me.accountBalance() :>> ', me.accountBalance());xpenses];
// console.log('arr :>> ', arr);
// console.log('arr.reduce((a, b) => a[0] + b[0], 0) :>> ', arr.reduce((a, b) => a[0] + b[0], 0));

// const arr2 = [[1, '3g'], [2, '3l'], [4, '4g']];
// console.log('arr2.reduce((p, c) => p[0] + c[0], 0) :>> ', arr2.reduce((p, c) => p[0] + c[0], 0));

// const arr3 = [1, 2, 4];
// console.log('arr3.reduce((p, c) => p + c, 0) :>> ', arr3.reduce((p, c) => p + c, 0));

const mySet = new Set([1, '3', 'sdf', false])
console.log('mySet :>> ', mySet);
console.log('JSON.stringify(mySet, undefined, 4) :>> ', JSON.stringify(mySet, undefined, 4));
console.log('[...mySet.keys()] :>> ', [...mySet.keys()]);
console.log('[...mySet.values()] :>> ', [...mySet.values()]);