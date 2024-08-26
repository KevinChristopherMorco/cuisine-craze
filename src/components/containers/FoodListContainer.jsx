import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../dynamic/Card";
import Loader from "../loaders/Loader";
import EmptyData from "../empty/EmptyData";

const FoodListContainer = ({
  list,
  setActive,
  favorites,
  handleAddFavorites,
  handleDeleteFavorites,
}) => {
  const { data, error, loader } = useFetch(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${list}`
  );

  return (
    <>
      <div className="px-2 flex flex-col gap-y-6">
        <p className="text-xl font-bold md:text-2xl lg:text-3xl">Categories</p>
        <ul className="categoryScrollbar py-2 flex gap-x-10 overflow-x-scroll text-base md:text-lg lg:text-xl">
          <li
            className={`${
              list === "chicken" || list === null
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "chicken")}
          >
            Chicken
          </li>
          <li
            className={`${
              list === "beef"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "beef")}
          >
            Beef
          </li>
          <li
            className={`${
              list === "pork"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "pork")}
          >
            Pork
          </li>
          <li
            className={`${
              list === "seafood"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "seafood")}
          >
            Seafood
          </li>
          <li
            className={`${
              list === "pasta"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "pasta")}
          >
            Pasta
          </li>
          <li
            className={`${
              list === "dessert"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "dessert")}
          >
            Sweets
          </li>
        </ul>
        {loader ? (
          <div className="foodListScrollBar min-h-[30rem] px-4 overflow-x-scroll flex gap-x-10">
            {data.map(
              ({
                idMeal: mealId,
                strMeal: mealName,
                strMealThumb: mealImg,
              }) => {
                const isFavorite = favorites.some(
                  (fav) => fav.mealId === mealId
                );

                return (
                  <Card
                    key={mealId}
                    mealId={mealId}
                    mealName={mealName}
                    mealImg={mealImg}
                    isFavorite={isFavorite}
                    handleAddFavorites={handleAddFavorites}
                    handleDeleteFavorites={handleDeleteFavorites}
                  />
                );
              }
            )}
          </div>
        ) : error ? (
          <EmptyData
            title="Servers are down"
            subtext="Please wait patiently, we're working on it."
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default FoodListContainer;
