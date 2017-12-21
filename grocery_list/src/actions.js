export const CREATE_ITEM = 'CREATE_ITEM';
export const PURCHASE_ITEM = 'PURCHASE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_AVAILABLE = 'SHOW_AVAILABLE';
export const SHOW_NOT_AVAILABLE = 'SHOW_NOT_AVAILABLE';

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

//======================
//FILTER
//=====================

export function showAll(data) {
  return {
    type: SHOW_ALL,
    data
  };
}

export function showAvailable(data) {
  return {
    type: SHOW_AVAILABLE,
    data
  };
}

export function showNotAvailable(data) {
  return {
    type: SHOW_NOT_AVAILABLE,
    data
  };
}
