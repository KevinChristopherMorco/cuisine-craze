import React, { useEffect, useState } from "react";

const useActionsFavorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleAddFavorites = (mealId, mealName, mealImg) => {
    setFavorites((favorites) => {
      const checkIfExist = favorites.some(
        (favorite) => favorite.mealId === mealId
      );

      if (checkIfExist) {
        return [...favorites];
      }

      return [{ mealId, mealName, mealImg }, ...favorites];
    });
  };

  const handleDeleteFavorites = (mealId) => {
    setFavorites(favorites.filter((x) => x.mealId !== mealId));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, handleAddFavorites, handleDeleteFavorites };
};

export default useActionsFavorites;
