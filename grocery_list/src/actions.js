export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM'
export const PURCHASE_ITEM = 'PURCHASE_ITEM'
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER'
export const SET_CATEGORIES_FILTER = 'SET_CATEGORIES_FILTER'
export const SORT_BY_TYPE = 'SORT_BY_TYPE'

let listId = 1
export function addGroceryItem(data) {
  return {
    type: ADD_GROCERY_ITEM,
    data: {
      ...data,
      id: listId++
    }
  }
}

export function purchaseItem(data) {
  return {
    type: PURCHASE_ITEM,
    data
  }
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  }
}

export function setCategoriesFilter(data) {
  return {
    type: SET_CATEGORIES_FILTER,
    data
  }
}

export function setSorting(data) {
  return {
    type: SORT_BY_TYPE,
    data
  }
}
