function id_gen() {
   const sym = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y', 'z'
   ];
   let leng = Math.floor(Math.random() * 20);
   let id = "";
   let newSym;

   for (let i = 0; i < leng; i++) {
      newSym = sym[Math.floor(Math.random() * sym.length)];
      id = id.concat(newSym);
   }

   return id
};

console.log('id_gen() :>> ', id_gen());
console.log('id_gen() :>> ', id_gen());

function hex() {
   const sym = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f'];

   let num = '#';
   for (let i = 0; i < 6; i++) {
      num = num.concat(sym[Math.floor(Math.random() * sym.length)]);
   }
   return num
};

console.log('hex() :>> ', hex());
console.log('hex() :>> ', hex());

function rgb() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`
}

console.log('rgb() :>> ', rgb());
console.log('rgb() :>> ', rgb());

const countriesUp = countries.map((x) => x);
for (let i = 0; i < countries.length; i++) {
   countriesUp[i] = countriesUp[i].toUpperCase();
}

console.log('countries :>> ', countries);
console.log('countriesUp :>> ', countriesUp);

const countriesExt = countries.map((x) => [x]);
let cLeng, upThree;
console.log('countriesExt :>> ', countriesExt);
for (let i = 0; i < countries.length; i++) {
   upThree = countries[i].toUpperCase().slice(0, 3)
   cLeng = countries[i].length;
   countriesExt[i].push(upThree);
   countriesExt[i].push(cLeng);
}

console.log('countriesExt :>> ', countriesExt);

let countLand = [];
for (let i = 0; i < countries.length; i++) {
   if (countries[i].includes('land')) {
      countLand.push(countries[i]);
   }
}
countLand.length > 0
   ? console.log('countLand :>> ', countLand)
   : console.log('All these countries are without land');