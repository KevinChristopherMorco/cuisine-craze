import React from "react";
import { IconFlag3, IconChefHat } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SearchCard = ({
  mealName,
  mealImg,
  mealCategory,
  mealArea,
  clearActive,
}) => {
  return (
    <Link
      to={mealName}
      onClick={() => clearActive("nav")}
      className="w-[95%] mx-auto flex justify-between shadow-md shadow-[var(--shadow-color)] rounded-xl hover:scale-105 transition"
    >
      <div className="basis-[35%]">
        <img src={mealImg} alt={mealName} className="rounded-xl" />
      </div>
      <div className="py-1 flex flex-col justify-around basis-[60%] text-lg font-bold">
        <p className="line-clamp-2">{mealName}</p>
        <div className="py-2 flex items-center gap-x-6 ">
          <ul className="flex gap-x-4 text-[0.8rem]">
            <li className="flex items-center gap-x-1">
              <IconFlag3 className="w-5 h-5" />
              {mealArea}
            </li>
            <li className="flex items-center gap-x-1">
              <IconChefHat className="w-5 h-5" />
              {mealCategory === "Vegetarian"
                ? "Vegan"
                : mealCategory === "Miscellaneous"
                ? "Others"
                : mealCategory}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
