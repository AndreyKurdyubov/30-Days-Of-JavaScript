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