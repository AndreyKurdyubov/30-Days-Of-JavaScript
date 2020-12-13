console.log('============== level1 starts here ===============');

const dog = {};
console.log('dog :>> ', dog);

dog.name = 'Rex';
dog.legs = 4;
dog.age = 11;
dog.bark = function () {
   return 'Woof Woof'
}

dog.breed = 'Caucasian'
dog.getInfo = function () {
   return `${this.name} is a dog of ${this.breed} breed.\n He is ${this.age} years old and has ${this.legs} legs.\n ${this.bark()}!`
}

console.log('dog :>> ', dog);
console.log('dog.bark() :>> ', dog.bark());
console.log('dog.getInfo() :>>\n', dog.getInfo());