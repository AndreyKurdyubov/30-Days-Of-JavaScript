console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function sumAllNums() {
   console.log(arguments)
}

console.log('sumAllNums(1, 2, 3 ,4) :>> ', sumAllNums(1, 2, 3, 4));
const sumAllNums1 = (...args) => {
   console.log(args);
}

sumAllNums1();

