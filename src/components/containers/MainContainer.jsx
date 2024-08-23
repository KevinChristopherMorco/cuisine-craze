import React from "react";
import Hero from "./sections/Hero";
import MobileHeader from "../partials/MobileHeader";
import FoodListContainer from "./FoodListContainer";
import Home from "./routes/Home";
import Favorites from "../modals/partials/Favorites";
import RecipeInformation from "./routes/RecipeInformation";

import useActiveList from "../../hooks/useActiveList";
import useActionsFavorites from "../../hooks/user-actions/useActionsFavorites";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainContainer = () => {
  const {
    active: { list, nav, tab },
    setActive,
    clearActive,
  } = useActiveList();

  const { favorites, handleAddFavorites, handleDeleteFavorites } =
    useActionsFavorites();

  return (
    <>
      <div className="flex flex-col gap-y-10">
        <BrowserRouter>
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <Home
                  list={list}
                  setActive={setActive}
                  favorites={favorites}
                  handleAddFavorites={handleAddFavorites}
                />
              }
            />
            <Route
              path="/:recipe"
              element={<RecipeInformation tab={tab} setActive={setActive} />}
            />
          </Routes>
        </BrowserRouter>

        {/* <Hero />
        <FoodListContainer
          list={list}
          setActive={setActive}
          favorites={favorites}
          handleAddFavorites={handleAddFavorites}
        /> */}

        <MobileHeader nav={nav} setActive={setActive} />
        {nav === "favorites" && (
          <Favorites
            nav={nav}
            setActive={setActive}
            clearActive={clearActive}
            favorites={favorites}
            handleDeleteFavorites={handleDeleteFavorites}
          />
        )}
      </div>
    </>
  );
};

export default MainContainer;
