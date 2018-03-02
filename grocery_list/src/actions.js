export const ADD_ITEM = 'ADD_ITEM';
export const PURCHASE_ITEM = 'PURCHASE_ITEM';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_PURCHASE_FILTER = 'SET_PURCHASE_FILTER';
export const SET_SORT = 'SET_SORT';

let nextItemId = 1;
export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload: {
      ...payload,
      id: nextItemId++,
    }
  }
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    payload: id,
  }
}

export function setCategoryFilter(payload) {
  return {
    type: SET_CATEGORY_FILTER,
    payload,
  }
}

export function setPurchaseFilter(payload) {
  return {
    type: SET_PURCHASE_FILTER,
    payload,
  }
}

export function setSortFilter(payload) {
  return {
    type: SET_SORT,
    payload,
  }
}