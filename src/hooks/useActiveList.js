import { useState, useEffect } from "react";

const useActiveList = () => {
  const [active, setActiveState] = useState(
    JSON.parse(localStorage.getItem("active")) || {
      list: "chicken",
      nav: null,
      tab: "ingredients",
    }
  );
  const { list, nav } = active;

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

  useEffect(() => {
    console.log(nav);
    if (!nav) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    if (nav !== "home") {
      document.body.classList.add("overflow-hidden");
    }
  }, [nav]);

  return { active, setActive, clearActive };
};

export default useActiveList;
