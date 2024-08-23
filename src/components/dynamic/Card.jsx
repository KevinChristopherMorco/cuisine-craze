import React, { useEffect } from "react";
import useRandomColors from "../../hooks/useRandomColors";
import useActionsFavorites from "../../hooks/user-actions/useActionsFavorites";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card = ({
  mealId,
  mealName,
  mealImg,
  isFavorite,
  handleAddFavorites,
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
      <Link
        to={mealName}
        style={dynamicColor}
        className={`h-[20rem] shrink-0 basis-[60%] h-fit flex flex-col justify-around gap-y-10 shadow-md shadow-[var(--shadow-color)] rounded-xl`}
      >
        <div
          className="w-[10rem] h-[10rem] mx-2 flex justify-end shadow shadow-[var(--accent-color)] rounded-full self-end"
          style={style}
        ></div>
        <div className="px-2 flex flex-col justify-end gap-y-4">
          <div className="min-h-[4rem]">
            <p className="text-lg font-bold line-clamp-2">{mealName}</p>
          </div>
          <div
            className="py-2 flex items-center gap-x-1 text-[var(--accent-color)] cursor-pointer"
            onClick={() => handleAddFavorites(mealId, mealName, mealImg)}
          >
            {isFavorite ? (
              <>
                <IconHeartFilled />
                <p className="text-[var(--active-color)] font-bold">
                  My favorite
                </p>
              </>
            ) : (
              <>
                <IconHeart />
                <p className="text-[var(--inactive-color)] font-medium">
                  Add to favorites
                </p>
              </>
            )}
          </div>
        </div>
      </Link>

      {/* Sample */}
    </>
  );
};

export default Card;
