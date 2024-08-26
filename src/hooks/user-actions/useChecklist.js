import React, { useEffect, useState } from "react";

const useChecklist = () => {
  const [checklist, setChecklist] = useState(
    JSON.parse(localStorage.getItem("checklist")) || { list: null }
  );

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countIngredients")) || 0
  );

  const addChecklist = (mealId, mealName, mealIngredients) => {
    setChecklist({ mealId, mealName, mealIngredients });
  };

  const setComplete = (ingredientName, bool) => {
    setChecklist((prev) => {
      bool ? setCount(count + 1) : setCount(count - 1);

      return {
        ...checklist,
        mealIngredients: prev.mealIngredients.map(({ ingredient, complete }) =>
          ingredientName === ingredient
            ? { ingredient, complete, complete: bool }
            : { ingredient, complete }
        ),
      };
    });
  };

  const clearChecklist = () => {
    setChecklist({ list: null });
  };

  useEffect(
    () => localStorage.setItem("checklist", JSON.stringify(checklist)),
    [checklist]
  );

  useEffect(
    () => localStorage.setItem("countIngredients", JSON.stringify(count)),
    [count]
  );

  return { checklist, count, addChecklist, clearChecklist, setComplete };
};

export default useChecklist;
