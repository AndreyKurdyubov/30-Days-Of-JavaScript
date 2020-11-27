let numbers = [0, 3.14, 9.81, 37, 98.6, 100];
let fruits = new Array();
fruits = ['banana', 'orange', 'mango', 'lemon'];
const webTechs = Array('HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Mongodb');
const countries = [
   'Afghanistan',
   'Albania',
   'Algeria',
   'Andorra',
   'Angola',
   'Antigua and Barbuda',
   'Argentina',
   'Armenia',
   'Australia',
   'Austria',
   'Azerbaijan',
   'Bahamas',
   'Bahrain',
   'Bangladesh',
   'Barbados',
   'Belarus',
   'Belgium',
   'Belize',
   'Benin',
   'Bhutan',
   'Bolivia',
   'Bosnia and Herzegovina',
   'Botswana',
   'Brazil',
   'Brunei',
   'Bulgaria',
   'Burkina Faso',
   'Burundi',
   'Cambodia',
   'Cameroon',
   'Canada',
   'Cape Verde',
   'Central African Republic',
   'Chad',
   'Chile',
   'China',
   'Colombi',
   'Comoros',
   'Congo (Brazzaville)',
   'Congo',
   'Costa Rica',
   "Cote d'Ivoire",
   'Croatia',
   'Cuba',
   'Cyprus',
   'Czech Republic',
   'Denmark',
   'Djibouti',
   'Dominica',
   'Dominican Republic',
   'East Timor (Timor Timur)',
   'Ecuador',
   'Egypt',
   'El Salvador',
   'Equatorial Guinea',
   'Eritrea',
   'Estonia',
   'Ethiopia',
   'Fiji',
   'Finland',
   'France',
   'Gabon',
   'Gambia, The',
   'Georgia',
   'Germany',
   'Ghana',
   'Greece',
   'Grenada',
   'Guatemala',
   'Guinea',
   'Guinea-Bissau',
   'Guyana',
   'Haiti',
   'Honduras',
   'Hungary',
   'Iceland',
   'India',
   'Indonesia',
   'Iran',
   'Iraq',
   'Ireland',
   'Israel',
   'Italy',
   'Jamaica',
   'Japan',
   'Jordan',
   'Kazakhstan',
   'Kenya',
   'Kiribati',
   'Korea, North',
   'Korea, South',
   'Kuwait',
   'Kyrgyzstan',
   'Laos',
   'Latvia',
   'Lebanon',
   'Lesotho',
   'Liberia',
   'Libya',
   'Liechtenstein',
   'Lithuania',
   'Luxembourg',
   'Macedonia',
   'Madagascar',
   'Malawi',
   'Malaysia',
   'Maldives',
   'Mali',
   'Malta',
   'Marshall Islands',
   'Mauritania',
   'Mauritius',
   'Mexico',
   'Micronesia',
   'Moldova',
   'Monaco',
   'Mongolia',
   'Morocco',
   'Mozambique',
   'Myanmar',
   'Namibia',
   'Nauru',
   'Nepal',
   'Netherlands',
   'New Zealand',
   'Nicaragua',
   'Niger',
   'Nigeria',
   'Norway',
   'Oman',
   'Pakistan',
   'Palau',
   'Panama',
   'Papua New Guinea',
   'Paraguay',
   'Peru',
   'Philippines',
   'Poland',
   'Portugal',
   'Qatar',
   'Romania',
   'Russia',
   'Rwanda',
   'Saint Kitts and Nevis',
   'Saint Lucia',
   'Saint Vincent',
   'Samoa',
   'San Marino',
   'Sao Tome and Principe',
   'Saudi Arabia',
   'Senegal',
   'Serbia and Montenegro',
   'Seychelles',
   'Sierra Leone',
   'Singapore',
   'Slovakia',
   'Slovenia',
   'Solomon Islands',
   'Somalia',
   'South Africa',
   'Spain',
   'Sri Lanka',
   'Sudan',
   'Suriname',
   'Swaziland',
   'Sweden',
   'Switzerland',
   'Syria',
   'Taiwan',
   'Tajikistan',
   'Tanzania',
   'Thailand',
   'Togo',
   'Tonga',
   'Trinidad and Tobago',
   'Tunisia',
   'Turkey',
   'Turkmenistan',
   'Tuvalu',
   'Uganda',
   'Ukraine',
   'United Arab Emirates',
   'United Kingdom',
   'United States',
   'Uruguay',
   'Uzbekistan',
   'Vanuatu',
   'Vatican City',
   'Venezuela',
   'Vietnam',
   'Yemen',
   'Zambia',
   'Zimbabwe'
]



console.log('numbers :>> ', numbers);
console.log('numbers.length :>> ', numbers.length);

console.log('fruits :>> ', fruits);
console.log('webTechs :>> ', webTechs);

console.log('countries.length :>> ', countries.length);

const resume = [
   'Andrey',
   28,
   true,
   { country: 'Russia', city: 'Peterhof' },
   { skills: ['HTML', 'CSS', 'JS', 'Python'] }
];

console.log('resume :>> ', resume);

let js = 'JavaScript';
const charsInJavaScript = js.split('');
let companiesString = 'Facebook, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(', ');

console.log('charsInJavaScript :>> ', charsInJavaScript);
console.log('companies :>> ', companies);

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = txt.replace(/[.,]/g, '').split(' ');

console.log('words :>> ', words);

// Accessing array items using index
console.log('fruits[0] :>> ', fruits[0]);

// Modifying array element
numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;

console.log('numbers :>> ', numbers);

// Methods to manipulate array
const arr = Array();
arr[0] = 1;
console.log('arr :>> ', arr);

const eightEmptyValues = Array(8);
const eight = Array(8,);
console.log('eightEmptyValues :>> ', eightEmptyValues);
console.log('eight :>> ', eight);

// Filling an array with .fill()
const eightZeros = Array(8).fill(0);
console.log('eightZeros :>> ', eightZeros);

// Concatenating using .concat()
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log('thirdList :>> ', thirdList);

fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
const fruitsAndVegetables = fruits.concat(vegetables);

console.log('fruitsAndVegetables :>> ', fruitsAndVegetables);

// Getting array length

console.log('fruitsAndVegetables.length :>> ', fruitsAndVegetables.length);

// Getting index
// indexOf: if element doesn't exist return -1

numbers = [1, 2, 3, 4, 5];
console.log('numbers.indexOf(5) :>> ', numbers.indexOf(5));
console.log('numbers.indexOf(0) :>> ', numbers.indexOf(0));

// check an element if it exist in array
fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruit = 'banan';
let index = fruits.indexOf(fruit);

index != -1
   ? console.log(`${fruit} does exist in the array`)
   : console.log(`${fruit} does not exist in the array`);

// arr.lastIndexOf(el): gives the position of
// last occurance of el in arr

numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log('numbers.lastIndexOf(2) :>> ', numbers.lastIndexOf(2));
console.log('numbers.lastIndexOf(23) :>> ', numbers.lastIndexOf(23));

// includes

console.log('numbers.includes(2) :>> ', numbers.includes(2));
console.log('numbers.includes(23) :>> ', numbers.includes(23));

// Checking Array
// Array.isArray(data): to check if the data is an array

numbers = [1, 2, 3, 4];
let number = 199;

console.log('Array.isArray(numbers) :>> ', Array.isArray(numbers));
console.log('Array.isArray(number) :>> ', Array.isArray(number));

// Converting array to string

numbers = [1, 2, 3, 4, 5];
console.log('numbers.toString() :>> ', numbers.toString());

let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log('names.toString() :>> ', names.toString());

// Joining array elements
// join: It is used to join the elements of the array, 
//       the argument we passed in the join method 
//       will be joined in the array and return as a string. 
//       By default, it joins with a comma, but we can pass 
//       different string parameter which can be joined 
//       between the items.

numbers = [1, 2, 3, 4, 5];
console.log('numbers.join() :>> ', numbers.join());
console.log('numbers.join(\'.\') :>> ', numbers.join('.'));
console.log('webTechs.join("  &  ") :>> ', webTechs.join("  &  "));

// Slice array elements
// slice: To cut out a multiple items in range. 
//        It takes two parameters:starting and ending position. 
//        It doesn't include the ending position.

console.log('numbers.slice(3) :>> ', numbers.slice(3));
console.log('numbers.slice(1, 23) :>> ', numbers.slice(1, 23));
console.log('numbers.length :>> ', numbers.length);

// splice:  It takes three parameters: Starting position, 
//          number of times to be removed and 
//          number of items to be added.

console.log('numbers.splice() :>> ', numbers.splice());
// remove the first item
console.log('numbers.splice(0, 1) :>> ', numbers.splice(0, 1));
console.log('numbers :>> ', numbers);

numbers = [1, 2, 3, 4, 5, 6];
// remove three items and replace three items
console.log('numbers.splice(3, 3, 7, 8, 9) :>> ', numbers.splice(3, 3, 7, 8, 9));
console.log('numbers :>> ', numbers);

// Adding item to an array using push
// push: adding item in the end. To add item to the end of 
//       an existing array we use the push method.

let items = ['item1', 'item2', 'item3'];
items.push('new item');
console.log('items :>> ', items);

// pop: removing item in the end.

numbers = [1, 2, 3, 4, 5];
console.log('numbers.pop() :>> ', numbers.pop());
console.log('numbers :>> ', numbers);

// shift: removing one array element in the beginning of the array.

numbers.shift();
console.log('numbers :>> ', numbers);

// unshift: add one element in the beginning

numbers.unshift(0);
console.log('numbers :>> ', numbers);

// reverse: reverse the order of the array.

numbers = [1, 2, 3, 4, 5, 6];
console.log('numbers :>> ', numbers);
console.log('numbers.reverse() :>> ', numbers.reverse());
console.log('numbers :>> ', numbers);

// Sorting elements in array
// sort: arrange array elements in ascending order. 
//       Sort takes a call back function.

console.log('webTechs :>> ', webTechs);

webTechs.sort();
console.log('webTechs :>> ', webTechs);

webTechs.reverse();
console.log('webTechs :>> ', webTechs);

// Array of arrays

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [[1, 2, 3], [1, 2, 3]];
console.log('arrayOfArray[0] :>> ', arrayOfArray[0]);

const arrayOfArrays = [firstNums, secondNums];
console.log('arrayOfArrays :>> ', arrayOfArrays);