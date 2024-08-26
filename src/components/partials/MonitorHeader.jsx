import React, { useState } from "react";
import useThemeChange from "../../hooks/useThemeChange";
import {
  IconMenuDeep,
  IconHomeFilled,
  IconHeartFilled,
  IconSearch,
  IconMoonStars,
  IconBrightness2,
  IconFileCheck,
} from "@tabler/icons-react";

const MonitorHeader = ({ nav, setActive }) => {
  const [toggle, setToggle] = useState(false);
  const { currentTheme, setTheme } = useThemeChange();

  return (
    <div className="hidden xl:flex xl:justify-end xl:items-stretch xl:gap-x-1 xl:fixed xl:right-4 xl:bottom-4">
      {toggle && (
        <div
          className={
            "w-[50rem] flex items-center translate-x-6 bg-[var(--secondary-color)] z-[-1] rounded-xl animate-navToggleIn"
          }
        >
          <ul className="w-full mr-5 flex justify-around items-center gap-x-10">
            <li>
              <button
                className={`${
                  nav === "home" || nav === null
                    ? "text-[var(--active-color)]"
                    : "text-[var(--inactive-color)]"
                } flex items-center gap-x-1 transition-colors cursor-pointer`}
                onClick={() => setActive("nav", "home")}
              >
                <IconHomeFilled className="w-7 h-7" />
                <p>Home</p>
              </button>
            </li>
            <li>
              <button
                className={`${
                  nav === "favorites"
                    ? "text-[var(--active-color)]"
                    : "text-[var(--inactive-color)]"
                } flex items-center gap-x-1 transition-colors cursor-pointer`}
                onClick={() => setActive("nav", "favorites")}
              >
                <IconHeartFilled className="w-7 h-7" />
                <p>Favorites</p>
              </button>
            </li>
            <li>
              <button
                className={`${
                  nav === "search"
                    ? "text-[var(--active-color)]"
                    : "text-[var(--inactive-color)]"
                } flex items-center gap-x-1 transition-colors cursor-pointer`}
                onClick={() => setActive("nav", "search")}
              >
                <IconSearch className="w-7 h-7" />
                <p>Search</p>
              </button>
            </li>
            <li>
              <button
                className={`${
                  nav === "list"
                    ? "text-[var(--active-color)]"
                    : "text-[var(--inactive-color)]"
                } flex items-center gap-x-1 transition-colors cursor-pointer`}
                onClick={() => setActive("nav", "list")}
              >
                <IconFileCheck className="w-7 h-7" />
                <p>Checklist</p>
              </button>
            </li>
            <li className="flex items-center gap-x-1">
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
                  <p>Light Mode</p>
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
                  <p>Dark Mode</p>
                </button>
              )}
            </li>
          </ul>
        </div>
      )}

      <div
        className="w-[4rem] h-[4rem] flex justify-center items-center bg-[var(--accent-color)] text-[#fff] rounded-full cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <IconMenuDeep className="w-[2.5rem] h-[2.5rem]" />
      </div>
    </div>
  );
};

export default MonitorHeader;
