import React from "react";
import Hero from "../sections/Hero";
import FoodListContainer from "../FoodListContainer";

import useTime from "../../../hooks/useTime";

const Home = ({
  list,
  setActive,
  favorites,
  handleAddFavorites,
  handleDeleteFavorites,
}) => {
  const { time } = useTime();

  return (
    <>
      <Hero />
      <FoodListContainer
        list={list}
        setActive={setActive}
        favorites={favorites}
        handleAddFavorites={handleAddFavorites}
        handleDeleteFavorites={handleDeleteFavorites}
      />
    </>
  );
};

export default Home;
