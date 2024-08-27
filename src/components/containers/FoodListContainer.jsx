import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../dynamic/Card";
import Loader from "../loaders/Loader";
import ServerDown from "../response/500/ServerDown";

import { IconMeat } from "@tabler/icons-react";
import chicken from "../../images/foods/chicken-leg.png";
import beef from "../../images/foods/beef.png";
import pork from "../../images/foods/pork.png";
import seafood from "../../images/foods/seafood.png";
import pasta from "../../images/foods/pasta.png";
import sweet from "../../images/foods/sweet.png";

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
        <ul className="categoryScrollbar py-2 flex gap-x-6 overflow-x-scroll text-base md:text-lg lg:text-xl">
          <li
            className={`${
              list === "chicken" || list === null
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "chicken")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={chicken} alt="" className="w-7 h-7" />
              Chicken
            </p>
          </li>
          <li
            className={`${
              list === "beef"
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "beef")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={beef} alt="" className="w-7 h-7" />
              Beef
            </p>
          </li>
          <li
            className={`${
              list === "pork"
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "pork")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={pork} alt="" className="w-7 h-7" />
              Pork
            </p>
          </li>
          <li
            className={`${
              list === "seafood"
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "seafood")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={seafood} alt="" className="w-7 h-7" />
              Seafood
            </p>
          </li>
          <li
            className={`${
              list === "pasta"
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "pasta")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={pasta} alt="" className="w-7 h-7" />
              Pasta
            </p>
          </li>
          <li
            className={`${
              list === "dessert"
                ? "font-bold underline underline-offset-[5px] decoration-2 opacity-1 text-[#fff] bg-[var(--accent-color)]"
                : "font-light opacity-[0.7] text-[var(--text-color)] bg-[var(--secondary-color)]"
            } transition cursor-pointer rounded-xl`}
            onClick={() => setActive("list", "dessert")}
          >
            <p
              className={`w-[5rem] p-2 flex flex-col items-center gap-y-1 lg:w-[8rem]`}
            >
              <img src={sweet} alt="" className="w-7 h-7" />
              Dessert
            </p>
          </li>
        </ul>
        {loader ? (
          <div className="foodListScrollBar min-h-[30rem] pb-10 px-4 overflow-x-scroll flex gap-x-10 lg:flex-wrap lg:justify-between lg:gap-y-20">
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
          <ServerDown
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
