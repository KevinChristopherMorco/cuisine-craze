import React from "react";
import useActiveList from "../../hooks/useActiveList";
import {
  IconHomeFilled,
  IconHeartFilled,
  IconSearch,
  IconAdjustmentsHorizontal,
  IconCalendarEvent,
} from "@tabler/icons-react";
const MobileHeader = ({ nav, setActive }) => {
  return (
    <div className="w-full h-14 left-1/2 -translate-x-1/2 fixed bottom-4 flex items-center bg-[var(--secondary-color)] z-[999] rounded-3xl">
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
            <IconHomeFilled />
          </button>
        </li>
        <li className="">
          <button
            className={`${
              nav === "favorites"
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "favorites")}
          >
            <IconHeartFilled />
          </button>
        </li>
        <li className="p-4 bg-[var(--accent-color)] rounded-full">
          <button
            className={`flex text-4xl text-[#fff] items-center cursor-pointer`}
          >
            <IconSearch size={30} />
          </button>
        </li>
        <li>
          <button
            className={`${
              nav === "settings"
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "settings")}
          >
            <IconAdjustmentsHorizontal />
          </button>
        </li>
        <li>
          <button
            className={`${
              nav === "schedule"
                ? "text-[var(--active-color)]"
                : "text-[var(--inactive-color)]"
            } flex items-center transition-colors cursor-pointer`}
            onClick={() => setActive("nav", "schedule")}
          >
            <IconCalendarEvent />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
