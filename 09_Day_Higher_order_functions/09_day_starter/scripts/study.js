// forEach - is used only with arrays

let numbers = [1, 2, 3, 4]

const sumArray = arr => {
  let sum = 0
  numbers.forEach(element => sum += element)
  return sum

}
console.log(sumArray(numbers))   

let arr = [1, 2, 3];
arr.forEach((element, index, arr) => {
   arr.push(index + element)
   console.log(index, element, arr)
})

// map - Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

numbers = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]]]
let modified = numbers.map(el => el);

modified[5][3][0] = 10;
console.log('numbers :>> ', numbers);
console.log('modified :>> ', modified);
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare) 

let cont = [];
countries.forEach(obj => cont.push(obj.name));

console.log('countries :>> ', countries.slice(0, 5));
console.log('cont :>> ', cont);

const countriesEndsByia = cont.filter(country => country.endsWith('ia'))
console.log(countriesEndsByia)

// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

numbers = [10, 2, 3, 4, 5]
let sum = numbers.reduce((acc, cur) => acc + cur, -24)

console.log(sum)

// every - checks that all elements are similar in one aspect

let bools = [true, true, true, 1, '1']
const areAllTrue = bools.every((b) => {
  return b === true
})

console.log(areAllTrue) // true

// find - searches for the first element satisfying the condition

let out = numbers.find((el) => el < 4);
console.log('out :>> ', out);

//  findIndex - returns index of first occurence of the element which satisfies the condition

let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let ages = [24, 22, 25, 32, 35, 18]

let result = names.findIndex((name) => name.length > 7)
console.log(result) // 0
let age = ages.findIndex((age) => age < 20)
console.log(age) // 5

//some: Check if some of the elements are similar in one aspect. It returns boolean

names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', '1']
bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => {
  return b === true
})

console.log(areSomeTrue) //true
const areAllStr = names.some((name) => typeof name === 'number')
console.log(areAllStr) // false

// sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

let products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot', 'apple']
console.log(products);
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
console.log(products);

//Sorting Numeric values
//As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

numbers = [9.81, 3.14, 100, 37]

console.log('numbers :>> ', numbers);
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort((a, b) => a - b)

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]

// sorting objects
let users = [
   { name: 'Asabeneh', age: 150 },
   { name: 'Brook', age: 50 },
   { name: 'Eyo', age: 100 },
   { name: 'Elias', age: 22 },
 ]
 console.log('users :>> ', users);

 let newUsers = Object.assign([], users)
 console.log('newUsers :>> ', newUsers);

 users.sort((a, b) => {
   if (a.age < b.age) return -1
   if (a.age > b.age) return 1
   return 0
 })

 newUsers.sort((a, b) => b.age - a.age); // in reverse order of key
 
 //[{…}, {…}, {…}, {…}]