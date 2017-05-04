User Account:
name = STRING
account# = #
balance = #
transaction history=[ { balance credit/debit amount date} ]


{
[
  { accountid, 
    balance, 
    transactions: [
    {date, to, from, type, amount}
    ]
  }
  { accountid,
  balance,
  transactions: [] }
],

selectedAccount: {}


}