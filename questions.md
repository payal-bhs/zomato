# Technical questions

## How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add

I had only one day to work on it, so after finishing my routine day work I spent around 4 hours working on this task. If I had more time I would have implemented the project using typescript, ESLint and Enzyme testing. With this the code would become more reliable and secure.I added only one test, because of the lack of time. I would have added more component testing.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The current react version is 17, but the most useful feature was added in React 16.8. React hooks, with this we can implement state in functional component.

```
    const stateSearch = useSelector(state => state.search);
    const dispatch = useDispatch();

    const [city, setCity] = useState(stateSearch.city);
    const [refine, setRefine] = useState(stateSearch.refine);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchRestaurant({city, refine}));
    };

```

In the above code, I have used ```useSelector, useDispatch and useState```

## How would you track down a performance issue in production? Have you ever had to do this?

To trackdown production performance issues, I have used Sentry and Datadog and Lighthouse CI. Many times I have resolved bugs using sentry. It provide the log tail which help me to find the exact issue.

## How would you improve the API that you just used

To get the restaurant results, I have to first fetch city_id and then have to do an actual search api call. I would definitely work on it and find out any alternatives.
Other than that I also like to add some caching to API calls.

P.S. : Initially i tried to search city with ```/search?q=cityName``` but I was always getting 0 results. So I ended up with ```entity_type and entity_id```


## Please describe yourself using JSON.
```
{
    "name": "Payal Patel",
    "position": "Web Developer",
    "experience": "10 Years",
    "strength" : ["fast learner", "team player"],
    "skills": {
        "techStack" : ["typescript", "react", "angular", "javascript", "PHP", "Python"],
        "testFrameworks": ["jest", "jasmine", "cypress", "storybook"],
        "database": ["MySQL", "MongoDB"]
    }
}
```

