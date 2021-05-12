// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const body = document.body;

const wrap = body.getElementsByClassName('wrapper')[0];

wrap.innerHTML = '';

for (let i = 0; i <= 101; i++) {
   const block = document.createElement('div');
   block.className = 'block';
   block.textContent = i;
   if (i % 2 === 0) {
      block.style.backgroundColor = 'green';
   }
   if (isPrime(i)) {
      block.style.backgroundColor = 'red';
   }
   wrap.appendChild(block);
}

function isPrime(num) {
   if (num === 2) return true;
   if (num < 2 || num % 2 === 0) return false;

   const sqr = Math.floor(Math.sqrt(num));
   let test = 3;
   while (test <= sqr) {
      if (num % test === 0) return false;
      test += 2;
   }
   return true;
}