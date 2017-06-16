import { SET_ACCOUNT, DEPOSIT, WITHDRAWAL, TRANSFER, FILTER } from './actions'

let accounts = [
  { id: 1, balance: 1000 },
  { id: 2, balance: 2000 },
  { id: 3, balance: 3000 }
]

const initialState = {
  accounts: accounts,
  currentAccount: '',
  filtered: [],
  transactions: {},
}

let transactionId = 1
export function bank(state = initialState, action) {
  let accounts = [...state.accounts]
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        currentAccount: action.data,
      }
    case DEPOSIT:
    case WITHDRAWAL:
      let account = accounts.filter((account) => {
        return account.id === state.currentAccount
      })
      account = account[0]
      account.balance += action.data
      return {
        ...state,
        accounts: accounts,
        transactions: addTransaction(state, action)
      }
    case TRANSFER:
      let transferer = accounts.filter((account) => {
        return account.id === state.currentAccount
      })
      let recipient = accounts.filter((account) => {
        return account.id === action.data.to
      })
      recipient[0].balance += action.data.amount
      transferer[0].balance -= action.data.amount
      return {
        ...state,
        accounts: accounts,
        transactions: addTransaction(state, action)
      }
    case FILTER:
      let filtered = state.transactions.filter((transaction) => {
        return transaction.date >= action.data.start && transaction.date <= action.data.end
      })
      return {
        ...state,
        filtered: filtered
      }
    default:
      return state
  }
}

function addTransaction(state, action) {
  return [
    ...state.transactions, {
      id: transactionId++,
      type: action.type,
      amount: action.data,
      date: new Date(),
      account: state.currentAccount,
    }
  ]
}
