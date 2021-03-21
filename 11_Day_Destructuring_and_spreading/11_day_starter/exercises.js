// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name: 'Brook',
  scores: 75,
  skills: ['HTML', 'CSS', 'JS'],
  age: 16
},
{
  name: 'Alex',
  scores: 80,
  skills: ['HTML', 'CSS', 'JS'],
  age: 18
},
{
  name: 'David',
  scores: 75,
  skills: ['HTML', 'CSS'],
  age: 22
},
{
  name: 'John',
  scores: 85,
  skills: ['HTML'],
  age: 25
},
{
  name: 'Sara',
  scores: 95,
  skills: ['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores: 80,
  skills: ['HTML', 'CSS', 'JS'],
  age: 18
},
{
  name: 'Thomas',
  scores: 90,
  skills: ['HTML', 'CSS', 'JS'],
  age: 20
}
]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
// Destructure the rectangle object by its properties or keys.

const [ e, pi, gravity, humanBodyTemp, waterBoilingTemp ] = constants;
console.log('e, pi, gravity, humanBodyTemp, waterBoilingTemp :>> ', e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const [ fin, est, sw, den, nor ] = countries;
console.log('fin, est, sw, den, nor :>> ', fin, est, sw, den, nor);

const { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log('w, h, a, p :>> ', w, h, a, p);

// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring
// Find the persons who have less than two skills

for (const { name: n,  scores: s, age: a, skills :sk } of users) {
   console.log('name, age, skills, scores :>> ', n, a, sk, s);
}

for (const { name: n, skills: sk } of users) {
   if (sk.length < 3) console.log(`${n} has less than 3 skills`);
}

// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries

import { countries as cntr } from "./data/countries_data.js"
// console.log('cntr :>> ', cntr);
for (const { name: n, capital: c, population: p, languages: l} of cntr) {
   console.log(`${n}'s capital is ${c}. It's population is ${p}, which speaks ${l} language${l.length == 1 ? '' : 's'}`);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [ name, skills, [, , jsScore, reactScore]] = student1;
console.log(name, skills, jsScore, reactScore)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students) {
   let studObj = []
   for (const [ name, skills, scores ] of students) {
      studObj.push({name: name,
                    skills: skills,
                    scores: scores
                   })
   }
   return studObj
}

console.log(convertArrayToObject(students))
   //  [
   //    {
   //      name: 'David',
   //      skills: ['HTM','CSS','JS','React'],
   //      scores: [98,85,90,95]
   //    },
   //    {
   //      name: 'John',
   //      skills: ['HTM','CSS','JS','React'],
   //      scores: [85, 80,85,80]
   //    }
   //  ]
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

const newStudent = JSON.parse(JSON.stringify(student));
// const newStudent = Object.assign({}, student); // Shallow copy; same as {...student}

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
newStudent.skills.backEnd.push({skill: 'Express', level: 9});
newStudent.skills.dataBase.push({skill: 'SQL', level: 8});
newStudent.skills.dataScience.push('SQL');

console.log('student :>> ', student);
console.log('student.skills.frontEnd :>> ', student.skills.frontEnd);
console.log('newStudent :>> ', newStudent);
console.log('newStudent.skills.frontEnd :>> ', newStudent.skills.frontEnd);
// The copied object output should look like this:
/*
    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }
  */
