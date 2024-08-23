import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../loaders/Loader";
import {
  IconHeartFilled,
  IconChevronLeft,
  IconFlag3,
  IconChefHat,
} from "@tabler/icons-react";

const RecipeInformation = ({ tab, setActive }) => {
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
  } = recipes;

  const format = mealInstructions.split("\r\n");
  return (
    <div className="px-6 py-10 overflow-y-scroll flex flex-col gap-y-8">
      <div className="flex justify-between items-center cursor-pointer">
        <Link to="/">
          <IconChevronLeft className="text-xl" />
        </Link>
        <div className="p-2 flex items-center bg-[var(--accent-color)] text-[#fff] rounded-xl">
          <IconHeartFilled />
        </div>
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
              {mealCategory}
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
        <div>
          {tab === "ingredients" && (
            <div className="pb-10 animate-fadeIn">
              <p className="font-medium">Ingredients:</p>
              <ul className="flex flex-wrap gap-x-2 text-sm font-medium">
                <li>• 2 cups of flour</li>
                <li>• 1/2 cup of sugar</li>
                <li>• 1 tsp of baking powder</li>
                <li>• 1/2 tsp of salt</li>
                <li>• 1 cup of milk</li>
                <li>• 2 eggs</li>
                <li>• 1/4 cup of butter</li>
                <li>• 1 tsp of vanilla</li>
                <li>• 1/2 cup of chocolate chips</li>
                <li>• 1/2 cup of chopped nuts</li>
                <li>• 1/4 cup of butter</li>
                <li>• 1 tsp of vanilla</li>
                <li>• 1/2 cup of chocolate chips</li>
                <li>• 1/2 cup of chopped nuts</li>
              </ul>
            </div>
          )}

          {tab === "instructions" && (
            <ol className="pb-10 animate-fadeIn">
              <ul className="flex flex-col gap-y-4 list-decimal list-inside">
                {format.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeInformation;
