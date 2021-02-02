import React from "react";
import "./App.scss";
import { SearchFormContainer } from "./components/SearchFormContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import RestaurantContainer from "./components/RestaurantContainer";

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1>Zomato Restaurants</h1>
                    <SearchFormContainer />
                </header>
                <main className="main">
                    <RestaurantContainer />
                </main>
            </div>
        </Provider>
    );
};

export default App;
