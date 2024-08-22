import React from "react";
import useRandomColors from "../../hooks/useRandomColors";
import useActionsFavorites from "../../hooks/user-actions/useActionsFavorites";
import { IconHeart } from "@tabler/icons-react";

const Card = ({ mealId, mealName, mealImg, handleAddFavorites }) => {
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
        className={`h-[20rem] shrink-0 basis-[60%] h-fit flex flex-col justify-around shadow-md shadow-[var(--shadow-color)] rounded-xl`}
      >
        <div
          className="w-[10rem] h-[10rem] mx-2 flex justify-end shadow shadow-[var(--accent-color)] rounded-full self-end"
          style={style}
        ></div>
        <div className="px-2 flex flex-col justify-end gap-y-4">
          <div className="min-h-[4rem]">
            <p className="text-lg font-bold">{mealName}</p>
          </div>
          <div
            className="flex items-center gap-x-1 text-[#F669C0] font-medium cursor-pointer"
            onClick={() => handleAddFavorites(mealId, mealName, mealImg)}
          >
            <IconHeart />
            <p className="text-[var(--inactive-color)]">My favorite</p>
          </div>
        </div>
      </div>

      {/* Sample */}
    </>
  );
};

export default Card;
