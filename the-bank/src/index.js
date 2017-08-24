import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

let accounts = [
  {
    id: 0,
    balance: 100,
    transactionsFilter: "SHOW_ALL",
    transactions: [
      {
        date: 2017 - 12 - 1,
        amount: +100
      }
    ]
  },
  {
    id: 0,
    balance: 100,
    transactionsFilter: "SHOW_ALL",
    transactions: [
      {
        date: 2017 - 12 - 1,
        amount: +100
      }
    ]
  }
];

/*
Select an account to view.
Deposit money into an account.
Withdraw money from an account.
Transfer money between accounts.
Filter transactions by date (using a start and end date) for an account.
*/

// STORE;
/*
{
  accounts: [
    {
      id: 0,
      balance: 100,
      transactionsFilter: "SHOW_ALL",
      transactions: [
        {
          date: 2017 - 12 - 1,
          amount: +100
        }
      ]
    },
    {
      id: 0,
      balance: 100,
      transactionsFilter: "SHOW_ALL",
      transactions: [
        {
          date: 2017 - 12 - 1,
          amount: +100
        }
      ]
    }
  ];
}
*/
