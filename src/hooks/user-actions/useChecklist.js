import React, { useEffect, useState } from "react";

const useChecklist = () => {
  const [checklist, setChecklist] = useState(
    JSON.parse(localStorage.getItem("checklist")) || { list: null }
  );

  const addChecklist = (mealId, mealName, mealIngredients) => {
    setChecklist({ mealId, mealName, mealIngredients });
  };

  const setComplete = (ingredientName) => {
    setChecklist((prev) => ({
      ...checklist,
      mealIngredients: prev.mealIngredients.map(({ ingredient, complete }) =>
        ingredientName === ingredient
          ? { ingredient, complete, complete: true }
          : { ingredient, complete }
      ),
    }));
  };

  const clearChecklist = () => {
    setChecklist({ list: null });
  };

  useEffect(
    () => localStorage.setItem("checklist", JSON.stringify(checklist)),
    [checklist]
  );

  return { checklist, addChecklist, clearChecklist, setComplete };
};

export default useChecklist;
