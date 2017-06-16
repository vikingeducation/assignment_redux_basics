export const SET_ACCOUNT = 'SET_ACCOUNT'
export const DEPOSIT = 'DEPOSIT'
export const WITHDRAWAL = 'WITHDRAWAL'
export const TRANSFER = 'TRANSFER'
export const FILTER = 'FILTER'


export function setAccount(id) {
  return {
    type: SET_ACCOUNT,
    data: id
  }
}

export function deposit(amount) {
  return {
    type: DEPOSIT,
    data: amount
  }
}

export function withdraw(amount) {
  return {
    type: WITHDRAWAL,
    data: amount * -1
  }
}

export function transfer(to, amount) {
  return {
    type: TRANSFER,
    data: {
      to: to,
      amount: amount
    }
  }
}

export function filter(start, end) {
  return {
    type: FILTER,
    data: {
      start,
      end
    }
  }
}
