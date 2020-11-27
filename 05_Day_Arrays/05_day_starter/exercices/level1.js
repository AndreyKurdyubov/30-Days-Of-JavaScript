const empty = Array();
console.log('empty :>> ', empty);

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('numbers :>> ', numbers);
console.log('numbers.length :>> ', numbers.length);

let last = numbers.length;
let middle = Math.ceil(numbers.length / 2);
console.log('middle :>> ', middle);
console.log('numbers[0], nembers[middle-1], numbers[leng - 1] :>> ', numbers[0], numbers[middle - 1], numbers[last - 1]);

const mixedDataTypes = [
   23,
   'age',
   true,
   null,
   ['c', 'h', 'a', 'r'],
   3.3,
];
console.log('mixedDataTypes.length :>> ', mixedDataTypes.length);

const itCompanies = [
   'Facebook',
   'Google',
   'Microsoft',
   'Apple',
   'IBM',
   'Oracle',
   'Amazon',
];
console.log('itCompanies :>> ', itCompanies);
console.log('itCompanies.length :>> ', itCompanies.length);

last = itCompanies.length - 1;
middle = Math.ceil(last / 2);
console.log('itCompanies[0], itCompanies[miidle], itCompanies[last] :>> ',
   itCompanies[0],
   itCompanies[middle],
   itCompanies[last]);

for (company of itCompanies) {
   console.log('company :>> ', company);
}

for (let i = 0; i < last; i++) {
   itCompanies[i] = itCompanies[i].toUpperCase()
   console.log(`itCompanies[${i}] :>> `, itCompanies[i]);
}

for (let i = 0; i < last; i++) {
   if (i == 4) continue;
   itCompanies[i] = itCompanies[i][0].concat(itCompanies[i].slice(1).toLowerCase())
   console.log(`itCompanies[${i}] :>> `, itCompanies[i]);
}
let sentence = itCompanies.slice(0, last).join(', ').concat(
   ' and ',
   itCompanies[last],
   ' are big IT companies.',
)
console.log('sentence :>> ', sentence);

company = 'Apple';
let index = itCompanies.indexOf(company);

index != -1
   ? console.log(`${company}'s index is ${index}`)
   : console.log(`${company} is not found`);

const ooCompanies = Array();
let i = 0;
for (company of itCompanies) {
   if (company.toLowerCase().lastIndexOf('o') > company.toLowerCase().indexOf('o')) {
      ooCompanies[i++] = company;
   }
}
console.log('ooCompanies :>> ', ooCompanies);

const sortedArr = itCompanies.sort();
console.log('sortedArr :>> ', sortedArr);
console.log('sortedArr.reverse() :>> ', sortedArr.reverse());
console.log('itCompanies :>> ', itCompanies);
console.log('itCompanies.slice(3) :>> ', itCompanies.slice(3));
console.log('itCompanies.slice(last-2) :>> ', itCompanies.slice(last - 2));

let leng = itCompanies.length;
leng % 2 === 0
   ? console.log(itCompanies.slice(leng / 2 - 1, leng / 2 + 1))
   : console.log(itCompanies[(leng - 1) / 2]);

console.log('itCompanies.shift() :>> ', itCompanies.shift());
console.log('itCompanies :>> ', itCompanies);

leng = itCompanies.length;
leng % 2 === 0
   ? console.log(itCompanies.slice(leng / 2 - 1, leng / 2 + 1))
   : console.log(itCompanies[(leng - 1) / 2]);

leng % 2 === 0
   ? console.log('itCompanies.splice() :>> ', itCompanies.splice(leng / 2 - 1, 2))
   : console.log('itCompanies.splice() :>> ', itCompanies.splice((leng - 1) / 2, 1));

console.log('itCompanies :>> ', itCompanies);
console.log('itCompanies.pop() :>> ', itCompanies.pop());
console.log('itCompanies.splice(0, itCompanies.length) :>> ', itCompanies.splice(0, itCompanies.length));
console.log('itCompanies :>> ', itCompanies);