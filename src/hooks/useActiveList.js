import { useState, useEffect } from "react";

const useActiveList = () => {
  const [active, setActiveState] = useState(
    JSON.parse(localStorage.getItem("active")) || {
      list: null,
      nav: null,
    }
  );
  const setActive = (type, value) => {
    setActiveState((prev) => ({ ...prev, [type]: value }));
  };
  const clearActive = (type) => {
    setActiveState((prev) => ({ ...prev, [type]: null }));
  };
  useEffect(
    () => localStorage.setItem("active", JSON.stringify(active)),
    [active]
  );
  return { active, setActive, clearActive };
};

export default useActiveList;
