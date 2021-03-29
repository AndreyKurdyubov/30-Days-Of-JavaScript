// Exercises
// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

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