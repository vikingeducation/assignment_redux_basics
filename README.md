# assignment_redux_basics
Milk, eggs, ice cream and money, money, money!


Grocery Data Model:
As a bank employee, I want to...
  Select an account to view.
  Deposit money into an account.
  Withdraw money from an account.
  Transfer money between accounts.
  Filter transactions by date (using a start and end date) for an account.

state_shape:
{
  dateFilter: {
    START: "JAN-01-1900",
    END: "JUL-1-2017"
  }
  selectedAccount: {
    accountId: 1
  }
  accounts: []
  transactions: [
    {
      // DEPOSIT
      kind: 'deposit'
      amount: 1000
      owner: accountId
    },
    {
      kind: 'withdrawal'
      amount: 1000
      owner: accountId
    },
    {
      kind: 'transfer',
      amount: 1000,
      owner: accountId,
      sender: accountId
    }

}