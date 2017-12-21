export const CREATE_ITEM = "CREATE_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const SET_AVAILABILITY_FILTER = "SET_AVAILABILITY_FILTER";

let nextItemId = 1;
export function createItem(data) {
  return {
    type: CREATE_ITEM,
    data: {
      ...data,
      id: nextItemId++
    }
  };
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
}

export function updateItem(data) {
  return {
    type: UPDATE_ITEM,
    data
  };
}

export function setAvailabilityFilter(data) {
  return {
    type: SET_AVAILABILITY_FILTER,
    data
  };
}
