import React from "react";
import { useSelector } from "react-redux";
import "./RestaurantContainer.style.scss";

const RestaurantContainer = () => {
    const stateRestaurant = useSelector(state => state.restaurant);
    const stateSearch = useSelector(state => state.search);
    // list of search restaurants
    return (
        <div className="wrapper">
            {stateRestaurant.loading ? (
                    <h2>Loading</h2>
                ) : stateRestaurant.error ? (
                    <h2>{stateRestaurant.error}</h2>
                ) : (
                    (stateRestaurant?.restaurants.length > 0) ?
                        <ul className="cards">
                            {stateRestaurant?.restaurants?.map((restaurant, key) =>
                                <li class="cards_item restaurant-cards" key={key}>
                                    <RestaurantCard key={key} restaurant={restaurant.restaurant}  />
                                </li>
                            )}
                        </ul>
                    : (stateSearch.city !== "") ?
                        <div>No Result Found</div>
                        : null
            )}
        </div>
    );
};

export default RestaurantContainer;

export const RestaurantCard = (restaurant) => {
    return (
        <figure className="restaurant-card">
            <figcaption className="card-body">
                <a href={restaurant.restaurant.url} target="_blank" rel="noreferrer">
                    <h2 className="card_title">{restaurant.restaurant.name}</h2>
                </a>
                <p className="card_text">{restaurant.restaurant.location.locality_verbose}</p>

                <p className="small_card_text">{restaurant.restaurant.cuisines}</p>
                <div className="rating">
                    <Rating userRating={restaurant.restaurant.user_rating.aggregate_rating} />
                </div>
            </figcaption>
        </figure>
    );
};

const Rating = (userRating = 0) => {
    const rating = Math.round(parseInt(userRating.userRating, 10) * 2) / 2;
    let output = [];
    let index = rating;

    // Append all the filled whole stars
    for (index = rating; index >= 1; index--) {
        output.push("fa fa-star checked");
    }

    // If there is a half a star, append it
    if (index === .5) {
        output.push("fa fa-star-half-o checked");
    }

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
        output.push("fa fa-star-o");

    return (
        <ul>
            {output.map((rating, key) =>
                <li key={key}>
                    <i className={rating}></i>
                </li>
            )}
        </ul>
    )
}
