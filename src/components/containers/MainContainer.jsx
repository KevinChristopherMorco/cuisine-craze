import React from "react";
import Hero from "./sections/Hero";
import MobileHeader from "../partials/MobileHeader";
import FoodListContainer from "./FoodListContainer";
import Card from "../dynamic/Card";

import useActiveList from "../../hooks/useActiveList";

const MainContainer = () => {
  const {
    active: { list, nav },
    setActive,
  } = useActiveList();
  return (
    <>
      <div className="flex flex-col gap-y-10">
        <Hero />
        <FoodListContainer list={list} setActive={setActive} />
        <MobileHeader nav={nav} setActive={setActive} />
        <div className="foodListScrollBar min-h-[30rem] px-4 overflow-x-scroll flex gap-x-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
