const bol = [1, 2, 3];

console.log('bol :>> ', bol);
bol[1] = 4
console.log('bol :>> ', bol);

console.log('undefined == undefined :>> ', undefined == undefined);
console.log('undefined === undefined :>> ', undefined === undefined);
console.log('NaN === NaN :>> ', NaN === NaN);
console.log('0 == " " :>> ', 0 == " ");
console.log('0 == "    " :>> ', 0 == "    ");
console.log('false == " n" :>> ', false == " n");
console.log('false == "0n" :>> ', false == "0n");
console.log('false == 0n :>> ', false == 0n);
console.log('typeof 0n :>> ', typeof 0n);
console.log('null === null :>> ', null === null);

let tricky = 0 + - + - -'-1';
console.log('tricky :>> ', tricky);
console.log('tricky === 1 :>> ', tricky === 1);

console.log('10**2**3 :>> ', 10 ** 2 ** 3);
console.log('10**3**3 :>> ', 10 ** 3 ** 3);