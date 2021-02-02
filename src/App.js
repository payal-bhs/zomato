import React from "react";
// import React, { useState, useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { SearchFormContainer } from "./components/SearchFormContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import RestaurantContainer from "./components/RestaurantContainer";

const App = () => {
    // const [dimensions, setDimensions] = useState({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // });

    // useEffect(() => {
    //     const debouncedHandleResize = debounce(function handleResize() {
    //         setDimensions({
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         });
    //     }, 1000);
    //     window.addEventListener("resize", debouncedHandleResize);

    //     return _ => {
    //         window.removeEventListener("resize", debouncedHandleResize);
    //     };
    // });
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    {/* <Counter /> */}
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

// const debounce = (fn, ms) => {
//     let timer;
//     return _ => {
//         clearTimeout(timer);
//         timer = setTimeout(_ => {
//             timer = null;
//             fn.apply(this, arguments);
//         }, ms);
//     };
// };

export default App;
