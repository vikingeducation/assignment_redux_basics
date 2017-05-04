export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASED_FILTER = "SHOW_PURCHASED";
export const SET_CATEGORIES_FILTER = "SET_CATEGORIES_FILTER";
export const SORT_ITEMS = "SORT_ITEMS";

let nextItemId = 1;
export function addItem(data) {
  return {
    type: ADD_ITEM,
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

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  };
}

export function setCategoriesFilter(data) {
  return {
    type: SET_CATEGORIES_FILTER,
    data
  };
}

export function sortItems(data) {
  return {
    type: SORT_ITEMS,
    data
  };
}
