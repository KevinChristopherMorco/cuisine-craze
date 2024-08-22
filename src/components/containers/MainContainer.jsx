import React from "react";
import Hero from "./sections/Hero";
import MobileHeader from "../partials/MobileHeader";
import FoodListContainer from "./FoodListContainer";
import Favorites from "../modals/partials/Favorites";

import useActiveList from "../../hooks/useActiveList";

const MainContainer = () => {
  const {
    active: { list, nav, modal },
    setActive,
    clearActive,
  } = useActiveList();

  return (
    <>
      <div className="flex flex-col gap-y-10">
        <Hero />
        <FoodListContainer list={list} setActive={setActive} />
        <MobileHeader nav={nav} modal={modal} setActive={setActive} />
        <Favorites nav={nav} setActive={setActive} clearActive={clearActive} />
      </div>
    </>
  );
};

export default MainContainer;
