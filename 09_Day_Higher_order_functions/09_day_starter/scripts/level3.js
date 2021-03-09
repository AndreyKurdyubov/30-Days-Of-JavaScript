import { countries } from '../data/countries_data.js'

console.log('countries.slice(0, 1) :>> ', countries.slice(0, 1));

// 1. Sort countries by name, capital, population
console.log('"a" > "b" :>> ', "a" > "b");
console.log('"a" < "b" :>> ', "a" < "b");

let nameCount = [...countries];
nameCount.sort(function (a, b) {
   if (a.name < b.name) return 1
   if (a.name > b.name) return -1
   return 0})

console.log('nameCount :>> ', nameCount.slice(0, 4));

let capCount = [...countries];
capCount.sort(function(a, b) {
   if (a.capital > b.capital) return 1
   if (a.capital < b.capital) return -1
   return 0; 
})

console.log('capCount :>> ', capCount.slice(10, 14));

let popCount = [...countries];
popCount.sort(function(a, b) {
   if (a.population > b.population) return 1
   if (a.population < b.population) return -1
   return 0;
})

console.log('popCount.slice(0, 4) :>> ', popCount.slice(0, 4));

// find 10 most spoken languages
function mostSpokenLanguages(countr, number) {
   let spokenLang = {};

   function addLang(obj) {
      let languages = obj.languages;
   
      function addSpoken(lang) {
         if (spokenLang.hasOwnProperty(lang)) spokenLang[lang] += 1
         else spokenLang[lang] = 1
      }

      languages.forEach(addSpoken)
   }
   
   countr.forEach(addLang);

   let mostSpoken = Object.entries(spokenLang)
                          .sort((a, b) => b[1] - a[1])
                          .slice(0, number)
                          .map(el => new Object({'country': el[0], 
                                                 'count': el[1]}));
   return mostSpoken
}

let mostSpokenArray = mostSpokenLanguages(countries, 10);
console.log('mostSpokenArray :>> ', mostSpokenArray);


// 3. list of most populated countries

function mostPopulatedCountries(countr, number) {
   let populatedCountries = []
   countr.forEach((obj) => populatedCountries.push({country: obj.name,
                                                    population: obj.population}));

   let mostPopulated = populatedCountries.sort((a, b) => b.population - a.population)
                                         .slice(0, number);             
   return mostPopulated
}

const mostPopulated = mostPopulatedCountries(countries, 10);
console.log('mostPopulated :>> ', mostPopulated);


//4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = {
   value: ages,
   count: function() {
      return this.value.length;
   },
   sum: function() {
      let s = 0;
      for (const val of this.value) {
         s += val;
      }
      return s;
   },
   min: function() {
      let m = this.value[0];
      for (const val of this.value) {
         if (val < m) m = val;
      }
      return m;
   },
   max: function() {
      let m = this.value[0];
      for (const val of this.value) {
         if (val > m) m = val;
      }
      return m;
   },
   range: function() {
      return this.max() - this.min();
   },
   mean: function() {
      return this.sum()/this.count();  
   },
   median: function () {
      let sorted = this.value.sort((a, b) => a - b);
      const leng = sorted.length;
      let answer;
      leng % 2 == 0
         ? answer =  (sorted[leng/2] + sorted[leng/2 - 1]) / 2
         : answer = sorted[(leng-1)/2];
      return answer;   
   },
   mode: function() {
      let dict = new Object();
      for (const val of this.value) {
         if (dict.hasOwnProperty(val)) dict[val] += 1
         else dict[val] = 1;
      }
      let dictSort = Object.entries(dict).sort((a, b) => b[1] - a[1])
      return {'mode': dictSort[0][0], 'count':dictSort[0][1]};
   },
   var: function() {
      let mean = this.mean();
      let vari = 0;
      for (const val of this.value) {
         vari += (val - mean) ** 2;
      }
      return vari / this.count();
   },
   std: function () {
      return this.var() ** 0.5;
   },
   freqDist: function() {
      let freqs = {};
      for (const val of this.value) {
         if (freqs.hasOwnProperty(val)) freqs[val] += 1
         else freqs[val] = 1;
      }
      return Object.entries(freqs).sort((a,b) => b[1] - a[1]);
   }
}

console.log('ages :>> ', ages);
console.log('statistics :>> ', statistics);
console.log('statistics.count() :>> ', statistics.count());
console.log('statistics.sum() :>> ', statistics.sum());
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist())


// for (let key in spokenLang) {
//    // console.log('key :>> ', key);
//    console.log(`${key} :>> ${spokenLang[key]}`);
// }
// countries.forEach(addLang)

// let obj = {jiko:1};
// console.log('obj :>> ', obj);
// console.log('obj.hasOwnProperty("jiko") :>> ', obj.hasOwnProperty("jiko"));