import React from "react";
import Hero from "../sections/Hero";
import FoodListContainer from "../FoodListContainer";

const Home = ({
  list,
  setActive,
  favorites,
  handleAddFavorites,
  handleDeleteFavorites,
}) => {
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
