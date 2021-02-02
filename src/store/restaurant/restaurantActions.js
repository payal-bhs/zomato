import axios from "axios";
import {
    FETCH_RESTAURANT_REQUEST,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE
} from "./restaurantTypes";
import { searchAll } from "../search/searchActions";

const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_API_KEY || "";

export const fetchRestaurantRequest = () => {
    return {
        type: FETCH_RESTAURANT_REQUEST
    }
};

export const fetchRestaurantSuccess = restaurantResponse => {
    return {
        type: FETCH_RESTAURANT_SUCCESS,
        payload: restaurantResponse,
    }
};

export const fetchRestaurantFailure = error => {
    return {
        type: FETCH_RESTAURANT_FAILURE,
        payload: error,
    }
};

export const fetchRestaurant = (searchParams) => {
    return (dispatch) => {
        dispatch(searchAll(searchParams));
        dispatch(fetchRestaurantRequest());

        // get cityId
        axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${searchParams.city}`, {
            headers: {
                "Content-Type": "application/json",
                "user-key": ZOMATO_API_KEY
            }
        })
        .then(response => {
            // response.data is the restaurant data
            console.log("fetchRestaurant response => ", response);
            const cityData = response.data?.location_suggestions?.[0] || [];
            console.log("fetchRestaurant cityData => ", cityData);

            const params = new URLSearchParams();
            params.set("entity_type", "city");
            params.set("entity_id", cityData.id);
            params.set("q", searchParams.refine);
            console.log("fetchRestaurant params => ", params.toString());

            // search query 
            axios.get(`https://developers.zomato.com/api/v2.1/search?${params.toString()}`, {
                headers: {
                    "Content-Type": "application/json",
                    "user-key": ZOMATO_API_KEY
                }
            })
            .then(response => {
                console.log("fetchRestaurant response => ", response);
                const restaurant = response.data?.restaurants || [];
                dispatch(fetchRestaurantSuccess(restaurant))
            })
            .catch(error => {
                console.log("fetchRestaurant error => ", error);
                // error.message is the error message
                dispatch(fetchRestaurantFailure(error.message))
            });
        })
        .catch(error => {
            console.log("fetchRestaurant error => ", error);
            // error.message is the error message
            dispatch(fetchRestaurantFailure(error.message))
        });

        // axios.get(`https://developers.zomato.com/api/v2.1/search?q=${city}`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "user-key": ZOMATO_API_KEY
        //     }
        // })
        // .then(response => {
        //     // response.data is the restaurant data
        //     console.log("fetchRestaurant response => ", response);
        //     const restaurant = response.data?.restaurants || [];
        //     // const restaurant = response.data?.location_suggestions || [];
        //     dispatch(fetchRestaurantSuccess(restaurant))
        // })
        // .catch(error => {
        //     console.log("fetchRestaurant error => ", error);
        //     // error.message is the error message
        //     dispatch(fetchRestaurantFailure(error.message))
        // });
    }
};
