const now = new Date();

console.log('now.getFullYear() :>> ', now.getFullYear());
console.log('now.getMonth() :>> ', now.getMonth());
console.log('now.getDate() :>> ', now.getDate());
console.log('now.getDay() :>> ', now.getDay());
console.log('now :>> ', now);
console.log('now.getHours():now.getMinutes():now.getSeconds() :>> ', `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
console.log('now.getTime() :>> ', now.getTime());
console.log('Date.now() :>> ', Date.now());

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
const seconds = now.getSeconds()

let add_0 = function (time) {
   return time < 10 ? `0${time}` : time
}


console.log(`${date}/${month}/${year} ${add_0(hours)}:${add_0(minutes)}:${add_0(seconds)}`) // 4/1/2020 0:56


const now = new Date();
const year = now.getFullYear();
const month = addZeros(now.getMonth() + 1);
const day = addZeros(now.getDate());
const hour = addZeros(now.getHours());
const minute = addZeros(now.getMinutes());
const second = addZeros(now.getSeconds());

console.log('Date() :>> ', now);
console.log('`${year}:${month}:${day}` :>> ', `${year}:${month}:${day}`);
console.log('Date and Time :>> ', `${year}-${month}-${day} ${hour}:${minute}:${second}`);
