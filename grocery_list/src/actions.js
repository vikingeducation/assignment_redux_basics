const CREATE_GROCERY_LIST = 'CREATE_GROCERY_LIST'

const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM'
const SET_LIST_FILTER = 'SET_LIST_FILTER'
const SORT_ITEMS = 'SORT_ITEMS'

let listId = 1
export function createGroceryList(data) {
  return {
    type: CREATE_GROCERY_LIST,
    data: {
      ...data,
      id: listId++
    }
  }
}
