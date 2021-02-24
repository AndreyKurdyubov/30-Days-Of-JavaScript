let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log('countries :>> ', countries);

const logger = (el) => console.log('el :>> ', el);
countries.forEach(logger);
names.forEach(logger);
numbers.forEach(logger);

const upp = (el) => el.toUpperCase();

const coUp = countries.map(upp);
console.log('coUp :>> ', coUp);
console.log('countries :>> ', countries);

const coLen = countries.map((el) => el.length);
console.log('coLen :>> ', coLen);

const squares = numbers.map((el) => new Object({el: el * el}));
console.log('squares :>> ', squares);
console.log('numbers :>> ', numbers);

const naUp = names.map(upp);
console.log('names :>> ', names);
console.log('naUp :>> ', naUp);

const newPrice = {
   'banana': 4,
   'potato': 2,
   'avocado': 7,
   'coffee': 8,
   'tea': 5,
   'apple': 'm1',
};

const change = function(el) {
   if (Object.keys(newPrice).includes(el.product)) {
      el = Object.assign({}, el, {product: el.product.toUpperCase(), price: newPrice[el.product]});
   }
   return el
}

const proNew = products.map(change);
// proNew[0] = newPrice[0];
console.log('products :>> ', products);
console.log('proNew :>> ', proNew);

countries = [
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

const con2 = [...countries];

const isLand = countries.filter((el) => el.toLowerCase().includes('land'));
// console.log('countries :>> ', countries);
console.log('isLand :>> ', isLand);

const sixLet = countries.filter((el) => el.length == 6);
console.log('sixLet :>> ', sixLet);

const moreSix = countries.filter((el) => el.length >= 6);
console.log('moreSix :>> ', moreSix);

const coE = countries.filter((el) => el.startsWith('E'));
console.log('coE :>> ', coE);

const withPrice = products.filter((el) => (typeof el.price == 'number'));
console.log('products :>> ', products);
console.log('withPrice :>> ', withPrice);

function getStringList(ar) {
   return ar.filter((el) => typeof el == 'string');
}

const testArr = [1, 2, '3', true, false, null, 'undefined', ''];
console.log('testArr :>> ', testArr);
console.log('getStringList(testArr) :>> ', getStringList(testArr));

const sumOfNums = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('numbers :>> ', numbers);
console.log('sumOfNums :>> ', sumOfNums);

countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const isLand2 = countries.filter((el) => el.toLowerCase().includes('land'));
console.log('isLand2 :>> ', isLand2);

console.log('countries :>> ', countries);

const north = countries.slice(0, -1)
                       .reduce((acc, cur) => acc.concat(cur, ', '), '')
                       .concat(`and ${countries.slice(-1)} are North European countries.`);

console.log('north :>> ', north);

console.log('names :>> ', names);
console.log('greater then 7? :>> ', names.some((el) => el.length > 7));

console.log('isLand :>> ', isLand);
console.log('isLand.every((el) => el.includes(\'land\')) :>> ', isLand.every((el) => el.includes('land')));

let ind6 = countries.findIndex((el) => el.length === 6);
let con6 = countries.find((el) => el.length === 6);

console.log('ind6 :>> ', ind6);
console.log('con6 :>> ', con6);

ind6 = con2.findIndex((el) => el.length === 6);
con6 = con2.find((el) => el.length === 6);

console.log('ind6 :>> ', ind6);
console.log('con6 :>> ', con6);

const Norw = con2.findIndex(el => el === 'Norway1');
const Russ = con2.findIndex(el => el === 'Russia');

console.log('Norw :>> ', Norw);
console.log('Russ :>> ', Russ);