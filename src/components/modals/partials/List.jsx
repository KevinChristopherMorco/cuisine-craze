import React from "react";
import useChecklist from "../../../hooks/user-actions/useChecklist";
import { IconSquareRoundedX, IconTrash } from "@tabler/icons-react";
import groceryPenguin from "../../../images/gif/grocery-penguin.gif";

const List = ({ clearActive }) => {
  const { checklist, clearChecklist, setComplete } = useChecklist();
  const { mealName, mealIngredients } = checklist;
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[999] animate-fadeIn">
      <div
        className={`h-[80%] w-[90%] fixed p-4 my-10  flex flex-col gap-y-2 bg-[var(--primary-color)] rounded-xl md:w-[60%]`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)] md:text-2xl">
          <p>Checklist</p>
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX className="md:w-8 md:h-8" />
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <p className="flex text-lg font-bold md:text-xl">
            {mealName}
            {Boolean(mealName) ? (
              <IconTrash className="text-red-700" onClick={clearChecklist} />
            ) : (
              ""
            )}
          </p>
          <ul className="text-base list-disc list-inside">
            {Boolean(mealIngredients) ? (
              mealIngredients
                .filter(({ ingredient }) => Boolean(ingredient))
                .map(({ ingredient, complete }, index) => (
                  <li
                    key={index}
                    className={`${
                      complete ? "line-through text-green-700" : ""
                    }`}
                    onClick={() => setComplete(ingredient)}
                  >
                    {ingredient}
                  </li>
                ))
            ) : (
              <div className="h-[10rem] flex flex-col justify-evenly items-center">
                <img
                  src={groceryPenguin}
                  alt=""
                  className="w-[5rem] h-[5rem]"
                />
                <p className="text-xl text-center font-bold">
                  Choose a recipe to put in the checklist!
                </p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
