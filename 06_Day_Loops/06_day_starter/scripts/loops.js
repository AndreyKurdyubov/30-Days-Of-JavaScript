console.log('Loops theory');

const numbers = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < numbers.length; i++) {
   newArr.push(i * (i + 1));
}

console.log('numbers :>> ', numbers);
console.log('newArr :>> ', newArr);

let i = 0;
do {
   console.log('i * i :>> ', i * i);
   i++;
} while (i < 8)

while (i < 16) {
   console.log('1 / i :>> ', (1 / i).toPrecision(3));
   i++;
}

// for of loop
for (const num of numbers) {
   console.log('num :>> ', num);
}

const countries0 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const newCo = [];
for (const country of countries0) {
   newCo.push(country.toUpperCase());
}
console.log('newCo :>> ', newCo);
