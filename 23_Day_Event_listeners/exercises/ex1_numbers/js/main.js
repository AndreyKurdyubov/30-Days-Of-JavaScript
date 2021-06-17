const wrapper = document.getElementsByClassName('wrapper')[0];
const div = document.createElement('div');
div.classList.add('block');

const numBlocks = 14;

for (let i = 1; i <= numBlocks; i++) {
   const newDiv = div.cloneNode(false);
   newDiv.textContent = i;
   newDiv.style.color = 'deepblue';
   wrapper.appendChild(newDiv);
}

addEmpty(numBlocks);

function addEmpty(numBlocks) {
   for (let i = 1; i <= 6 - numBlocks % 6; i++) {
      const newDiv = div.cloneNode(false);
      newDiv.classList.add('empty');
      wrapper.appendChild(newDiv);
   }
}