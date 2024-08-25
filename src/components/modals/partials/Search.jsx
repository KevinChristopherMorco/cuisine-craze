import React from "react";
import SearchCard from "../../dynamic/SearchCard";
import useSearch from "../../../hooks/user-actions/useSearch";
import searchingPenguin from "../../../images/gif/searching-penguin.gif";
import sadPenguin from "../../../images/gif/sad-penguin.gif";

import { IconSquareRoundedX } from "@tabler/icons-react";

const Search = ({ clearActive }) => {
  const { data, loader, handleInput, empty } = useSearch();
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[999] animate-fadeIn">
      <div
        className={`h-[100%] w-[100%] fixed p-4  flex flex-col gap-y-2 bg-[var(--primary-color)]`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)]">
          <input
            type="search"
            name="search"
            className="w-[90%] p-2 text-base bg-[var(--primary-color)] border border-[var(--accent-color)] rounded-lg outline-none focus:border-2"
            placeholder="Search for a recipe..."
            autoComplete="off"
            onChange={handleInput}
          />
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX />
          </div>
        </div>
        {empty ? (
          <div className="overflow-y-scroll flex flex-col gap-y-10">
            {data.length > 0 ? (
              data.map(
                ({
                  idMeal: mealId,
                  strMeal: mealName,
                  strMealThumb: mealImg,
                  strCategory: mealCategory,
                  strArea: mealArea,
                }) => (
                  <SearchCard
                    key={mealId}
                    mealName={mealName}
                    mealImg={mealImg}
                    mealCategory={mealCategory}
                    mealArea={mealArea}
                    clearActive={clearActive}
                  />
                )
              )
            ) : (
              <div className="h-[10rem] flex flex-col justify-evenly items-center">
                <img src={sadPenguin} alt="" className="w-[5rem] h-[5rem]" />
                <p className="text-xl text-center font-bold">
                  No luck, but keep searching!
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="h-[10rem] flex flex-col justify-evenly items-center">
            <img src={searchingPenguin} alt="" className="w-[5rem] h-[5rem]" />
            <p className="text-xl text-center font-bold">
              Let’s get cooking! Search now..
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
