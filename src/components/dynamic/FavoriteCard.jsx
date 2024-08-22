import React from "react";
import { IconHeartBroken } from "@tabler/icons-react";

const FavoriteCard = ({ mealId, mealName, mealImg, handleDeleteFavorites }) => {
  return (
    <div className="flex justify-between shadow-md shadow-[var(--shadow-color)] rounded-xl">
      <div className="basis-[35%]">
        <img src={mealImg} alt={mealName} className="rounded-xl" />
      </div>
      <div className="py-1 flex flex-col justify-around basis-[60%] text-lg font-bold">
        <p>{mealName}</p>
        <div
          className="flex items-center gap-x-1 text-[var(--accent-color)] font-bold cursor-pointer"
          onClick={() => handleDeleteFavorites(mealId)}
        >
          <IconHeartBroken /> <p className="text-sm">Dislike</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
