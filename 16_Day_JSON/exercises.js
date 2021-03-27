const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Exercises Level 1
// Change skills array to JSON using JSON.stringify()

// Stringify the age variable

// Stringify the isMarried variable

// Stringify the student object

const jsonSkills = JSON.stringify(skills, undefined, 2);
console.log('jsonSkills :>> ', jsonSkills);

const skillsArr = JSON.parse(jsonSkills);
console.log('skillsArr :>> ', skillsArr);

const jsonAge = JSON.stringify(age, undefined, 2);
console.log('jsonAge :>> ', jsonAge);

const jsonIsMarried = JSON.stringify(isMarried, undefined, 2);
console.log('jsonIsMarried :>> ', jsonIsMarried);

console.log('JSON.stringify("some text,", undefined, 2) :>> ', JSON.stringify("some text,", undefined, 2));

let obj1 = {
   "abc,": 123
}
console.log('JSON.stringify(obj1) :>> ', JSON.stringify(obj1, undefined, 2));

// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties

const studentStr = JSON.stringify(student, ["firstName", "lastName", "skills"], 2);
console.log('studentStr :>> ', studentStr);

// Exercises Level 3
// Parse the txt JSON to object.
// Find the the user who has many skills from the variable stored in txt.

const txtObj = JSON.parse(txt);
console.log('txtObj :>> ', txtObj);


let a = [1, 3, 4];
a = a.concat([5]);
console.log('a :>> ', a);
const entries = Object.entries(txtObj)
                      .map(([k, v]) => {
                        v.sklen = v.skills.length; 
                        return [k, v];
                      })
                      .sort(([, v1], [, v2]) => v2.sklen - v1.sklen);
console.log('entries :>> ', entries);

console.log('entries[0] :>> ', entries[0]);