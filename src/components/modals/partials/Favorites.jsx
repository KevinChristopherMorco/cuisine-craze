import React from "react";
import FavoriteCard from "../../dynamic/FavoriteCard";
import EmptyData from "../../empty/EmptyData";
import eatingPenguin from "../../../images/gif/eating-penguin.gif";
import { IconSquareRoundedX } from "@tabler/icons-react";

const Favorites = ({ clearActive, favorites, handleDeleteFavorites }) => {
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[999] animate-fadeIn">
      <div
        className={`h-[80%] w-[90%] fixed p-4 my-10  flex flex-col gap-y-2 bg-[var(--primary-color)] rounded-xl md:w-[60%]`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)] md:text-2xl">
          <p>Favorite Recipes</p>
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX className="md:w-8 md:h-8" />
          </div>
        </div>
        <div className="h-full overflow-y-scroll flex flex-col gap-y-10">
          {favorites.length === 0 ? (
            <div className="h-[10rem] flex flex-col justify-evenly items-center">
              <img src={eatingPenguin} alt="" className="w-[5rem] h-[5rem]" />
              <p className="text-xl text-center font-bold">
                Tap a heart to pick a favorite!
              </p>
            </div>
          ) : (
            favorites.map(({ mealId, mealName, mealImg }) => {
              return (
                <FavoriteCard
                  key={mealId}
                  mealId={mealId}
                  mealName={mealName}
                  mealImg={mealImg}
                  clearActive={clearActive}
                  handleDeleteFavorites={handleDeleteFavorites}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
