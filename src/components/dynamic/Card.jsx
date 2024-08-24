import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useRandomColors from "../../hooks/useRandomColors";
import {
  IconHeartBroken,
  IconHeartFilled,
  IconEggs,
} from "@tabler/icons-react";

const Card = ({
  mealId,
  mealName,
  mealImg,
  isFavorite,
  handleAddFavorites,
  handleDeleteFavorites,
}) => {
  const { hexCode } = useRandomColors();
  const style = {
    backgroundImage: `url(${mealImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const dynamicColor = {
    backgroundColor: `${hexCode}`,
  };

  return (
    <>
      <div
        style={dynamicColor}
        className={`h-[20rem] shrink-0 basis-[60%] h-fit flex flex-col justify-around gap-y-10 shadow-md shadow-[var(--shadow-color)] rounded-xl hover:scale-110 transition`}
      >
        <div
          className="w-[10rem] h-[10rem] m-3 flex justify-end shadow shadow-[var(--accent-color)] rounded-full self-end"
          style={style}
        ></div>
        <div className="px-2 flex flex-col justify-end gap-y-4">
          <div className="min-h-[4rem]">
            <p className="text-lg font-bold line-clamp-2">{mealName}</p>
          </div>
          <div className="py-2 flex items-center gap-x-6 ">
            {isFavorite ? (
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
            ) : (
              <div
                className="flex items-center gap-x-1"
                onClick={() => handleAddFavorites(mealId, mealName, mealImg)}
              >
                <div className="p-1 flex items-center bg-[var(--accent-color)] text-[#fff] rounded-full">
                  <IconHeartFilled className="h-4 w-4" />
                </div>
                <p className="text-[0.80rem] text-[var(--active-color)] font-bold">
                  Favorite
                </p>
              </div>
            )}
            <Link to={mealName} className="flex items-center">
              <div className="p-1 flex items-center text-[var(--inactive-color)] font-medium">
                <IconEggs className="h-5 w-5" />
              </div>
              <p className="h-fit text-[0.80rem]">Recipe</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Sample */}
    </>
  );
};

export default Card;
