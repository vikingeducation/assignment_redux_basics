export const ACTION_ADD_ITEM = "ACTION_ADD_ITEM";
export const ACTION_PURCHASE_ITEM = "ACTION_PURCHASE_ITEM";

let itemId = 1;

export const addItem = data => ({
  type: ACTION_ADD_ITEM,
  data: {
    ...data,
    id: itemId++
  }
});

export const purchaseItem = data => ({ type: ACTION_PURCHASE_ITEM, data });
