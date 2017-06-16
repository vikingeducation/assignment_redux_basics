export const ADD_ITEM = 'ADD_ITEM'
export const PURCHASE_ITEM = 'PURCHASE_ITEM'
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
export const SET_ORDER = 'SET_ORDER'


let id = 1;
export function addItem(data) {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      id: id++
    }
  }
}

export function purchaseItem(name) {
  return {
    type: PURCHASE_ITEM,
    data: name
  }
}

export function setPurchasedFilter(filter) {
  return {
    type: SET_PURCHASED_FILTER,
    data: filter
  }
}

export function setCategoryFilter(filter) {
  return {
    type: SET_CATEGORY_FILTER,
    data: filter
  }
}

export function setSortOrder(order) {
  return {
    type: SET_ORDER,
    data: order
  }
}
