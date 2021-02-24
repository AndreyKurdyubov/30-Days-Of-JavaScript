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
                                                 'count': el[1]
                                                }));
   return mostSpoken
}

let mostSpokenArray = mostSpokenLanguages(countries, 10);
console.log('mostSpokenArray :>> ', mostSpokenArray);
// for (let key in spokenLang) {
//    // console.log('key :>> ', key);
//    console.log(`${key} :>> ${spokenLang[key]}`);
// }
// countries.forEach(addLang)

// let obj = {jiko:1};
// console.log('obj :>> ', obj);
// console.log('obj.hasOwnProperty("jiko") :>> ', obj.hasOwnProperty("jiko"));