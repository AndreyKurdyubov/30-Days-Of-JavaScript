// this is your main.js script
function addZeros(x, leng = 2) {
   // leng = 2 for hours, minutes and seconds, 3 for milliseconds 
   return "000".concat(x).slice(-leng);
}

function time() {
   const now = new Date();
   const year = now.getFullYear();
   const month = addZeros(now.getMonth() + 1);
   const day = addZeros(now.getDate());
   const hour = addZeros(now.getHours());
   const minute = addZeros(now.getMinutes());
   const second = addZeros(now.getSeconds());

   document.getElementById('time').innerHTML = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

setInterval(time, 1000);

let fullYears = prompt('Enter full years', 18);
let permission = fullYears >= 18 ? true : false;

if (permission) {
   document.getElementById('permission').innerHTML = 'you are old enough to drive a car';
}
else {
   document.getElementById('permission').innerHTML = `you can drive a car in ${18 - fullYears} years`;
}
