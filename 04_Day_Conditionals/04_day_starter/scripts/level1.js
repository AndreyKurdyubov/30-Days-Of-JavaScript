// Get user input using prompt(“Enter your age:”). If user is 18 or older, 
// give feedback:'You are old enough to drive' but if not 18 give another 
// feedback stating to wait for the number of years he neds to turn 18.

let isNot18 = true;

while (isNot18) {
   var myAge = Number(prompt("Введите возраст", 18));
   if (myAge >= 18) {
      console.log('Водить можно');
      isNot18 = false
   } else {
      console.log(`Водить нельзя еще ${18 - myAge} лет`);
   }
}

let yourAge = Number(prompt('Введите его возраст', 24));

if (myAge > yourAge) {
   console.log(`Я старше на ${myAge - yourAge} лет`);
} else if (myAge == yourAge) {
   console.log(`Мы одного возраста`);
} else {
   console.log(`Он старше на ${-myAge + yourAge} лет`);
}

let a = 4, b = 4;

if (a > b) console.log(`${a} is greater than ${b}`);
else if (a == b) console.log(`${a} equal ${b}`);
else console.log(`${a} is lesser than ${b}`);

a > b
   ? console.log(`${a} is greater than ${b}`)
   : a == b
      ? console.log(`${a} equal ${b}`)
      : console.log(`${a} is lesser than ${b}`);

/*
Even numbers are divisible by 2 and the remainder is zero.
How do you check, if a number is even or not using JavaScript?
*/

let num = parseInt(prompt('Введите число', 10));

num % 2
   ? console.log(`${num} нечетное`)
   : console.log(`${num} четное`);

