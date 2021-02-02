import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SearchFormContainer } from "./SearchFormContainer"

// TODO : move this store to test utils
const initialState = {
    search: {
        city: "",
        refine: ""
    },
    restaurant : {
        loading: false,
        restaurants: [],
        error: ""
    }
};

const mockStore = configureStore();
const defaultStore = mockStore(initialState);


describe("Search Form", () => {

    it("render filter layout for restaurant", () => {
        const restaurantFilter = shallow(
            <Provider store={defaultStore}>
                <SearchFormContainer />
            </Provider>);
        expect(restaurantFilter).toMatchSnapshot();
    });
});
