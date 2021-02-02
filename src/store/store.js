import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
// import { myCustomApiService } from "./api";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: myCustomApiService,
//       },
//       serializableCheck: false,
//     }),
// })


const store = configureStore({
  reducer: rootReducer
})

// document.getElementById("search_submit").addEventListener("click", () => {
//   store.dispatch(get_data())
// });

export default store;