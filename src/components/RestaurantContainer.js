import React from "react";
import { useSelector } from "react-redux";

const RestaurantContainer = () => {
    const stateRestaurant = useSelector(state => state.restaurant);
    console.log("RestaurantContainer => ", stateRestaurant);
    // list of search restaurants
    return stateRestaurant.loading ? (
        <h2>Loading</h2>
    ) : stateRestaurant.error ? (
        <h2>{stateRestaurant.error}</h2>
    ) : (
        <div>
            <h2>Restaurant List</h2>
            {(stateRestaurant?.restaurants.length > 0) ?
            <div>
                {stateRestaurant?.restaurants?.map((restaurant, key) =>
                    <p key={key}>{restaurant.name}</p>
                )}
            </div>
            : <div>No Result Found</div>}
        </div>

    );
};

export default RestaurantContainer;
