// Set constants for action types
export const ADD_GROCERY = "ADD_GROCERY";
export const PURCHASE_GROCERY = "PURCHASE_GROCERY";
export const UPDATE_GROCERY = "UPDATE_GROCERY";
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
export const SET_SORT_GROCERY = "SET_SORT_GROCERY";
export const FILTER_GROCERY = "FILTER_GROCERY";

// Action creators for each action

// Set up an incrementing id for each Grocery
let nextGroceryId = 1;
export function addGrocery(data) {
  return {
    type: ADD_GROCERY,
    data: {
      ...data,
      id: nextGroceryId++
    }
  };
}

export function purchaseGrocery(id) {
  return {
    type: PURCHASE_GROCERY,
    data: id
  };
}

export function updateGrocery(data) {
  return {
    type: UPDATE_GROCERY,
    data
  };
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  };
}

export function setSortGrocery(data) {
  return {
    type: SET_SORT_GROCERY,
    data
  };
}

export function filterGrocery(data) {
  return {
    type: FILTER_GROCERY,
    data
  };
}
