console.log(asabenehChallenges2020)
const now = new Date();

const wrapper = document.getElementsByClassName('wrapper')[0];
const header = document.createElement('div');

const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const spanYear = document.createElement('span');

spanYear.id = 'year';
spanYear.textContent = '2020';

h1.textContent = 'Asabeneh Yetayeh challenges in ';
h1.appendChild(spanYear);

h3.innerHTML = '<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript">30DaysOfJavaScript Challenge</a>';

h2.innerHTML = `${time(now)}`;

wrapper.appendChild(h1);
wrapper.appendChild(h3);
wrapper.appendChild(h2);

let changeColor = setInterval(() => {
                     const now = new Date();
                     h2.innerHTML = `${time(now)}`;
                     h2.style.backgroundColor = newColor();
                     spanYear.style.color = newColor();
                  }, 1000);

function time(now) {
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

function newColor() {
   const rnd = () => 128 + Math.floor(Math.random() * 128)
   return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
}

