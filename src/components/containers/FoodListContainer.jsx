import React from "react";
import useActiveList from "../../hooks/useActiveList";

const FoodListContainer = ({ list, setActive }) => {
  return (
    <>
      <div className="px-2 flex flex-col gap-y-6">
        <p className="text-xl font-bold">Categories</p>
        <ul className="categoryScrollbar py-2 flex gap-x-14 overflow-x-scroll text-base">
          <li
            className={`${
              list === "chicken" || list === null
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "chicken")}
          >
            Chicken
          </li>
          <li
            className={`${
              list === "beef"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "beef")}
          >
            Beef
          </li>
          <li
            className={`${
              list === "pork"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "pork")}
          >
            Pork
          </li>
          <li
            className={`${
              list === "seafood"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "seafood")}
          >
            Seafood
          </li>
          <li
            className={`${
              list === "pasta"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "pasta")}
          >
            Pasta
          </li>
          <li
            className={`${
              list === "sweets"
                ? "font-bold underline underline-offset-[10px] decoration-2 opacity-1"
                : "font-light opacity-[0.7]"
            } transition cursor-pointer`}
            onClick={() => setActive("list", "sweets")}
          >
            Sweets
          </li>
        </ul>
      </div>
    </>
  );
};

export default FoodListContainer;
