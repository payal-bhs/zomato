import { SEARCH_ALL } from "./searchActions";

const initialState = {
  city: "",
  refine: ""
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ALL.type:
            return {
                ...state,
                city: action.payload.city,
                refine: action.payload.refine
            }
        default: return state;
    }
}

export default searchReducer;
