import React from "react";
import useThemeChange from "../../hooks/useThemeChange";
import {
  IconHomeFilled,
  IconHeartFilled,
  IconSearch,
  IconMoonStars,
  IconBrightness2,
  IconFileCheck,
} from "@tabler/icons-react";
const MobileHeader = ({ nav, setActive }) => {
  const { currentTheme, setTheme } = useThemeChange();
  return (
    <div className="w-full h-14 left-1/2 -translate-x-1/2 fixed bottom-4 flex items-center bg-[var(--secondary-color)] z-[999] rounded-3xl md:w-[80%] lg:w-[60%] xl:hidden">
      <ul className="w-full flex items-center justify-around">
        <li>
          <button
            className={`${
              nav === "home" || nav === null
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "home")}
          >
            <IconHomeFilled className="md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </button>
        </li>
        <li>
          <button
            className={`${
              nav === "favorites"
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "favorites")}
          >
            <IconHeartFilled className="md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </button>
        </li>
        <li className="p-4 bg-[var(--accent-color)] rounded-full">
          <button
            className={`flex text-4xl text-[#fff] items-center cursor-pointer`}
            onClick={() => setActive("nav", "search")}
          >
            <IconSearch className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" />
          </button>
        </li>

        <li>
          <button
            className={`${
              nav === "list"
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "list")}
          >
            <IconFileCheck className="md:w-8 md:h-8 lg:w-9 lg:h-9" />
          </button>
        </li>

        <li>
          {currentTheme === "dark" ? (
            <button
              className={`${
                nav === "settings"
                  ? "text-[var(--active-color)]"
                  : "text-[var(--inactive-color)]"
              } flex items-center transition-colors cursor-pointer`}
              onClick={() => setTheme({ currentTheme: "light" })}
            >
              <IconBrightness2 className="md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </button>
          ) : (
            <button
              className={`${
                nav === "settings"
                  ? "text-[var(--active-color)]"
                  : "text-[var(--inactive-color)]"
              } flex items-center transition-colors cursor-pointer`}
              onClick={() => setTheme({ currentTheme: "dark" })}
            >
              <IconMoonStars />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
