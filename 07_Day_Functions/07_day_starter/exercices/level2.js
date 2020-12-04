// 1
// ???

// 2
function solveQuadEquation(a = 1, b = 0, c = 0) {
   const x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 / a;
   const x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 / a;
   return [x1, x2]
}

console.log('solveQuadEquation() :>> ', solveQuadEquation());
console.log('solveQuadEquation(1, 1, 1) :>> ', solveQuadEquation(1, 1, 1));
console.log('solveQuadEquation(1, -1, 1) :>> ', solveQuadEquation(1, -1, 1));
console.log('solveQuadEquation(1, -2, 1) :>> ', solveQuadEquation(1, -2, 1));
console.log('solveQuadEquation(1, 4, 4) :>> ', solveQuadEquation(1, 4, 4));
console.log('solveQuadEquation(1, 1, -6) :>> ', solveQuadEquation(1, 1, -6));

// 3
const printArray = (arr) => {
   for (const element of arr) {
      console.log(element);
   }
}

printArray([1, 2, 'sdf'])

// 4
const showDateTime = function () {
   const now = new Date();
   const day = now.getDate();
   const month = now.getMonth() + 1;
   const year = now.getFullYear();
   const hours = (x => '0'.concat(x).slice(-2))(now.getHours());
   const minutes = (x => '0'.concat(x).slice(-2))(now.getMinutes());
   return `${day}/${month}/${year} ${hours}:${minutes}`
}

console.log(showDateTime())

// 5
function swapValues(x, y) {
   return [y, x]
}

let x = 3, y = 4;
[x, y] = swapValues(x, y);

console.log(x, y);

// 14
function sum(...args) {
   let res = 0;
   for (let i = 0; i < args.length; i++) {
      res += args[i];
   }
   return res
}

console.log('sum(2, 4, 23, 45) :>> ', sum(2, 4, 23, 45));

// 15
function randomUserIp() {
   const gen255 = () => Math.floor(Math.random() * 256);
   return `${gen255()}.${gen255()}.${gen255()}.${gen255()}`
}

console.log('randomUserIp() :>> ', randomUserIp());

// 16
function randomMacAddress() {
   const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
   const gen16 = () => hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)]
   return `${gen16()}:${gen16()}:${gen16()}:${gen16()}:${gen16()}:${gen16()}`
}

console.log('randomMacAddress() :>> ', randomMacAddress());