import React from "react";
import css from "./Header.scss";
import { Router } from "../routes";

const Header = () => (
  <header className={css.Header}>
    <h1 onClick={handleClick}>OpenWeather Project</h1>
  </header>
);

function handleClick() {
  Router.pushRoute("/");
}

export default Header;
