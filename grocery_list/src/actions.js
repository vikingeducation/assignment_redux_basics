export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";
export const UPDATE_GROCERY_ITEM = "UPDATE_GROCERY_ITEM";
export const FILTER_BY_PURCHASED = "FILTER_BY_PURCHASED";
export const FILTER_BY_NOT_PURCHASED = "FILTER_BY_NOT_PURCHASED";
export const SET_SORT = "SET_SORT";
export const SET_FILTER = "SET_FILTER";

export const createGroceryItem = data => {
  return {
    type: ADD_GROCERY_ITEM,
    data
  };
};

export const markPurchased = data => {
  return {
    type: UPDATE_GROCERY_ITEM,
    data
  };
};

export const filterByPurchased = data => {
  return {
    type: FILTER_BY_PURCHASED,
    data
  };
};

export const setFilter = data => {
  return {
    type: SET_FILTER,
    data
  };
};

export const setSort = data => {
  return {
    type: SET_SORT,
    data
  };
};
