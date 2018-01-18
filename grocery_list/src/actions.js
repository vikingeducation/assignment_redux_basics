export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM'
export const SHOW_PURCHASED_FILTER = 'SHOW_PURCHASED_FILTER'
export const SHOW_UNPURCHASED_FILTER = 'SHOW_UNPURCHASED_FILTER'
export const SHOW_ALL_CATEGORIES_FILTER = 'SHOW_ALL_CATEGORIES_FILTER'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_DESCRIPTION = 'SORT_BY_DESCRIPTION'

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

export function showPurchasedFilter(data) {
  return {
    type: SHOW_PURCHASED_FILTER,
    data
  }
}

export function showNotPurchasedFilter(data) {
  return {
    type: SHOW_UNPURCHASED_FILTER,
    data
  }
}

export function showAllCategoriesFilter(data) {
  return {
    type: SHOW_ALL_CATEGORIES_FILTER,
    data
  }
}

export function sortByDescription(data) {
  return {
    type: SORT_BY_DESCRIPTION,
    data
  }
}

export function sortByName(data) {
  return {
    type: SORT_BY_NAME,
    data
  }
}
