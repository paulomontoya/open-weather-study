import LoadingSpinner from "../components/LoadingSpinner";
import css from "./index.scss";
import { useObserver } from "mobx-react-lite";
import React, { useContext } from "react";
import { UserStoreContext } from "../stores";
import { useTransition, animated } from "react-spring";

const Index = () => {
  const UserStore = useContext(UserStoreContext);

  return useObserver(() => {
    return <div className={css.IndexPage} />;
  });
};

export default Index;
