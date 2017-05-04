export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";

let itemId = 1;
export function addItem(data) {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      id: itemId++,
      purchased: false
    }
  };
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
}
