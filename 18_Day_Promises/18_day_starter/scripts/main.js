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

