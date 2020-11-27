console.log('countries.slice(0, 5) :>> ', countries.slice(0, 10));
console.log('countries[countries.length - 1] :>> ', countries[countries.length - 1]);
console.log('webTechs :>> ', webTechs);

let firstHalf = Array();
let secondHalf = Array();

countries.shift()
const coLeng = countries.length;
console.log('coLeng :>> ', coLeng);
if (coLeng % 2 == 0) {
   firstHalf = firstHalf.concat(countries.slice(0, coLeng / 2));
   secondHalf = secondHalf.concat(countries.slice(coLeng / 2))
   console.log('middle :>> ', firstHalf[coLeng / 2 - 1], secondHalf[0]);
} else {
   console.log('here :>> ');
   firstHalf = firstHalf.concat(countries.slice(0, (coLeng + 1) / 2));
   secondHalf = secondHalf.concat(countries.slice((coLeng + 1) / 2));
   console.log('middle :>> ', firstHalf[(coLeng - 1) / 2]);
}

console.log('firstHalf.length :>> ', firstHalf.length);
console.log('secondHalf.length :>> ', secondHalf.length);
