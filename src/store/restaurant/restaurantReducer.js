import {
    FETCH_RESTAURANT_REQUEST,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE
} from "./restaurantTypes";

const initialState = {
    loading: false,
    restaurants: [],
    error: ""
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_RESTAURANT_SUCCESS:
      return {
        loading: false,
        restaurants: action.payload,
        error: ""
      }
    case FETCH_RESTAURANT_FAILURE:
      return {
        loading: false,
        restaurants: [],
        error: action.payload
      }
    default: return state
  }
}

export default restaurantReducer;
