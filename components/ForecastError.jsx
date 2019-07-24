import React from "react";
import css from "./ForecastError.scss";

const ForecastError = ({ error, searchTerms }) => {
  return (
    <div className={css.ForecastError}>
      {error === 404 ? (
        <p>City "{searchTerms}" was not found.</p>
      ) : (
        <p>Server returned an error: {error}.</p>
      )}
      Search engine is very flexible. How it works: To make it more precise put
      the city's name, comma, 2-letter country code (ISO3166). You will get all
      proper cities in chosen country. The order is important - the first is
      city name then comma then country. Example - London, GB or New York, US.
    </div>
  );
};

export default ForecastError;
