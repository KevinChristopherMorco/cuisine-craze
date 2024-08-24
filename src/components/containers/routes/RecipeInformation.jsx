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
    <div className="px-6 py-10 overflow-y-scroll flex flex-col gap-y-8">
      <div className="flex justify-between items-center cursor-pointer">
        <Link to="/">
          <IconChevronLeft className="text-xl" />
        </Link>
        {isFavorite ? (
          <div
            className="p-2 flex items-center border-2 border-[var(--accent-color)] bg-[var(--secondary-color)] text-[--accent-color] rounded-xl"
            onClick={() => handleDeleteFavorites(mealId, mealName)}
          >
            <IconHeartBroken />
          </div>
        ) : (
          <div
            className="p-2 flex items-center bg-[var(--accent-color)] text-[#fff] rounded-xl"
            onClick={() => handleAddFavorites(mealId, mealName, mealImg)}
          >
            <IconHeartFilled />
          </div>
        )}
      </div>
      <div>
        <img
          src={mealImg}
          alt=""
          className="w-[90%] h-[90%] mx-auto rounded-xl"
        />
      </div>
      <div className="flex flex-wrap items-center">
        <div className="basis-[40%]">
          <p className="text-xl font-bold">{mealName}</p>
        </div>
        <div className="w-full basis-[60%] flex justify-evenly items-center">
          <div className="flex items-center gap-x-1">
            <IconFlag3 size={18} />
            <p className="text-sm text-[var(--inactive-color)] font-bold">
              {mealArea}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <IconChefHat size={18} />
            <p className="text-sm text-[var(--inactive-color)] font-bold">
              {mealCategory === "Vegetarian"
                ? "Vegan"
                : mealCategory === "Miscellaneous"
                ? "Others"
                : mealCategory}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-start items-start gap-x-4 text font-medium ">
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
              <p className="font-medium">Ingredients:</p>
              <ol className="flex flex-wrap gap-x-2 text-sm font-medium list-decimal list-inside">
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
              <div className="h-[20rem] overflow-y-scroll flex flex-col gap-y-2 text-sm animate-fadeIn">
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
