// create action constants to export
export const ADD_ITEM = "ADD_ITEM";
export const PURCHASED = "PURCHASED";
export const SET_FILTER = "SET_FILTER";
export const SORT = "SORT";

//to set id numbers for items on list
let itemId = 1;

//create action creator functions

//add new item to list with
//  name, description, optionas(amount, category)
//
export function addItem(data) {
	return {
		type: ADD_ITEM,
		data: {
			...data,
			id: itemId++
		}
	};
}
//  indicate that a item has been purchased
export function purchased() {
	return {
		type: PURCHASED,
		data: {}
	};
}
//  filter purchased/ not purchased, all, categories
//
//  sort by name

//shape of grocery list object
/*
filters: {
  all: 'All',
  purchased: 'Purchased',
  unpurchased: 'Unpurchased',
}

groceries_list: [
  {
    name: apples,
    description: diet,
    category: fruit,
    amount: 5,
  }
]
*/
