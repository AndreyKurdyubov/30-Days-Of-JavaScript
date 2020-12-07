const person = {
   firstname: 'Andrey',
   lastname: 'Kurdyubov',
   age: 29,
   country: 'Russia',
   city: 'Saint-Petersburg',
   skills: [
      'HTML',
      'CSS',
      'Javascript',
      'Python'
   ],
   getfullname: function () {
      return `${this.firstname}${this.lastname}`
   },
   'phone number': '+3232323234',
}

console.log('person :>> ', person);
console.log('person.firstname :>> ', person.firstname);
console.log('person.lastname :>> ', person.lastname);
console.log('person.age :>> ', person.age);
console.log('person.country :>> ', person.country);
console.log('person.city :>> ', person.city);
console.log('person.skills :>> ', person.skills);
console.log('person.getfullname() :>> ', person.getfullname());
console.log('person[\'phone number\'] :>> ', person['phone number']);

person.nationality = 'Russian';
person.title = 'Physicist';
person.isMarried = true;
person.getInfo = function () {
   let skillsWithoutLast = this.skills
      .slice(0, this.skills.length - 1)
      .join(', ');
   let lastSkill = this.skills.splice(this.skills.length - 1)[0];
   let skills = `${skillsWithoutLast}, and ${lastSkill}`;
   let fullName = this.getfullname();
   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe learns ${skills}.`
   return statement
}
console.log('person.getInfo() :>> ', person.getInfo());
console.log('person.getInfo() :>> ', person.getInfo());

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

console.log('copyPerson.skills :>> ', copyPerson.skills);
copyPerson.skills[2] = 'Python';
console.log('copyPerson.skills :>> ', copyPerson.skills);
console.log('person.skills :>> ', person.skills);

console.log('Object.keys(person) :>> ', Object.keys(person));
console.log('Object.values(person) :>> ', Object.values(person));
console.log('person.hasOwnProperty("name") :>> ', person.hasOwnProperty("name"));
console.log('person.hasOwnProperty("lastname") :>> ', person.hasOwnProperty("lastname"));