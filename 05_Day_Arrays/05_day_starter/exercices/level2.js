console.log('level2 starts here');

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

let text =
   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,]/g, '').split(' ');
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart[0] != 'Meat') {
   shoppingCart.unshift('Meat');
}
console.log('shoppingCart :>> ', shoppingCart);

if (shoppingCart[shoppingCart.length - 1] != 'Sugar') {
   shoppingCart.push('Sugar');
}
console.log('shoppingCart :>> ', shoppingCart);

if (shoppingCart.includes('Honey')) {
   shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}
console.log('shoppingCart :>> ', shoppingCart);

if (shoppingCart.includes('Tea')) {
   shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
}
console.log('shoppingCart :>> ', shoppingCart);

if (countries.includes('Ethiopia')) {
   console.log('ETHIOPIA');
} else {
   countries.push('Ethiopia')
}

if (webTechs.includes('Sass')) {
   console.log('Sass is a CSS preprocessor');
} else {
   webTechs.push('Sass');
   console.log('webTechs :>> ', webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);