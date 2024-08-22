import React, { useEffect, useState } from "react";

const useActionsFavorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleAddFavorites = (mealId, mealName, mealImg) => {
    setFavorites((favorites) => {
      // [...prev, { mealName: mealName, mealImg: mealImg }]
      const checkIfExist = favorites.some(
        (favorite) => favorite.mealId === mealId
      );

      if (checkIfExist) {
        return [...favorites];
      }

      return [...favorites, { mealId, mealName, mealImg }];
    });
  };

  const handleDeleteFavorites = (mealId) => {
    setFavorites(favorites.filter((x) => x.mealId !== mealId));
  };

  useEffect(
    () => localStorage.setItem("favorites", JSON.stringify(favorites)),
    [favorites]
  );

  return { favorites, handleAddFavorites, handleDeleteFavorites };
};

export default useActionsFavorites;
