countries = [
   'Albania',
   'Bolivia',
   'Canada',
   'Denmark',
   'Ethiopia',
   'Finland',
   'Germany',
   'Hungary',
   'Ireland',
   'Japan',
   'Kenya'
]

let webTechs = [
   'HTML',
   'CSS',
   'JavaScript',
   'React',
   'Redux',
   'Node',
   'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let pat = '#';
for (let i = 1; i <= 7; i++) {
   console.log(pat);
   pat = pat.concat('#');
}

for (let n = 0; n <= 10; n++) {
   console.log(`${n} x ${n} = ${n * n}`);
}

console.log('i i^2 i^3');
for (let i = 0; i <= 10; i++) {
   console.log(i, i * i, i * i * i);
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
function isprime(n) {
   if (n == 2) {
      return true
   } else if (n < 2 || n % 2 === 0) {
      return false
   }

   const sqr = Math.floor(Math.sqrt(n));
   let num = 3;
   while (num <= sqr) {
      if (n % num == 0) {
         return false
      }
      num += 2;
   }
   return true
}


for (let num = 0; num <= 100; num++) {
   if (isprime(num)) {
      console.log('is prime', num);
   }
}

// sum all nums from 0 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
   sum += i;
}
console.log('sum 0:1:100 is', sum);

function rndms(n) {
   const arr = Array();
   for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10))
   }
   return arr
}


function rndms2(n) {
   const arr = Array();
   let count = 0;
   let newnum;
   while (count < n) {
      newnum = Math.floor(Math.random() * 10);
      if (!arr.includes(newnum)) {
         arr.push(newnum);
         console.log('add', newnum);
         count++;
      } else {
         console.log(`${newnum} already exist in arr`);
      }
   }
   return arr
}


function id() {
   const sym = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y', 'z'
   ];
   const leng = sym.length;
   const arr = [];

   for (i = 0; i < 6; i++) {
      arr.push(sym[Math.floor(Math.random() * leng)])
   }
   return arr.join('')
}

let rnd = rndms(5);
console.log('rnd :>> ', rnd);

rnd = rndms2(5);
console.log('rnd :>> ', rnd);

console.log('id() :>> ', id());