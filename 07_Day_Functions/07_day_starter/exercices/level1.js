// 1 2
function fullName(name = 'Andrey', lastName = 'Kurdyubov') {
   console.log(name, lastName);
}

fullName('A.');

// 3
function addNumbers(a, b) {
   return a + b
}

console.log('addNumbers(2, 5) :>> ', addNumbers(2, 5));

// 4
function areaOfRectangle(length, width) {
   return length * width
}

console.log('areaOfRectangle(5, 6) :>> ', areaOfRectangle(5, 6));

// 5
const perimeterOfRectangle = function (length, width) {
   return 2 * (length + width)
}

console.log('perimeterOfRectangle(7, 9) :>> ', perimeterOfRectangle(7, 9));

// 6
const volumeOfRectPrism = (length, width, height) => length * width * height;

console.log('volumeOfRectPrism(2, 3, 4) :>> ', volumeOfRectPrism(2, 3, 4));

// 7
const areaOfCircle = r => Math.PI * r * r;

console.log('areaOfCircle(5) :>> ', areaOfCircle(5));

// 8
const circumference = function (r) {
   return Math.PI * r * 2
}

console.log('circumference(2) :>> ', circumference(2));

// 9
const density = (mass, volume) => mass / volume;

console.log('density(1, 2) :>> ', density(1, 2));

// 10
function speed(dist, time) {
   return dist / time
}

console.log('speed(22, 11) :>> ', speed(22, 11));

// 11
const weight = function (mass, gravity) {
   return mass * gravity
}

console.log('weight(23, 34) :>> ', weight(23, 34));

// 12
function convertCelciusToFahrenheit(C) {
   return (C * 9 / 5) + 32
}

const convertFahrCelc = F => (F - 32) * 5 / 9;

console.log('convertCelciusToFahrenheit(36.6) :>> ', convertCelciusToFahrenheit(36.6));
console.log('convertFahrCelc(100) :>> ', convertFahrCelc(100));

// 13
function bmi(weight, height) {
   const index = (weight / height / height).toPrecision(3);
   if (index < 18.5) console.log(index, 'underweight')
   else if (index <= 24.4) console.log(index, 'normal weight')
   else if (index <= 29.9) console.log(index, 'overweight')
   else console.log(index, 'obese');
}

bmi(75, 1.83);

// 14
const now = new Date();
const checkSeason = (month = now.getMonth() + 1) => {
   const season = month % 12 / 3;
   if (season < 1) console.log(month, 'winter')
   else if (season < 2) console.log(month, 'spring')
   else if (season < 3) console.log(month, 'summer')
   else console.log(month, 'autumn');
}

checkSeason(6);

//
console.log(Math.max(6, 5, 2));

function findMax(...arg) {
   let curMax = arg[0];
   for (let i = 1; i < arg.length; i++) {
      if (arguments[i] > curMax) {
         curMax = arguments[i]
      }
   }
   return curMax
}

console.log('findMax(10, -1, 3) :>> ', findMax(10, -1, 3));