import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../loaders/Loader";
import {
  IconHeartFilled,
  IconHeartBroken,
  IconChevronLeft,
  IconFlag3,
  IconChefHat,
} from "@tabler/icons-react";

const RecipeInformation = ({
  tab,
  favorites,
  handleAddFavorites,
  handleDeleteFavorites,
  setActive,
}) => {
  const { recipe } = useParams();
  const { data, loader } = useFetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  );

  if (!loader) {
    return <Loader />;
  }

  const [recipes] = data;
  const {
    idMeal: mealId,
    strMeal: mealName,
    strMealThumb: mealImg,
    strCategory: mealCategory,
    strArea: mealArea,
    strInstructions: mealInstructions,
    strYoutube: link,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = recipes;

  const ingredientsList = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  ];

  const isFavorite = favorites.some((fav) => fav.mealId === mealId);

  return (
    <div className="px-6 py-10 overflow-y-scroll flex flex-col gap-y-8 md:gap-y-12">
      <div className="flex justify-between items-center cursor-pointer">
        <Link to="/">
          <IconChevronLeft className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </Link>
        {isFavorite ? (
          <div
            className="p-2 flex items-center border-2 border-[var(--accent-color)] bg-[var(--secondary-color)] text-[--accent-color] rounded-xl md:p-3"
            onClick={() => handleDeleteFavorites(mealId, mealName)}
          >
            <IconHeartBroken className="md:w-8 md:h-8" />
          </div>
        ) : (
          <div
            className="p-2 flex items-center bg-[var(--accent-color)] text-[#fff] rounded-xl md:p-3"
            onClick={() => handleAddFavorites(mealId, mealName, mealImg)}
          >
            <IconHeartFilled className="md:w-8 md:h-8" />
          </div>
        )}
      </div>
      <div>
        <img
          src={mealImg}
          alt=""
          className="w-[90%] h-[90%] mx-auto rounded-xl md:w-[50%] md:h-[50%]"
        />
      </div>
      <div className="flex flex-wrap items-center">
        <div className="basis-[40%] text-xl font-bold md:text-2xl lg:text-3xl">
          <p>{mealName}</p>
        </div>
        <div className="w-full basis-[60%] flex justify-evenly items-center text-sm text-[var(--inactive-color)] font-bold md:text-xl lg:text-2xl">
          <div className="flex items-center gap-x-1">
            <IconFlag3 className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <p>{mealArea}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <IconChefHat className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <p>
              {mealCategory === "Vegetarian"
                ? "Vegan"
                : mealCategory === "Miscellaneous"
                ? "Others"
                : mealCategory}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:gap-y-12">
        <div className="flex justify-start items-start gap-x-4 text-base font-medium md:text-lg lg:text-xl">
          <div
            className={
              tab === "ingredients"
                ? "font-bold underline underline-offset-[10px] decoration-2 decoration-[var(--accent-color)]"
                : ""
            }
            onClick={() => setActive("tab", "ingredients")}
          >
            <p>Ingredients</p>
          </div>
          <div
            className={
              tab === "instructions"
                ? "font-bold underline underline-offset-[10px] decoration-2 decoration-[var(--accent-color)]"
                : ""
            }
            onClick={() => setActive("tab", "instructions")}
          >
            <p>Instructions</p>
          </div>
        </div>
        <div className="pb-10">
          {tab === "ingredients" && (
            <div className="flex flex-col gap-y-4 animate-fadeIn">
              <p className="font-medium md:text-xl lg:text-2xl">Ingredients:</p>
              <ol className="flex flex-wrap gap-x-2 text-sm font-medium list-decimal list-inside md:gap-x-4 md:text-lg lg:gap-x-6 lg:text-xl">
                {ingredientsList
                  .filter((ingredient) => Boolean(ingredient))
                  .map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                  ))}
              </ol>
            </div>
          )}

          {tab === "instructions" && (
            <>
              <div className="h-[20rem] overflow-y-scroll flex flex-col gap-y-2 text-sm animate-fadeIn md:text-lg lg:text-xl">
                <ol className="flex flex-col gap-y-2 list-decimal list-inside">
                  {mealInstructions.split("\r\n").map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
                <p>
                  <span className="font-bold">Feeling lost? </span> Watch it
                  step by step{" "}
                  <a
                    href={link}
                    target="_blank"
                    className="font-bold text-[var(--accent-color)]"
                  >
                    here!
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeInformation;
