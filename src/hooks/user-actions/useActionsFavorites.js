import { useEffect, useState } from "react";
import { successfulAlert, infoAlert } from "../../components/alerts/Alerts";

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
      successfulAlert(`${mealName} listed as a favorite!`);
      return [{ mealId, mealName, mealImg }, ...favorites];
    });
  };

  const handleDeleteFavorites = (mealId, mealName) => {
    setFavorites(favorites.filter((x) => x.mealId !== mealId));
    infoAlert(`${mealName} removed as a favorite!`);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, handleAddFavorites, handleDeleteFavorites };
};

export default useActionsFavorites;
