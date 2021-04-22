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

// fetch(countriesAPI)
//    .then(response => response.json())
//    .then(data => {
//       for (let country of data.slice(0, 10)) {
//          console.log('country:>> ', country.name, country.capital, country.languages, country.population, country.area);
//       }
//    })
//    .catch(error => console.log(error));

// const fetchData = async function(url) {
//    try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log('data[0] :>> ', data[0]);
//    }
//    catch (err) {
//       console.log('err :>> ', err);
//    }
// }

// fetchData(countriesAPI+'d');

const fetchCats = async (url) => {
   try {
      let response = await fetch(url);
      let data = await response.json();
      // data.forEach(element => {
      //    names.push(element.name);
      //    weights.push(element.weight);
      // });
      // console.log('data :>> ', data[0]); 
      let catNames = [];
      let catWeights = [];
      data.forEach(el=> {
         catNames.push(el.name);
         catWeights.push(el.weight);
      })
      // console.log('data :>> ', data);
      // console.log('catNames, catWeights :>> ', catNames, catWeights);
      return [catNames, catWeights]
   }
   catch (err) {
      console.log('err :>> ', err);
   }
}

// let avWght = 0;
let cats = fetchCats(catsAPI);
cats.then(([nam, weight]) => {
   // console.log('result :>> ', result);
   console.log('nam, weight :>> ', nam, weight);
   let patt = /\d+/g;
   let avWt = 0;
   weight.forEach(el => {
      let matc = el.metric.match(patt);
      avWt += (Number(matc[0]) + Number(matc[1])) / 2;
   });
   avWt /= weight.length;
   console.log('avWt :>> ', avWt.toPrecision(2));
})

// console.log('catNames :>> ', catNames);
// console.log('catWeights :>> ', catWeights);
// console.log('catWeights.length :>> ', catWeights.length);
// catWeights.forEach(el => {
//       console.log('el :>> ', el);
      // let pattern = /\d+/g;
      // let matches = el['metric'].match(pattern);
      // console.log('matches :>> ', matches);
      // avWght += matches[0];
//    })
// console.log('metric average cat weight :>> ', avWght);


// let catNames2 = [];
// fetch(catsAPI)
//    .then(response => response.json())
//    .then(data => {
//       data.forEach(el => catNames2.push(el.name))
//       console.log('catNames2 :>> ', catNames2);
//    })
//    .catch(err => console.log('err :>> ', err));