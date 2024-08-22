import React from "react";
import FavoriteCard from "../../dynamic/FavoriteCard";
import useActionsFavorites from "../../../hooks/user-actions/useActionsFavorites";
import { IconSquareRoundedX } from "@tabler/icons-react";

const Favorites = ({ nav, clearActive }) => {
  const { favorites, handleDeleteFavorites } = useActionsFavorites();
  return (
    <div
      className={`${
        nav === "favorites"
          ? "w-full h-full flex justify-center absolute bg-[#000] bg-opacity-50 z-[9999]"
          : "hidden"
      }`}
    >
      <div className="h-[60%] w-[90%] p-4 my-10 flex flex-col gap-y-10 bg-[var(--primary-color)] rounded-xl">
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)]">
          <p>Favorite Recipes</p>
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX />
          </div>
        </div>
        {favorites.length === 0
          ? "No"
          : favorites.map(({ mealId, mealName, mealImg }) => {
              return (
                <FavoriteCard
                  key={mealId}
                  mealId={mealId}
                  mealName={mealName}
                  mealImg={mealImg}
                  handleDeleteFavorites={handleDeleteFavorites}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Favorites;
