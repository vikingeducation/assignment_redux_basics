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
