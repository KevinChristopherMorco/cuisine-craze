import { useState, useEffect } from "react";

const useActiveList = () => {
  const [active, setActiveState] = useState(
    JSON.parse(localStorage.getItem("active")) || {
      list: "chicken",
      nav: null,
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
    // if (!nav) {
    //   document.body.classList.remove("overflow-hidden");
    //   return;
    // }
    // document.body.classList.add("overflow-hidden");
  }, [nav]);

  return { active, setActive, clearActive };
};

export default useActiveList;
