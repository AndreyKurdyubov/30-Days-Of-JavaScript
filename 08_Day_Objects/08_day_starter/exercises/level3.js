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