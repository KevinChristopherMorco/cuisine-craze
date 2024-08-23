import React from "react";
import FavoriteCard from "../../dynamic/FavoriteCard";
import EmptyData from "../../empty/EmptyData";
import { IconSquareRoundedX } from "@tabler/icons-react";

const Favorites = ({ nav, clearActive, favorites, handleDeleteFavorites }) => {
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[9999] animate-fadeIn">
      <div
        className={`h-[80%] w-[90%] fixed p-4 my-10  flex flex-col gap-y-2 bg-[var(--primary-color)] rounded-xl`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)]">
          <p>Favorite Recipes</p>
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX />
          </div>
        </div>
        <div className="h-full overflow-y-scroll flex flex-col gap-y-10">
          {favorites.length === 0 ? (
            <EmptyData
              title={"No favorites yet"}
              subtext={
                "You can add a favorite by just pressing the heart icon in the list."
              }
            />
          ) : (
            favorites.map(({ mealId, mealName, mealImg }) => {
              return (
                <FavoriteCard
                  key={mealId}
                  mealId={mealId}
                  mealName={mealName}
                  mealImg={mealImg}
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
