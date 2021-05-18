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

// const python = document.createElement('div');
// python.classList.add('courses', 'done');

let challenges = asabenehChallenges2020['challenges'];

challenges.forEach(challenge => {
   const newDiv = document.createElement('div');
   newDiv.classList.add('courses', challenge.status.toLowerCase())

   const item1 = document.createElement('span');
   if (challenge.githubUrl) {
      item1.innerHTML = `<a href="${challenge.githubUrl}">${challenge.name}</a>`
   }
   else {
      item1.textContent = challenge.name;
   }

   const item2 = document.createElement('details');
   const summary = document.createElement('summary');
   const ul = document.createElement('ul');

   ul.style.listStyleType = 'none';
   ul.style.padding = '0';
   summary.textContent = challenge.name.match(/(?<=30 Days Of )[\w &]*/gi);

   challenge.topics.forEach(el => {
      const li = document.createElement('li');
      li.textContent = el;
      ul.appendChild(li);
   });

   item2.appendChild(summary);
   item2.appendChild(ul);

   const item3 = document.createElement('span');
   item3.textContent = challenge.status;

   newDiv.appendChild(item1);
   newDiv.appendChild(item2);
   newDiv.appendChild(item3);
   wrapper.appendChild(newDiv);
});

const title = document.createElement('h3');

title.textContent = `
${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}
`;

title.style.cssText = `
font-size: 1em;
font-weight: bold;
margin-bottom: 0.2em;
`;
wrapper.appendChild(title);

const social = document.createElement('div');
social.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
`;
wrapper.appendChild(social);

asabenehChallenges2020.author.socialLinks.forEach(el => {
   if (el.src) {
      const a = document.createElement('a');
      const img = document.createElement('img');

      a.setAttribute('href', el.url);
      img.setAttribute('src', el.src);
      img.setAttribute('alt', el.social);
      img.setAttribute('width', '25px');
      img.setAttribute('height', '25px');
      img.setAttribute('alt', el.social);
      img.style.cssText = `
      display: block;
      margin: auto 0.2em;
      `;
      a.appendChild(img);
      social.appendChild(a);
   }
});

const about = document.createElement('p');
about.style.textAlign = 'center';
about.textContent = asabenehChallenges2020.author.bio;

wrapper.appendChild(about);

const lists = document.createElement('div');
lists.style.cssText = `
display: flex;
justify-content: space-around;
`;

const titles = document.createElement('div');
const titlesSpan = document.createElement('span');
titlesSpan.style.fontWeight = 'bold';
titlesSpan.textContent = 'Titles';

const titlesList = document.createElement('ul');

asabenehChallenges2020.author.titles.forEach(el => {
   const li = document.createElement('li');
   li.textContent = `${el[0]} ${el[1]}`;
   titlesList.appendChild(li);
});

titles.appendChild(titlesSpan);
titles.appendChild(titlesList);

const skills = document.createElement('div');
const skillsSpan = document.createElement('span');
skillsSpan.style.fontWeight = 'bold';
skillsSpan.textContent = 'Skills';

const skillsList = document.createElement('ul');

asabenehChallenges2020.author.skills.forEach(el => {
   const li = document.createElement('li');
   li.textContent = `+ ${el}`;
   skillsList.appendChild(li);
});

skills.appendChild(skillsSpan);
skills.appendChild(skillsList);

const qual = document.createElement('div');
const qualSpan = document.createElement('span');
qualSpan.style.fontWeight = 'bold';
qualSpan.textContent = 'Qualifications';

const qualList = document.createElement('ul');

asabenehChallenges2020.author.qualifications.forEach(el => {
   const li = document.createElement('li');
   li.textContent = `* ${el}`;
   qualList.appendChild(li);
});

qual.appendChild(qualSpan);
qual.appendChild(qualList);

lists.appendChild(titles);
lists.appendChild(skills);
lists.appendChild(qual);
wrapper.appendChild(lists);

const keywords = document.createElement('span');
keywords.style.fontWeight = 'bold';
keywords.textContent = 'Keywords';
keywords.style.marginLeft = '3em';
wrapper.appendChild(keywords);

const tags = document.createElement('div');
tags.style.cssText = `
margin: auto 3em;
displey: flex;
justify-content: space-around;
flex-wrap: wrap; 
`;

asabenehChallenges2020.keywords.forEach(el => {
   const kw = document.createElement('span');
   kw.textContent = `# ${el}`;
   kw.style.cssText = `
   display: inline-block;
   background-color: ${newColor()};
   border-radius: 10px;
   font-size: 0.7em;
   padding: 0px 3px;
   margin: auto 3px;
   `;
   tags.appendChild(kw);
});

wrapper.appendChild(tags);

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

