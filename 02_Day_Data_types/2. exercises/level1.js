/*
1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2. Print the string on the browser console using console.log()
3. Print the length of the string on the browser console using console.log()
4. Change all the string characters to capital letters using toUpperCase() method
5. Change all the string characters to lowercase letters using toLowerCase() method
6. Cut (slice) out the first word of the string using substr() or substring() method
7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8. Check if the string contains a word Script using includes() method
9. Split the string into an array using split() method
10. Split the string 30 Days Of JavaScript at the space using split() method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
23. Use match() method to find all the a’s in 30 Days Of JavaScript
24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use repeat() method to print 30 Days Of JavaScript 2 times
*/
console.log('level1 starts here');

let challenge = '30 Days Of Javascript';
console.log('challenge :>> ', challenge);
console.log('challenge.length :>> ', challenge.length);

let challengeUp = challenge.toUpperCase();
console.log('challengeUp :>> ', challengeUp);

let challengeLow = challenge.toLowerCase();
console.log('challengeLow :>> ', challengeLow);

let firstWord = challenge.substr(3, 4), firstWord2 = challenge.substring(3, 7);
console.log('firstWord, firstWord2 :>> ', firstWord, firstWord2);

let sliceObj = challenge.slice(3);
console.log('sliceObj :>> ', sliceObj);

console.log('challenge.includes(\'script\') :>> ', challenge.includes('script'));

let splitChal = challenge.split(' ');
console.log('splitChal :>> ', splitChal);

let companiesStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companies = companiesStr.split(', ');
console.log('companies :>> ', companies);

let python30 = challenge.replace('Javascript', 'Python');
console.log('python30 :>> ', python30);

console.log('challenge.charAt[15] :>> ', challenge.charAt(15), challenge[15]);
let index = challenge.indexOf('J');
console.log('challenge.charAt(index) :>> ', challenge.charAt(index), challenge.charCodeAt(index));

console.log('challenge.indexOf(\'a\') :>> ', challenge.indexOf('a'));
console.log('challenge.lastIndexOf(\'a\') :>> ', challenge.lastIndexOf('a'));

let sent = 'You cannot end a sentence with because because because is a conjunction';
console.log('sent.indexOf(\'because\') :>> ', sent.indexOf('because'));
console.log('sent.lastIndexOf(\'because\') :>> ', sent.lastIndexOf('because'));
console.log('sent.search(\'because\') :>> ', sent.search('because'));

let trimChal = ' 30 Days Of JavaScript';
console.log('trimChal :>> ', trimChal);
console.log('trimChal.trim() :>> ', trimChal.trim());

console.log('challenge.startsWith(30) :>> ', challenge.startsWith(30));
console.log('challenge.EndsWith(\'pt\') :>> ', challenge.endsWith('pt'));

console.log('challenge.match(\'a\') :>> ', challenge.match(/a/g));

let first = '30 Days Of';
let second = 'JavaScript';
console.log('first :>> ', first);
console.log('second :>> ', second);
console.log('first.concat(\' \, second) :>> ', first.concat(' ', second));

console.log('challenge.repeat(2) :>> ', challenge.repeat(2));