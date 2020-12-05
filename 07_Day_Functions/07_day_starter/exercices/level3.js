// 1 
// const numChar = prompt('Number of characters', '5');
// const numIds = prompt('Number of IDs to generate', '2');
const numChar = 8, numIds = 2;

function userIdGeneratedByUser(numChar, numIds) {
   let arrIds = [];
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let newId;
   const randomS = () => alphabet[Math.floor(Math.random() * alphabet.length)];

   for (let i = 0; i < Number(numIds); i++) {
      newId = '';
      for (let j = 0; j < Number(numChar); j++) {
         newId = newId.concat(randomS())
      }
      arrIds.push(newId);
   }
   return arrIds
}

arrIds = userIdGeneratedByUser(numChar, numIds);
console.log('arrIds :>> ', arrIds);

// 5
function generateHex() {
   const possibles = '0123456789abcdef';
   const rS = () => possibles[Math.floor(Math.random() * possibles.length)];
   return `${rS()}${rS()}`
}

function hexToDec(hex) {
   let dec = 0;
   let possibles = '0123456789abcdef';
   let val; // convert hex symbol to dec value

   for (i = 0; i < hex.length; i++) {
      val = possibles.indexOf(hex[i]);
      dec += val * Math.pow(16, hex.length - i - 1);
   }
   return dec
}

const generateHexColor = () => {
   const rS = generateHex;
   return `#${rS()}${rS()}${rS()}`
}

const hexToDecColor = (hex) => {
   return `rgb(${hexToDec(hex.slice(1, 3))}, ${hexToDec(hex.slice(3, 5))}, ${hexToDec(hex.slice(5, 7))})`
}

const hexColor = generateHexColor();
const hex = generateHex();

console.log('hex :>> ', hex);
console.log('hexToDec(hex) :>> ', hexToDec(hex));
console.log('hexColor :>> ', hexColor);
console.log('hexToDecColor(hexColor) :>> ', hexToDecColor(hexColor));