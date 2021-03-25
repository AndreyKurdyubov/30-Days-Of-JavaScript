// level 1-2
class Animal {
   constructor(nam, age, color, legs=4) {
      this._name = nam;
      this._age = age;
      this._color = color;
      this._legs = legs;
   }

   getInfo() {
      return `This is ${this.getName}. It is ${this.getAge} year old, it's color is ${this.getColor} and it has ${this.getLegs} legs. It says ${this.say()}`;
   }

   say() {
      return 'Shahh!'
   }

   get getName() {
      return this._name;
   }
   get getAge() {
      return this._age;
   }
   get getColor() {
      return this._color;
   }
   get getLegs() {
      return this._legs;
   }

   set setName(newName) {
      console.log(`The name has changed from ${this.getName} to ${newName}`);
      this._name = newName;
   }
   set setAge(newAge) {
      console.log(`The age has changed from ${this.getAge} to ${newAge}`);
      this._age = newAge;
   }
   set setColor(newColor) {
      console.log(`The color has changed from ${this.getColor} to ${newColor}`);
      this._color = newColor;
   }
   set setLegs(newLegs) {
      console.log(`The number of legs has changed from ${this.getLegs} to ${newLegs}`);
      this._legs = newLegs;
   }
}

const puppy = new Animal(nam='Jack', age=1, color='brown');
console.log('puppy.getInfo() :>> ', puppy.getInfo());

puppy.setName = 'Rex';
puppy.setColor = 'black and brown';
puppy.setAge = 6;
console.log('puppy.getInfo() :>> ', puppy.getInfo());

class Cat extends Animal {
   constructor(nam, age, color, breed, legs=4,) {
      super(nam, age, color, legs);
      this._breed = breed;
   }

   getInfo() {
      const superInfo = super.getInfo();
      const indexOfDot = superInfo.lastIndexOf('.');
      const firstPart = superInfo.slice(0, indexOfDot+1);
      const secondPart = superInfo.slice(indexOfDot+1);
      return firstPart.concat(` ${this.getName} is a cat of breed ${this.getBreed}.`, secondPart);
   }

   say() {
      return 'Meow!'
   }

   get getBreed() {
      return this._breed;
   }
   set setBreed(NewBreed) {
      console.log(`The breed has changed from ${this.getBreed} to ${newBreed}`);
      this._breed = newBreed;
   }
}

const kitty = new Cat('Alice', 2, 'red', 'rusty cat');
console.log(kitty.getLegs);
console.log('kitty.getInfo() :>> ', kitty.getInfo());

class Dog extends Animal {
   constructor(nam, age, color, breed, legs=4,) {
      super(nam, age, color, legs);
      this._breed = breed;
   }

   getInfo() {
      const superInfo = super.getInfo();
      const indexOfDot = superInfo.lastIndexOf('.');
      const firstPart = superInfo.slice(0, indexOfDot+1);
      const secondPart = superInfo.slice(indexOfDot+1);
      return firstPart.concat(` ${this.getName} is a dog of breed ${this.getBreed}.`, secondPart);
   }

   say() {
      return 'Woof!'
   }

   get getBreed() {
      return this._breed;
   }
   set setBreed(NewBreed) {
      console.log(`The breed has changed from ${this.getBreed} to ${newBreed}`);
      this._breed = newBreed;
   }
}

const dog = new Dog('Milky', 4, 'white', 'Husky');
console.log('dog.getInfo() :>> ', dog.getInfo());

//  level 3
