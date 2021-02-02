import { createAction } from "@reduxjs/toolkit";

export const SEARCH_CITY = createAction("SEARCH_CITY");
export const SEARCH_REFINE = createAction("SEARCH_REFINE");
export const SEARCH_ALL = createAction("SEARCH_ALL");

export const searchCity = (city = "") => {
    return {
        type: SEARCH_CITY.type,
        payload: city
    }
};

export const searchRefine = (refine = "") => {
    return {
        type: SEARCH_REFINE.type,
        payload: refine
    }
};

export const searchAll = (searchResult) => {
    return {
        type: SEARCH_ALL.type,
        payload: searchResult
    }
};
