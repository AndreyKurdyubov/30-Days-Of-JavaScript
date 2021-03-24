console.log(countries)
alert('Open the console and check if the countries has been loaded')

console.group('level1');
console.table(countries);
console.table(countries[15]);
console.groupEnd('level1')

console.group('level2');
console.assert(10 > 2 * 10, 'math');
console.warn('do something');
console.error('stop crying');
console.groupEnd('level2');

console.group('level3');
let arr = [];
console.time('for');
for (let i = 0; i < 1000; i++) {
   arr.push(i);
}
console.timeEnd('for');

let arr2 = [];
console.time('for of');
for (let i of arr) {
   arr2.push(i);
}
console.timeEnd('for of');

let arr3 = [];
console.time('while');
let i = 0;
while (i < 1000) {
   arr3.push(i);
   i++;
}
console.timeEnd('while');

let arr4 = [];
console.time('forEach');
arr.forEach(x => arr4.push(x));
console.timeEnd('forEach');

console.groupEnd('level3');
