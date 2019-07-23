import css from "./index.scss";
import React from "react";
import SearchBox from "../components/SearchBox";
import { Router } from "../routes";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className={css.IndexPage}>
      <Header />

      <SearchBox submitCallback={handleSearchBox} />
    </div>
  );
};

function handleSearchBox(searchValue) {
  Router.pushRoute(`/search?q=${searchValue}`);
}

export default Index;
