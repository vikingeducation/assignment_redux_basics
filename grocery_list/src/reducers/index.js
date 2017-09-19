import { ACTION_ADD_ITEM, ACTION_PURCHASE_ITEM } from "../actions";

/*
 * items
 * id, name, amount, category, purchased
 */

const initialState = {
  items: []
};

const groceryListApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.data]
      };

    case ACTION_PURCHASE_ITEM:
      const items = state.items.map(item => {
        if (item.id === action.data) {
          item.purchased = true;
        }
        return item;
      });

      return {
        ...state,
        items
      };

    default:
      return state;
  }
};

export default groceryListApp;
