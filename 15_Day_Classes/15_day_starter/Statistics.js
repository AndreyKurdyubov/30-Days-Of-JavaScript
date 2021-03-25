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