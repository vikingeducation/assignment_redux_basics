import { ACTION_ADD_ITEM, ACTION_PURCHASE_ITEM } from './actions';

/*
 * items
 * id, name, amount, category, purchased
 */


const initialState = {
  items: []
}

const groceryListApp(state = initialState, action) {
  switch (action.type) {
    case ACTION_ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.data
        ]
      }
    break;
    case ACTION_PURCHASE_ITEM:
      const item = state.items.find(item => item.id === action.data.id);
      if (!item) return state;
      item.purchased = true;
      return {
        ...state,

      }
    break;

  }
}
