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
            const cityData = response.data?.location_suggestions?.[0] || [];

            const params = new URLSearchParams();
            params.set("entity_type", "city");
            params.set("entity_id", cityData.id);
            params.set("q", searchParams.refine);

            // search query 
            axios.get(`https://developers.zomato.com/api/v2.1/search?${params.toString()}`, {
                headers: {
                    "Content-Type": "application/json",
                    "user-key": ZOMATO_API_KEY
                }
            })
            .then(response => {
                const restaurant = response.data?.restaurants || [];
                dispatch(fetchRestaurantSuccess(restaurant))
            })
            .catch(error => {
                dispatch(fetchRestaurantFailure(error.message))
            });
        })
        .catch(error => {
            dispatch(fetchRestaurantFailure(error.message))
        });
    }
};
