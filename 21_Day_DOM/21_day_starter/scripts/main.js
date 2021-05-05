function getWidth() {
   if (self.innerWidth) {
     return self.innerWidth;
   }
 
   if (document.documentElement && document.documentElement.clientWidth) {
     return document.documentElement.clientWidth;
   }
 
   if (document.body) {
     return document.body.clientWidth;
   }
 }

// alert(getWidth());
const body = document.body;
body.style.fontSize = '30px';
const div = document.getElementsByClassName('wrapper')[0];
const cssText = `
   width: ${Math.floor(getWidth()/2)}px;
   margin: auto;
   background-color: white;
   text-align: center;
   font-family: roboto, sans-serif;
`;
// alert(cssText);
div.style.cssText = cssText;

const h1 = document.getElementsByTagName('h1')[0];
const h2 = document.getElementsByTagName('h2')[0];
const ul = document.getElementsByTagName('ul')[0]; 
const li = document.querySelectorAll('li');

let textContent = h1.textContent;
const year = textContent.match(/\d+/g);
let innerHTML = textContent.slice(0, textContent.length-4) +
   `<span>${year}</span>`;

h1.innerHTML = innerHTML;
const span = document.getElementsByTagName('span')[0];
h1.style.fontSize = '1em';
span.style.fontSize = '2em';
h2.style.fontSize = '0.8em';

function newColor() {
   const rnd = () => Math.floor(Math.random() * 256)
   return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
}

// alert(newColor());

textContent = h2.textContent;
h2.innerHTML = `<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript">${textContent}</a>`;

// h2.nextSibling = new Date();
const now = new Date();

function time() {
   const mths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
];
   const month = mths[now.getMonth()];
   const day = now.getDate();
   const year = now.getFullYear();
   const hour = now.getHours();
   const minute = now.getMinutes();
   const second = now.getSeconds();

   function hms() {
      let hours = `0${hour}`;
      let mins = `0${minute}`;
      let secs = `0${second}`;
      hours = hours.slice(hours.length - 2);
      mins = mins.slice(mins.length - 2);
      secs = secs.slice(secs.length - 2);
      return `${hours}:${mins}:${secs}`
   }

   return `${month} ${day}, ${year} ${hms()}`;
}

const newDiv = document.createElement('div');
newDiv.class = 'time';
newDiv.innerHTML = `${time()}`;
newDiv.style.cssText = `
   font-size: 0.5em;
   width: ${getWidth()/6}px;
   margin: auto;
`;
div.insertBefore(newDiv, h2.nextSibling);

let yearColor = setInterval(() => {
   span.style.color = newColor();
   newDiv.style.backgroundColor = newColor();
}, 1000);

ul.style.cssText = `
   list-style-type: none;
   text-align: left;
   padding: 0;
`;

li.forEach((el, ind) => {
   el.style.height = '3em';
   el.style.lineHeight = '3em';
   el.style.fontSize = `0.5em`;
   el.style.margin = '0.2em';
   el.style.paddingLeft = '1em';
   // el.style.verticalAlign = `top`;
   // el.style.display ='table-rows';
   switch (ind) {
      case 0: 
         el.style.marginTop = '-1em';
         el.style.backgroundColor = 'seagreen';
         break;
      case 1: 
         el.style.backgroundColor = 'khaki';
         break;
      default:
         el.style.backgroundColor = 'salmon';
   }
})
