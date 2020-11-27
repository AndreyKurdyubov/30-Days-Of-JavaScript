console.log('level3 starts here');

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
leng = ages.length;
console.log('ages, leng :>> ', ages, leng);

const agesSort = ages.sort().slice(0);
leng = agesSort.length;
console.log('agesSort :>> ', agesSort);
console.log('agesSort[0] :>> ', agesSort[0]);
console.log('agesSort[leng - 1] :>> ', agesSort[leng - 1]);

let median;
leng % 2 == 0
   ? median = (agesSort[leng / 2] + agesSort[leng / 2 - 1]) / 2
   : median = agesSort[(leng - 1) / 2];
console.log('median :>> ', median);

let average = 0;
leng = ages.length;
for (age of ages) {
   average += age;
}
average /= leng;
console.log('average :>> ', average);

let range = agesSort[agesSort.length - 1] - agesSort[0];
console.log('range :>> ', range);

let min = agesSort[0];
let max = agesSort[agesSort.length - 1];
console.log('abs(min - average) :>> ', Math.abs(min - average).toPrecision(2));
console.log('abs(max - average) :>> ', Math.abs(max - average).toPrecision(2));
