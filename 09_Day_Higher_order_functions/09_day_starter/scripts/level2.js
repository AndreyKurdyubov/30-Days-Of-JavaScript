const products = [
   { product: 'banana', price: 3 },
   { product: 'mango', price: 6 },
   { product: 'potato', price: ' ' },
   { product: 'avocado', price: 8 },
   { product: 'coffee', price: 10 },
   { product: 'tea', price: '' },
 ];

console.log('products :>> ', products);

// 1. find total price by chaining array iterators
let totalPrice;
totalPrice = products.filter((el) => (typeof el.price === 'number'))
                      .map((obj) => obj.price)
                      .reduce((acc, cur) => acc + cur, 0);
                  
console.log('totalPrice :>> ', totalPrice);

// 2. find sum of prices only by use of callback
function sumPrice(obj) {
   if (typeof obj.price === 'number') {
      return obj.price
   } else return 0
}

totalPrice = products.reduce((acc, cur) => acc + sumPrice(cur), 0);
console.log('totalPrice only by reduce:>> ', totalPrice);

// 3. categorize countries
import { countries } from '../data/countries_data.js'
console.log('counries :>> ', countries[0]);

function categorizeCountries(pattern) {
   let selectedCountries = countries.filter((el) => el.name.includes(pattern));
   let countriesName = selectedCountries.map(el => el.name);
   return countriesName
}

console.log('categorizeCountries(\'land\') :>> ', categorizeCountries('land'));
console.log('categorizeCountries(\'ia\') :>> ', categorizeCountries('ia'));

// 4. first letter
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function firstLetter(lett) {
   let filterOut = countries.filter(el => el.name.toLowerCase().startsWith(lett))
   return filterOut.length
}

let letObj = [];
[...alphabet].forEach(lett=> letObj.push({letter: lett.toUpperCase(), number: firstLetter(lett)}));
console.log('letObj :>> ', letObj);

// 5-6. first and last ten countries
function getFirstTenCountries() {
   let tenNames = [];
   countries.slice(0, 10).forEach(el => tenNames.push(el.name));
   return tenNames
}

function getLastTenCountries() {
   let tenNames = [];
   countries.slice(-10).forEach(el => tenNames.push(el.name));
   return tenNames
}

console.log('getFirstTenCountries() :>> ', getFirstTenCountries());
console.log('getLastTenCountries() :>> ', getLastTenCountries());

// 7. find letter used many times as initial
let sortedLetObj = [...letObj];
sortedLetObj.sort(function (a, b) {
   if (a.number < b.number) return 1
   if (a.number > b.number) return -1
   return 0});

console.log('sortedLetObj :>> ', sortedLetObj);
console.log('sortedLetObj[0] :>> ', sortedLetObj[0]);

console.log('alphabet :>> ', alphabet);
console.log('[...alphabet] :>> ', [...alphabet]);