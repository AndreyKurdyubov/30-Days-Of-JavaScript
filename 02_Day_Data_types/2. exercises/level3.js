/*
1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log('love :>> ', love);

let countLove = love.match(/love/gi).length
console.log('countLove :>> ', countLove);

console.log('sent.match(/because/g).length :>> ', sent.match(/because/g).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSent = sentence.replace(/[%$#@&;]/g, '');

console.log('sentence :>> ', sentence);
console.log('cleanSent :>> ', cleanSent);

let arrWords = cleanSent.replace(/[./!?]/g, '').toLowerCase().split(' ')
console.log('arrWords :>> ', arrWords);

let obj = {};
for (word of arrWords) {
   if (word in obj) {
      obj[word] += 1;
   }
   else {
      obj[word] = 1;
   }
}

let sortedList = {};
Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key) => {
   sortedList[key] = obj[key];
});
console.log('obj :>> ', obj);
console.log('sortedList :>> ', sortedList);

let incomeStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomes = incomeStr.match(/\d+/g);

console.log('incomes :>> ', incomes);
let total = 0;
for (counter in incomes) {
   total += counter % 2 === 0 ? Number(incomes[counter]) * 12 : Number(incomes[counter]);
}
console.log('total :>> ', total);