import React from "react";
import SearchCard from "../../dynamic/SearchCard";
import useSearch from "../../../hooks/user-actions/useSearch";
import search from "../../../images/gif/search.gif";
import { IconSquareRoundedX } from "@tabler/icons-react";

const Search = ({ clearActive }) => {
  const { data, loader, handleInput, empty } = useSearch();
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[999] animate-fadeIn">
      <div
        className={`h-[100%] w-[100%] fixed p-4  flex flex-col gap-y-2 bg-[var(--primary-color)] rounded-xl`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)]">
          <input
            type="search"
            name="search"
            id=""
            className="w-[90%] p-2 text-base border border-[var(--accent-color)] rounded-lg outline-none focus:border-2"
            placeholder="Search for a recipe..."
            onChange={handleInput}
          />
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX />
          </div>
        </div>
        {empty ? (
          <div className="overflow-y-scroll flex flex-col gap-y-10">
            {data.map(
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
            )}
          </div>
        ) : (
          <div className="h-[10rem] flex flex-col justify-evenly items-center">
            <img src={search} alt="" className="w-[5rem] h-[5rem]" />
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
