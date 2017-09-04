import {
  CREATE_ACCOUNT,
  DEPOSIT,
  WITHDRAW,
  VIEW_ACCOUNT,
  TRANSFER
} from "../actions/index";

let initialState = [
  {
    owner: "Test Test",
    amount: 1,
    id: 0,
    transfers: []
  }
];

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case DEPOSIT:
      return state.map(account => {
        if (account.id === action.data.id) {
          let newAmount = account.amount + action.data.amount;
          return {
            ...account,
            amount: newAmount
          };
        }
        return account;
      });
    case WITHDRAW:
      return state.map(account => {
        if (account.id === action.data.id) {
          let newAmount = account.amount - action.data.amount;
          return {
            ...account,
            amount: newAmount
          };
        }
        return account;
      });
    case VIEW_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data) {
          return {
            ...account,
            viewing: true
          };
        }
        return account;
      });

    case TRANSFER:
      return state.map(account => {
        if (account.id === action.data.id) {
          let newAmount = account.amount - action.data.amount;
          account.transfers.push({
            date: new Date(),
            recipient: action.data.recipient,
            amount: action.data.amount,
            sender: true
          });
          return {
            ...account,
            amount: newAmount
          };
        }
        if (account.id === action.data.recipient) {
          let newAmount = account.amount + action.data.amount;
          account.transfers.push({
            date: new Date(),
            transferrer: action.data.id,
            amount: action.data.amount,
            receiver: false
          });
          return {
            ...account,
            amount: newAmount
          };
        }
        return account;
      });
    default:
      return state;
  }
};

export default accounts;
