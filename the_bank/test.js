let accounts = [
  {
    id: 1,
    amount: 1000
  },
  {
    id: 2,
    amount: 10000
  },
  {
    id: 3,
    amount: 10001
  }
];

console.log("accounts before map", accounts)


let newAccounts = accounts.map(account => {
  if (account.id === 1) {
    return {
    	id: account.id,
    	amount: account.amount + 27
    };
  }
  return account;
})


console.log("newAccounts", newAccounts);
console.log("accounts after map", accounts)


console.log(Date.now())