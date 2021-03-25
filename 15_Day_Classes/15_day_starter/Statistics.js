//  level 3
class Statistics {
   constructor(array) {
      this._array = array;
   }

   count() {
      return this._array.length;
   }

   sum() {
      return this._array.reduce((prev, curr) => prev+curr, 0);
   }
   
   min() {
      return this._array.reduce((prev, curr) => curr < prev ? curr : prev, Infinity);
   }

   max() {
      return this._array.reduce((prev, curr) => curr > prev ? curr : prev, -Infinity);
   }

   range() {
      return this.max() - this.min();
   }
   
   mean() {
      return this.sum() / this.count();
   }

   median() {
      const sortedArr = [];
      this.getArray.forEach(x => sortedArr.push(x));
      sortedArr.sort((a, b) => a - b);
      const lenArr = this.count();
      // console.log(this.getArray);
      // console.log(sortedArr);

      if (lenArr % 2 === 0 ) return (sortedArr[lenArr/2 - 1] + sortedArr[lenArr/2]) / 2
      else return sortedArr[(lenArr-1)/2];
   }

   mode() {
      const arrObj = {};
      this.getArray.forEach(x => {
         if (arrObj.hasOwnProperty(x)) arrObj[x] += 1
         else arrObj[x] = 1;
      })
      const entries = Object.entries(arrObj)
                            .sort((a, b) => b[1] - a[1])
                            .map(pair => [Number(pair[0]), pair[1]]);
      return entries[0];
   }

   variance() {
      let sigma = 0;
      this.getArray.forEach(x => {sigma += (this.mean() - x) ** 2});
      return sigma / this.count();
   }

   std() {
      return this.variance() ** 0.5;
   }

   freqDistr() {
      const arrObj = {};
      this.getArray.forEach(x => {
         if (arrObj.hasOwnProperty(x)) arrObj[x] += 1
         else arrObj[x] = 1;
      })
      const entries = Object.entries(arrObj)
                            .sort((a, b) => b[1] - a[1])
                            .map(pair => [pair[1] / this.count() * 100, Number(pair[0])]);
      return entries;
   }

   getInfo() {
      console.log('Count: ', this.count());
      console.log('Sum: ', this.sum());
      console.log('Min: ', this.min());
      console.log('Max: ', this.max());
      console.log('Range: ', this.range());
      console.log('Mean: ', this.mean());
      console.log('Median: ', this.median());
      console.log('Mode: ', this.mode());
      console.log('Variance: ', this.variance().toFixed(2));
      console.log('Standard Deviation: ', this.std().toFixed(2));
      console.log('Frequency Distribution: ', this.freqDistr());
   }

   get getArray() {
      return this._array;
   }
   set setArray(newArray) {
      console.log('New array!');
      this._array = newArray;
   }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const stats = new Statistics(ages);
stats.getInfo();

class PersonAccount {
   constructor(firstname, lastname, incomes, expenses) {
      this._firstname = firstname;
      this._lastname = lastname;
      this._incomes = incomes;
      this._expenses = expenses;
   }

   totalIncome() {
      return this.getIncomes.reduce((prev, curr) => prev+curr, 0);
   }

   totalExpenses() {
      return this.getExpenses.reduce((prev, curr) => prev+curr, 0);
   }

   accountBalance() {
      return this.totalIncome() - this.totalExpenses();
   }

   accountInfo() {
      return `${this.getFirstname} ${this.getLastname}. Balance: ${this.accountBalance()}`
   }


   get getFirstname() {
      return this._firstname;
   }
   get getLastname() {
      return this._lastname;
   }
   get getIncomes() {
      return this._incomes;
   }
   get getIncomes() {
      return this._incomes;
   }
   get getExpenses() {
      return this._expenses;
   }

   set addIncome(newIncome) {
      this._incomes.push(newIncome);
   }
   set addExpense(newExpense) {
      this._expenses.push(newExpense);
   }
}

const myInc = [10, 20, 5, 15, 64, 1];
const myExp = [6, 7, 10];
const me = new PersonAccount('Andrey', 'Kurdyubov', myInc, myExp);
me.addIncome = 100;
me.addExpense = 20;
console.log('me.accountInfo() :>> ', me.accountInfo());
console.log('me.getExpenses :>> ', me.getExpenses);
console.log('me.getIncomes :>> ', me.getIncomes);
console.log('me.totalIncomes() :>> ', me.totalIncome());
console.log('me.totalExpenses() :>> ', me.totalExpenses());