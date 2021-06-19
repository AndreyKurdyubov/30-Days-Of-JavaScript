const wrapper = document.getElementsByClassName('wrapper')[0];
const div = document.createElement('div');
div.classList.add('block');

const label = document.getElementsByTagName('label')[0];
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
   if (isNaN(input.value)) {
      label.textContent = 'Input number';
   }
   else {
      label.textContent = '';
      blocks(input.value);
   }
})

let numBlocks = 6;
blocks(numBlocks);

function blocks(numBlocks) {
   wrapper.innerHTML = "";
   for (let i = 1; i <= numBlocks; i++) {
      const newDiv = div.cloneNode(false);
      newDiv.textContent = i;
      if (isPrime(i)) {
         newDiv.style.color = 'skyblue';
         newDiv.style.backgroundColor = 'salmon';
      }
      else newDiv.style.color = 'deepblue';
      wrapper.appendChild(newDiv);
   }

   addEmpty(numBlocks);
}

function addEmpty(numBlocks) {
   if (numBlocks % 6 !== 0) {
      for (let i = 1; i <= 6 - numBlocks % 6; i++) {
         const newDiv = div.cloneNode(false);
         newDiv.classList.add('empty');
         wrapper.appendChild(newDiv);
      }
   }
}

function isPrime(num) {
   if (num === 2) return true
   else if (num < 2 || num % 2 === 0) return false

   const sqroot = Math.floor(Math.sqrt(num));
   let k = 3;
   while (k <= sqroot) {
      if (num % k === 0) return false;
      k += 2;
   }
   return true
}