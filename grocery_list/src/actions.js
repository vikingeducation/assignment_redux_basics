export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT_FILTER = 'SET_SORT_FILTER';

let nextGroceryProductId = 1;
export function addProduct(data) {
  return {
    type: ADD_PRODUCT,
    data: {
      ...data,
      id: nextGroceryProductId++
    }
  }
}

export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    data
  }
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  }
}

export function setCategoryFilter(data) {
  return {
    type: SET_CATEGORY_FILTER,
    data
  }
}

export function setSortFilter(data) {
  return {
    type: SET_SORT_FILTER,
    data
  }
}