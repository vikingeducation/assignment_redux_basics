// Set constants for action types
export const CREATE_Grocery = "CREATE_Grocery";
export const ADOPT_Grocery = "ADOPT_Grocery";
export const UPDATE_Grocery = "UPDATE_Grocery";
export const SET_AVAILABILITY_FILTER = "SET_AVAILABILITY_FILTER";

// Action creators for each action

// Set up an incrementing id for each Grocery
let nextGroceryId = 1;
export function createGrocery(data) {
  return {
    type: CREATE_Grocery,
    data: {
      ...data,
      id: nextGroceryId++
    }
  };
}

export function purchaseGrocery(id) {
  return {
    type: ADOPT_Grocery,
    data: id
  };
}

export function updateGrocery(data) {
  return {
    type: UPDATE_Grocery,
    data
  };
}

export function setPurchaseFilter(data) {
  return {
    type: SET_AVAILABILITY_FILTER,
    data
  };
}

export function sortGrocery(data) {
  return {
    type: SET_AVAILABILITY_FILTER,
    data
  };
}
