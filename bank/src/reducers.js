import {combineReducers} from 'redux'

import {CREATE_ACCOUNT,
        CHECK_ACCOUNT,
        DEPOSIT_MONEY,
        WITHDRAW_MONEY,
        TRANSFER_MONEY,
        SET_FILTER_TRANSACTIONS} from './actions'

function accountOps(state=[], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [
        ...state,
        action.data
      ]
    // case CHECK_ACCOUNT:
    //   for (let i=0; i < state.length; i++) {
    //     if (state[i].accountNo === action.data) {
    //       return state[i]
    //     }
    //   }
    case DEPOSIT_MONEY:
      console.log(state)
      return state.map((account) => {
        if (account.accountNo === action.data.accountNo) {
          return {
            ...account,
            balance: account.balance + action.data.value
          }
        }
        return account
      })
      case WITHDRAW_MONEY:
        return state.map((account) => {
          if (account.accountNo === action.data.accountNo) {
            return {
              ...account,
              balance: account.balance - action.data.value
            }
          }
          return account
        })
        case TRANSFER_MONEY:
          return state.map((account) => {
            if (account.accountNo === action.data.acc1) {
              return {
                ...account,
                balance: account.balance - action.data.value
              }
            } else if (account.accountNo === action.data.acc2) {
                return {
                  ...account,
                  balance: account.balance + action.data.value
                }
            }
            return account
          })
    default:
      return state
  }
}

function accountFilters(state='ALL_BY_ID', action) {
  switch (action.type) {
    case SET_FILTER_TRANSACTIONS:
      return action.data
    default:
      return state
  }
}


export const accountOperationsApp = combineReducers({
  accountOps,
  accountFilters
})
