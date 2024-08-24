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
    <div className="flex flex-col gap-y-10">
      <Hero />
      <FoodListContainer
        list={list}
        setActive={setActive}
        favorites={favorites}
        handleAddFavorites={handleAddFavorites}
        handleDeleteFavorites={handleDeleteFavorites}
      />
    </div>
  );
};

export default Home;
