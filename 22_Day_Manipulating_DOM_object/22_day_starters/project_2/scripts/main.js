console.log(countries)

const h4 = document.getElementById('total-countries');
h4.textContent = `Total number of countries: ${countries.length}`;

const countrWrapper = document.getElementsByClassName('countries-wrapper')[0];
const countrCont = document.getElementsByClassName('countries-container')[0];

countrWrapper.textContent = countries[0];

for (let i = 1; i < countries.length; i++) {
   const cloneWrap = countrWrapper.cloneNode(false);
   const newNode = countrCont.appendChild(cloneWrap);
   newNode.textContent = countries[i];
}