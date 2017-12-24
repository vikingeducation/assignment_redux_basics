export const ADD_ITEM = 'ADD_ITEM';
export const BUY_ITEM = 'BUY_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT_BY = 'SET_SORT_BY';

let nextItemId = 1;
export function createItem(data) {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      id: nextItemId++
    }
  };
}

export function buyItem(id) {
  return {
    type: BUY_ITEM,
    data: id
  };
}

export function updateItem(data) {
  return {
    type: UPDATE_ITEM,
    data
  };
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  };
}

export function setCategoryFilter(data) {
  return {
    type: SET_CATEGORY_FILTER,
    data
  };
}

export function setSortBy(data) {
  return {
    type: SET_SORT_BY,
    data
  };
}
