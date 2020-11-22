
/*
1. Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

2. "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

3. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

4. Check if 'on' is found in both python and jargon

5. I hope this course is not full of jargon. Check if jargon is in the sentence.

6. Generate a random number between 0 and 100 inclusively.

7. Generate a random number between 50 and 100 inclusively.

8. Generate a random number between 0 and 255 inclusively.

9. Access the 'JavaScript' string characters using a random number.

10. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

11. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log('level2 starts here');

let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log('quote1 :>> ', quote1);

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log('quote2 :>> ', quote2);

console.log('\'10\' === 10 :>> ', '10' === 10);
console.log('parseInt(\'10\') === 10 :>> ', parseInt('10') === 10);
console.log('Number(\'10\') === 10 :>> ', Number('10') == 10);
console.log('+\'10\' === 10 :>> ', +'10' === 10);

console.log('parseFloat(\'9.8\') === 10 :>> ', parseFloat('9.8') === 10);
console.log('Math.round(parseFloat(\'9.8\')) === 10 :>> ', Math.round(parseFloat('9.8')) === 10);
console.log('Math.ceil(parseFloat(\'9.8\')) === 10 :>> ', Math.ceil(parseFloat('9.8')) === 10);

console.log('\'python\'.includes(\'on\') && \'jargon\'.includes(\'on\') :>> ', 'python'.includes('on') && 'jargon'.includes('on'));

console.log('Math.floor(Math.random()*101) :>> ', Math.floor(Math.random() * 101));
console.log('Math.floor(Math.random(51)) +  50 :>> ', Math.floor(Math.random() * 51) + 50);
console.log('Math.floor(Math.random() * 256) :>> ', Math.floor(Math.random() * 256));

const jasc = 'JavaScript';
const leng = jasc.length;
const indRnd = Math.floor(Math.random() * leng);

console.log('jasc :>> ', jasc);
console.log('indRnd, jasc.charAt(indRnd) :>> ', indRnd, jasc.charAt(indRnd));

console.log(
   `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n');
console.log('sent :>> ', sent);
console.log('sent.slice(sent.indexOf(\'because\'), sent.lastIndexOf(\'use\') + 3) :>> ', sent.slice(sent.indexOf('because'), sent.lastIndexOf('use') + 3));
console.log('sent.substring(sent.indexOf(\'because\'), sent.lastIndexOf(\'use\') + 3) :>> ', sent.substring(sent.indexOf('because'), sent.lastIndexOf('use') + 3));
console.log('sent.substr(sent.indexOf(\'because\'), \'because\'.length * 3 + 2) :>> ', sent.substr(sent.indexOf('because'), 'because'.length * 3 + 2));
