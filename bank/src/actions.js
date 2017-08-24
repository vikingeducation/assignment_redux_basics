// Grocery Actions
export const ADD_GROCERY = "ADD_GROCERY";
export const ADD_GROCERIES = "ADD_GROCERIES";
export const PURCHASE_GROCERY = "PURCHASE_GROCERY";
export const UPDATE_GROCERY = "UPDATE_GROCERY";
export const DELETE_GROCERY = "DELETE_GROCERY";
export const SET_PURCHASE_FILTER = "SET_PURCHASE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

// Action Factories
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

export function addGroceries(data) {
  return {
    type: ADD_GROCERIES,
    data: data.map(grocery => {
      return {
        ...grocery,
        id: nextGroceryId++
      };
    })
  };
}

export function purchaseGrocery(id) {
  return {
    type: PURCHASE_GROCERY,
    data: id
  };
}

export function updateGrocery(id, data) {
  return {
    type: UPDATE_GROCERY,
    data: { ...data, id }
  };
}

export function deleteGrocery(id) {
  return {
    type: DELETE_GROCERY,
    data: id
  };
}

export function setCategoryFilter(data) {
  return {
    type: SET_CATEGORY_FILTER,
    data
  };
}

export function setPurchaseFilter(data) {
  return {
    type: SET_PURCHASE_FILTER,
    data
  };
}
