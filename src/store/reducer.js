import { combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from "./restaurant/restaurantReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  restaurant: restaurantReducer
})

export default rootReducer;
