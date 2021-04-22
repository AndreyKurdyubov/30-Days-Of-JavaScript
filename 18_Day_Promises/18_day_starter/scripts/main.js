// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// Exercises: Level 2
// Print out all the cat names in to catNames variable.
// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI)
   .then(response => response.json())
   .then(data => {
      for (let country of data.slice(0, 10)) {
         console.log('country:>> ', country.name, country.capital, country.languages, country.population, country.area);
      }
   })
   .catch(error => console.log(error));

const fetchData = async function(url) {
   try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data[0] :>> ', data[0]);
   }
   catch (err) {
      console.log('err :>> ', err);
   }
}

fetchData(countriesAPI+'d');

const fetchCats = async (url, names) => {
   try {
      let response = await fetch(url);
      let data = await response.json();
      data.forEach(element => {
         names.push(element.name)
      }
      // console.log('data :>> ', data); 
      )}
   catch (err) {
      console.log('err :>> ', err);
   }
}

let catNames =[];
fetchCats(catsAPI, catNames);
console.log('catNames :>> ', catNames);

let catNames2 = [];
fetch(catsAPI)
   .then(response => response.json())
   .then(data => {
      data.forEach(el => catNames2.push(el.name))
      console.log('catNames2 :>> ', catNames2);
   })
   .catch(err => console.log('err :>> ', err));