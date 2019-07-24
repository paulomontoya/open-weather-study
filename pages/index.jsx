import css from "./index.scss";
import React, { useContext, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import { Router } from "../routes";
import Header from "../components/Header";
import { get } from "lodash";
import { useObserver } from "mobx-react-lite";
import { WeatherStoreContext } from "../stores";
import LoadingSpinner from "../components/LoadingSpinner";
import ForecastError from "../components/ForecastError";
import ForecastList from "../components/ForecastList";

const Index = ({ searchTerms }) => {
  const WeatherStore = useContext(WeatherStoreContext);
  WeatherStore.searchTerms = searchTerms;

  useEffect(() => {
    WeatherStore.getCities();
  }, [searchTerms]);

  return useObserver(() => {
    return (
      <div className={css.IndexPage}>
        <Header />

        <SearchBox submitCallback={handleSearchBox} />

        {WeatherStore.isLoading ? (
          <LoadingSpinner />
        ) : WeatherStore.error ? (
          <ForecastError
            error={WeatherStore.error}
            searchTerms={WeatherStore.searchTerms}
          />
        ) : (
          <ForecastList
            list={WeatherStore.list}
            currentCity={WeatherStore.currentCity}
          />
        )}
      </div>
    );
  });
};

Index.getInitialProps = req => {
  const searchTerms = get(req, "query.search", null);

  return {
    searchTerms
  };
};

function handleSearchBox(searchValue) {
  Router.pushRoute(`/?search=${searchValue}`);
}

export default Index;
