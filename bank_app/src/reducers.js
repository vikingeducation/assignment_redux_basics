const initialState = {
  accounts:[
  {
    id: 1,
    balance: 100,
    owner: "Batman"
  },
  {
    id: 2,
    balance: 100,
    owner: "Aquaman"
  },
  {
    id: 3,
    balance: 100,
    owner: "Wonder Woman"
  },
  ],
  transactions: [
    {
      id: 1
      origin: null,
      destination: null,
      amount: null,
      date: new Date()
    },

  ],
  filterStart: new Date(2000, 0, 1),
  filterEnd: new Date(),
  selectedAccount: 1,
}

const SELECT_ACCOUNT = "SELECT_ACCOUNT";
const DEPOSIT_TO_ACCOUNT = "DEPOSIT_TO_ACCOUNT";
const WITHDRAW_FROM_ACCOUNT = "WITHDRAW_FROM_ACCOUNT";
const TRANSFER = "TRANSFER";
const SET_DATE_FILTER = "SET_DATE_FILTER";
const SET_FILTER_START = "SET_FILTER_START";
const SET_FILTER_END = "SET_FILTER_END";

function bankApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.data,
      };
    case 


}








