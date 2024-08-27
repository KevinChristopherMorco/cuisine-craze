import React from "react";
import useChecklist from "../../../hooks/user-actions/useChecklist";
import { IconSquareRoundedX, IconTrash } from "@tabler/icons-react";
import groceryPenguin from "../../../images/gif/grocery-penguin.gif";

const List = ({ clearActive }) => {
  const { checklist, count, clearChecklist, setComplete } = useChecklist();
  const { mealName, mealIngredients } = checklist;
  return (
    <div className="w-full h-[100vh] fixed flex justify-center bg-[#000] bg-opacity-50 opacity-1 z-[999] animate-fadeIn">
      <div
        className={`h-[80%] w-[90%] fixed p-4 my-10  flex flex-col gap-y-2 bg-[var(--primary-color)] rounded-xl md:w-[60%] md:h-[60%] xl:h-fit`}
      >
        <div className="pb-3 flex justify-between items-center text-xl font-bold border-b-2 border-[var(--accent-color)] md:text-2xl lg:text-3xl">
          <p>Checklist</p>
          <div className="cursor-pointer" onClick={() => clearActive("nav")}>
            <IconSquareRoundedX className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:gap-y-10">
          {Boolean(mealName) && (
            <div className="flex justify-between items-center text-lg font-bold md:text-2xl">
              <p>{mealName}</p>
              <div className="flex items-center gap-x-1 text-sm text-red-700 md:text-base">
                <IconTrash
                  className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  onClick={clearChecklist}
                />
                <p>Remove</p>
              </div>
            </div>
          )}
          {Boolean(mealIngredients) ? (
            <>
              <div className="text-sm font-light md:text-base lg:text-lg">
                <p>
                  Ingredients completed: {count}/
                  {
                    mealIngredients.filter(({ ingredient }) =>
                      Boolean(ingredient)
                    ).length
                  }
                </p>
              </div>
              <ul className="h-[25rem] flex flex-col gap-y-2 overflow-y-scroll text-base cursor-pointer md:text-lg lg:h-[35rem] lg:gap-y-4 lg:text-xl xl:h-[20rem]">
                {mealIngredients
                  .filter(({ ingredient }) => Boolean(ingredient))
                  .map(({ ingredient, complete }, index) => (
                    <li
                      key={index}
                      className={`${
                        complete
                          ? "flex items-center gap-x-2 line-through text-green-400 before:content-['✔']"
                          : "flex items-center gap-x-2 before:content-['◦']"
                      }`}
                      onClick={
                        complete
                          ? () => setComplete(ingredient, false)
                          : () => setComplete(ingredient, true)
                      }
                    >
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <div className="h-[10rem] flex flex-col justify-evenly items-center">
              <img src={groceryPenguin} alt="" className="w-[5rem] h-[5rem]" />
              <p className="text-xl text-center font-bold">
                Choose a recipe to put in the checklist!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
