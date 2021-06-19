document.addEventListener('keydown', e => {
   const banner = document.querySelector('.banner');
   banner.innerHTML = `You pressed ${e.key}`;

   const code = document.querySelector('.code');
   code.style.visibility = 'visible';
   code.innerHTML = `${e.keyCode}`;
})