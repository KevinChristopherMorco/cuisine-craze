import React from "react";
import { Link } from "react-router-dom";
import { IconHeartBroken, IconEggs } from "@tabler/icons-react";

const FavoriteCard = ({
  mealId,
  mealName,
  mealImg,
  clearActive,
  handleDeleteFavorites,
}) => {
  return (
    <div className="flex justify-between shadow-md shadow-[var(--shadow-color)] rounded-xl dark:border dark:border-[var(--secondary-color)] dark:bg-[var(--primary-color)] dark:shadow dark:shadow-[var(--shadow-color)] hover:scale-110 transition">
      <div className="basis-[35%]">
        <img src={mealImg} alt={mealName} className="rounded-xl" />
      </div>
      <div className="py-1 flex flex-col justify-around basis-[60%] text-lg font-bold">
        <p className="line-clamp-2">{mealName}</p>
        <div className="py-2 flex items-center gap-x-6 ">
          <div
            className="flex items-center gap-x-1"
            onClick={() => handleDeleteFavorites(mealId, mealName)}
          >
            <div className="p-1 flex items-center border border-[var(--accent-color)] bg-[var(--secondary-color)] text-[--accent-color] rounded-full">
              <IconHeartBroken className="h-4 w-4" />
            </div>
            <p className="text-[0.80rem] text-[var(--active-color)] font-bold">
              Dislike
            </p>
          </div>
          <Link
            to={mealName}
            onClick={() => clearActive("nav")}
            className="flex items-center"
          >
            <div className="p-1 flex items-center text-[var(--inactive-color)] font-medium">
              <IconEggs className="h-5 w-5" />
            </div>
            <p className="h-fit text-[0.80rem]">Recipe</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
