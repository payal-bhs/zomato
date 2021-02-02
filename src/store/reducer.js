import { combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from "./restaurant/restaurantReducer";
import searchReducer from "./search/searchReducer";

// const make_request = createAction('MAKE_REQUEST');
// export const get_data = createAction('GET_DATA');
// const error = createAction('ERROR');
// const search_query = createAction('SEARCH_QUERY');
// const search_result = createAction('SEARCH_RESULT');

// const rootReducer = (state = 0, action) => {
//   switch (action.type) {
//     case make_request.type:
//       return state + 1;
//     case get_data.type:
//       return state - 1;
//     case error.type:
//       return state + 1;
//     case search_query.type:
//       return state - 1;
//     case search_result.type:
//       return state - 1;
//     default:
//       return state
//   }
// };

// export default rootReducer;

const rootReducer = combineReducers({
  search: searchReducer,
  restaurant: restaurantReducer
})

export default rootReducer;
