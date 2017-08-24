import { combineReducers } from "redux";
// import actions here

const groceryListSchema = [
  {
    name: "potatoes",
    description: "Farm-fresh ground apples",
    amount: 2,
    category: "produce",
    purchased: true
  }
];

const purchasedFilterSchema = "SHOW_ALL"; // SHOW_{PUCHASED, NOT_PURCHASED, ALL}

const categoryFilterSchema = "SHOW_ALL"; // SHOW_{CATEGORY_[name], ALL}
