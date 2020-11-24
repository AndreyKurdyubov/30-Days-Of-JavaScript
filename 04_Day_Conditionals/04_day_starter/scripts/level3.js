let monthDays = {
   january: 31,
   february: 28,
   march: 31,
   april: 30,
   may: 31,
   june: 30,
   july: 31,
   august: 31,
   september: 30,
   october: 31,
   november: 30,
   december: 31,
}

do {
   let month = prompt('input a month', 'may').toLowerCase();

   if (!(month in monthDays)) {
      console.log('Wrong input!');
      break;
   } else if (month != 'february')
      console.log(`In ${month} there is ${monthDays[month]} days`);
   else
      console.log(`In ${month} there is ${monthDays[month]} days (29 in leap year)`);
}
while (true)