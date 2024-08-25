import React, { useEffect, useState } from "react";

const useThemeChange = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || {
      currentTheme: "light",
    }
  );

  const { currentTheme } = theme;

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(currentTheme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return { currentTheme, setTheme };
};

export default useThemeChange;
