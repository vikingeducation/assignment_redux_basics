export const ACTION_ADD_ITEM = 'ACTION_ADD_ITEM';
export const ACTION_PURCHASE_ITEM = 'ACTION_PURCHASE_ITEM';

const addItem = data => ({ type: ACTION_ADD_ITEM,  data });
const purchaseItem = data => ({ type: ACTION_PURCHASE_ITEM, data});

export default {
  addItem,
  purchaseItem
}
