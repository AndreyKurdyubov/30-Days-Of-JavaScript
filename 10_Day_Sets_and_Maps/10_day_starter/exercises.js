import { countries as cntr} from './data/countries_data.js'

console.log('countries :>> ', cntr[0]);

// Exercises:Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

/* create an empty set
Create a set containing 0 to 10 using loop
Remove an element from a set
Clear a set
Create a set of 5 string elements from array
Create a map of countries and number of characters of a country */

const mySet = new Set();
console.log('mySet :>> ', mySet);

for (let i = 0; i <= 10; i++) {
   mySet.add(i);
}
console.log('mySet :>> ', mySet);

mySet.delete(5);
console.log('mySet :>> ', mySet);

mySet.clear();
console.log('mySet :>> ', mySet);

const strings = ['My', 'name', 'is', 'Andrey', 'Kurdyubov'];
const greet = strings.join(' ');
console.log('greet :>> ', greet);

const setFromArr = new Set(strings);
console.log('setFromArr :>> ', setFromArr);

/* Exercises:Level 2
Find a union b
Find a intersection b
Find a with b */

console.log('a, b :>> ', a, b);
const un = new Set([...a, ...b]);
console.log('un :>> ', un);

const inters = new Set(a.filter((el) => b.includes(el)));
console.log('inters :>> ', inters);

const differenc = new Set(a.filter((el) => !b.includes(el)));
console.log('differenc :>> ', differenc);

/* Exercises:Level 3
How many languages are there in the countries object file.

*** Use the countries data to find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[ {'English':91}, {'French':45}, {'Arabic':25} ] */

console.log('type of cntr :>> ', typeof cntr);
// console.log('cntr[0] :>> ', cntr);
console.log('cntr.length :>> ', cntr.length);

const languages = new Set();
cntr.forEach((el) => languages.add(...el.languages));
// console.log('languages :>> ', languages);

function mostSpokenLanguages(country, number) {
   const mostSpoken = {};
   cntr.forEach(function(el) {
      for (const lang of el.languages) {
         if (mostSpoken.hasOwnProperty(lang)) mostSpoken[lang] += 1
         else mostSpoken[lang] = 1;
      }
   })
   const arrOfLang = [];
   for (const lang in mostSpoken) {
      arrOfLang.push(new Object([lang, mostSpoken[lang]]))
   }
   return new Map(arrOfLang.sort((a, b) => b[1] - a[1]).slice(0, number));
}

console.log('mostSpokenLanguages(cntr, 10):>> ', mostSpokenLanguages(cntr, 10));
