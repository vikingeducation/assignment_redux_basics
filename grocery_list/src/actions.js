// const action = {
//   type: 'ADD_ITEM',
//   payload: {
//     name: 'bananas',
//     description: 'Squishy things in yellow suits',
//     cost: null,
//     category: null,
//     purchased: false,
//   }
// };

export const ADD_ITEM = 'ADD_ITEM';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_PURCHASE_FILTER = 'SET_PURCHASE_FILTER';

let nextItemId = 1;
export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload: {
      ...payload,
      id: nextItemId++
    }
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