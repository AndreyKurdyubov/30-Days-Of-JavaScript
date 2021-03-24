// Exercises: Level 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

const text1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

let pattern = /\d+/g;
let matches = text1.match(pattern);
console.log('matches :>> ', matches);

const earn = matches.reduce((a, b) => Number(a) + Number(b), 0);
console.log('earn :>> ', earn);

const text2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';

pattern = new RegExp('-?\\d+', 'g'); // /-?\d+/g; 
matches = text2.match(pattern);
console.log('matches :>> ', matches);

const coords = matches.map(a => Number(a)).sort((a, b) => b - a);
console.log('coords :>> ', coords);
console.log('farthest :>> ', coords[0] - coords[coords.length - 1]);

// Write a pattern which identify if a string is a valid JavaScript variable

function is_valid_variable(variable) {
   const pattern = /^[a-zA-Z\_\$][\da-zA-Z\_\$]*$/
   variable.match(pattern) ? console.log('True') : console.log('False');
}

is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True
is_valid_variable('$firstname') // True
is_valid_variable('_firstname') // True
is_valid_variable('first_name') // True
is_valid_variable('first$name') // True
is_valid_variable('firstn7am&e') // False

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function tenMostFrequentWords(text) {
   const pattern = /[a-zA-Z]+/g;
   const matches = text.match(pattern);
   const wordCounts = {};

   for (const word of matches) {
      if (wordCounts.hasOwnProperty(word)) wordCounts[word] += 1
      else wordCounts[word] = 1
   }

   const arrWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
   // console.log('arrWords :>> ', arrWords);
   return arrWords.map(pair => ({[pair[0]]: pair[1]}));
}

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))


// const obj = {'a': 1, 'b':2, 'c':3};

// // const arr = Object.entries(obj)
// //                   .map((pair) => {
// //                      const newObj = {};
// //                      newObj[pair[0]] = pair[1];
// //                      return newObj;
// //                   });
// // Carlos Marchena, [22.03.21 23:48]
// const newObject = {};
// const arr = Object.entries(obj).map(pair => ({[pair[0]]: pair[1]}));
// console.log('obj :>> ', obj);
// console.log('arr :>> ', arr);