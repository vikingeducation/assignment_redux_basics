import {
  ACTION_CREATE_ACCOUNT,
  ACTION_WITHDRAW,
  ACTION_DEPOSIT,
  ACTION_TRANSFER
} from "../actions";

const initialState = {
  accounts: []
};

const bankApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CREATE_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.data]
      };

    case ACTION_WITHDRAW:
    case ACTION_DEPOSIT:
      const accounts = state.accounts.map(account => {
        if (account.id === action.data.id) {
          const amount = action.data.amount;
          account.funds += action.type === ACTION_WITHDRAW ? -amount : amount;
          account.transactions.push(action.data);
        }
        return account;
      });
      return {
        ...state,
        accounts
      };
  }
};
