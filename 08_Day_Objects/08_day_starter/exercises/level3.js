console.log('============== level3 starts here ===============');

const personAccount = {
   firstName: 'Andrey',
   lastName: 'Kurdyubov',
   incomes: [23, 4232, 23, 23],
   expenses: [23, 24, 65, 73, 23],
   addIncome: function (income) {
      this.incomes.push(income);
   },
   addExpense: function (expense) {
      this.expenses.push(expense);
   },
   totalIncome: function () {
      let totInc = 0;
      for (const income of this.incomes) {
         totInc += income;
      }
      return totInc
   },
   totalExpense: function () {
      let totExp = 0;
      for (const expense of this.expenses) {
         totExp += expense;
      }
      return totExp
   },
   accountBalance: function () {
      return this.totalIncome() - this.totalExpense()
   },
   accountInfo: function () {
      return `${this.firstName} ${this.lastName}: ${this.accountBalance()}`
   }
}

console.log('personAccount :>> ', personAccount);
console.log('personAccount.totalIncome() :>> ', personAccount.totalIncome());
console.log('personAccount.accountInfo() :>> ', personAccount.accountInfo());
personAccount.addExpense(10000);
console.log('personAccount.totalExpense() :>> ', personAccount.totalExpense());
console.log('personAccount.accountInfo() :>> ', personAccount.accountInfo());

const users0 = [
   {
       _id: 'ab12ex',
       username: 'Alex',
       email: 'alex@alex.com',
       password: '123123',
       createdAt:'08/01/2020 9:00 AM',
       isLoggedIn: false
   },
   {
       _id: 'fg12cy',
       username: 'Asab',
       email: 'asab@asab.com',
       password: '123456',
       createdAt:'08/01/2020 9:30 AM',
       isLoggedIn: true
   },
   {
       _id: 'zwf8md',
       username: 'Brook',
       email: 'brook@brook.com',
       password: '123111',
       createdAt:'08/01/2020 9:45 AM',
       isLoggedIn: true
   },
   {
       _id: 'eefamr',
       username: 'Martha',
       email: 'martha@martha.com',
       password: '123222',
       createdAt:'08/01/2020 9:50 AM',
       isLoggedIn: false
   },
   {
       _id: 'ghderc',
       username: 'Thomas',
       email: 'thomas@thomas.com',
       password: '123333',
       createdAt:'08/01/2020 10:00 AM',
       isLoggedIn: false
   }
   ];

   const products = [
 {
   _id: 'eedfcf',
   name: 'mobile phone',
   description: 'Huawei Honor',
   price: 200,
   ratings: [
     { userId: 'fg12cy', rate: 5 },
     { userId: 'zwf8md', rate: 4.5 }
   ],
   likes: []
 },
 {
   _id: 'aegfal',
   name: 'Laptop',
   description: 'MacPro: System Darwin',
   price: 2500,
   ratings: [],
   likes: ['fg12cy']
 },
 {
   _id: 'hedfcg',
   name: 'TV',
   description: 'Smart TV:Procaster',
   price: 400,
   ratings: [{ userId: 'fg12cy', rate: 5 }],
   likes: ['fg12cy']
 }
]

// signUp and signIn
const now = new Date();
const ids = [];
const emails = [];

for (const user of users0) {
   ids.push(user._id);
   emails.push(user.email)
}

function idGen() {
   const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
   let id = ""
   for (let i = 0; i < 6; i++) {
      id = id.concat(alphabet[Math.floor(Math.random() * alphabet.length)])
   }
   return id
}

function createdAt(now) {
   const year = now.getFullYear();
   const month = now.getMonth() + 1;
   const day = now.getDate();
   let hour = now.getHours()
   const minute = now.getMinutes()

   let ampm = 'AM';
   if (hour > 12) {
      hour -= 12;
      ampm = 'PM';
   }

   return `${day}/${month}/${year} ${hour}:${minute} ${ampm}`
}

function signUp(username, email, password) {
   let newId = idGen();
   while (ids.includes(newId)) {
      newId = idGen();
   }
   ids.push(newId);

   const newUser = {
      _id: newId,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt(now),
      isLoggedIn: false,
  }

   users0.push(newUser);
}

function signIn(email, password) {
   /*
   {
       _id: 'ab12ex',
       username: 'Alex',
       email: 'alex@alex.com',
       password: '123123',
       createdAt:'08/01/2020 9:00 AM',
       isLoggedIn: false
   }
   */
   for (const user of users0) {
      if (user.email === email && user.password === password) {
         user.isLoggedIn = true; 
         console.log(`Hello, ${user.username}!`);
         return null
      }
   }
   console.log('email or password is wrong!');
   return null
}

class persona {
   constructor(username, id) {
      this.username = username;
      this.id = id
   }

   rateProduct(productName, rate) {
      const rating = {
         userId: this.id,
         rate: rate
      }

      for (const product of products) {
         if (product.name === productName) {
            product.ratings.push(rating)
         }
      }
   }

   likeProduct(productName) {
      for (const product of products) {
         if (product.name === productName) {
            if (product.likes.includes(this.id)) {
               const pos = product.likes.indexOf(this.id);
               product.likes.splice(pos, 1);
            } else product.likes.push(this.id);
         }
      } 
   }
}

function averageRating(productName) {
   let rating = 0;
   let countRates = 0;
   for (const prod of products) {
      if (prod.name === productName) {
         for (const rateObj of prod.ratings) {
            countRates += 1;
            rating += rateObj.rate;
         }
      }
   }
   console.log(`${productName} average rating is ${(rating / countRates).toFixed(2)}`);
}

function main() {
   const username = prompt('Enter your name');
   let email;

   do {
      email = prompt('Enter email');
      if (emails.includes(email)) {
         alert('This email is being used')
      }
   } while (emails.includes(email))
   emails.push(email);
   const password = prompt('Enter password')

   signUp(username, email, password);

   signIn(email, password);
   signIn('sd', 'sds');

   let userId;
   for (const user of users0) {
      if (user.username === username) {
         userId = user._id;
      }
   }

   pers = new persona(username, userId);
   pers.rateProduct('TV', 4) ;
   pers.likeProduct('Laptop')
   pers.likeProduct('TV')
   pers.likeProduct('TV')
   console.log('pers :>> ', pers);
   console.log('products :>> ', products);
   averageRating('TV')
}

console.log('now.date() :>> ', now.getDate());
console.log('idGen() :>> ', idGen());
console.log('ids :>> ', ids);
console.log('emails :>> ', emails);
console.log('createdAt(now) :>> ', createdAt(now));
console.log('users0 :>> ', users0);

main()

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

/*
{
   _id: 'hedfcg',
   name: 'TV',
   description: 'Smart TV:Procaster',
   price: 400,
   ratings: [{ userId: 'fg12cy', rate: 5 }],
   likes: ['fg12cy']
 }
 */