import React, { useState } from "react";
import "./SearchForm.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../store/restaurant/restaurantActions";

export const SearchFormContainer = () => {
    const stateSearch = useSelector(state => state.search);
    const dispatch = useDispatch();

    const [city, setCity] = useState(stateSearch.city);
    const [refine, setRefine] = useState(stateSearch.refine);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchRestaurant({city, refine}));
    };

  return (
    <section title="form" className="search">
        <form
            action=""
            method="post"
            className="search-form"
            id="searchForm"
            name="searchForm"
            onSubmit={handleSubmit}
        >
            <section data-name="city">
                <label className="control-label" htmlFor="city">City</label>
                <input
                    className="form-control"
                    id="city"
                    name="city"
                    type="text"
                    required={true}
                    minLength={3}
                    placeholder="Search for city.."
                    onChange={e => setCity(e.target.value)}
                    value={city}
                />
            </section>
            <section data-name="refine">
                <label className="control-label" htmlFor="refine">Refine</label>
                <input
                    className="form-control"
                    id="refine"
                    name="refine"
                    type="text"
                    placeholder="Refine Search.."
                    onChange={e => setRefine(e.target.value)}
                    value={refine}
                />
            </section>
            <section data-name="actions" className="full-width">
                {/* <button type="submit" className="button" name="submit" id="submit" aria-label="submit search form" onSubmit={handleSubmit}> Search </button> */}
                <input type="submit" value="Submit" id="submit" name="submit" aria-label="submit search form" onSubmit={handleSubmit} />
            </section>
        </form>
    </section>
  );
};

export default SearchFormContainer;

