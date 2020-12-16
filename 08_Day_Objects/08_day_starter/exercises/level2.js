console.log('============== level2 starts here ===============');

const users = {
   Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
   },
   Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
   },
   Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
   },
   Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
   },
   John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
   },
   Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
   },
   Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
   }
}

// Find person who has many skills in users object
console.log('users :>> ', users);

let maxSkill = 0;
let userTop = null;
let gr50 = 0
const mern = ['MongoDB', 'Express', 'React', 'Node'];
let mernCount = 0;
const mernUsers = [];

console.log('users.Alex :>> ', users.Alex['skills']);
for (const user in users) {
   console.log('user :>> ', user);
   if (users[user].skills.length > maxSkill) {
      maxSkill = users[user].skills.length;
      userTop = user;
   }
   if (users[user].isLoggedIn && users[user].points >= 50) {
      gr50 += 1;
   }

   mernCount = 0
   for (const skill of mern) {
      if (!users[user].skills.includes(skill)) {
         break;
      }
      else {
         mernCount += 1;
      }
   }
   if (mernCount == 4) {
      mernUsers.push(user);
   }
}

console.log('userTop, maxSkill :>> ', userTop, maxSkill);
console.log('gr50 :>> ', gr50);
console.log('mernUsers :>> ', mernUsers);
// let newSet = new Set([1, 2, 3]);
// let newSet2 = new Set([2, 3, 4, 5]);

// console.log('newSet :>> ', newSet);
// console.log('newSet2 :>> ', newSet2);

users['Andrey'] = {
   email: 'adrey@andrey.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
   age: 29,
   isLoggedIn: false,
   points: 30
};

console.log('users :>> ', users);

console.log('Object.keys(users) :>> ', Object.keys(users));
console.log('Object.values(users) :>> ', Object.values(users));

// for (const country of countries) {
//    console.log('name, capital :>> ', country.name, country.capital);
// }