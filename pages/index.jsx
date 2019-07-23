import css from "./index.scss";
import React from "react";
import SearchBox from "../components/SearchBox";
import { Router } from "../routes";

const Index = () => {
  return (
    <div className={css.IndexPage}>
      <header className={css.Header}>
        <h1>OpenWeather Project</h1>
      </header>

      <SearchBox submitCallback={handleSearchBox} />
    </div>
  );
};

function handleSearchBox(searchValue) {
  Router.pushRoute(`/search?q=${searchValue}`);
}

export default Index;
