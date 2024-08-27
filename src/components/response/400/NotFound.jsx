import React from "react";
import sadPenguin from "../../../images/gif/sad-penguin.gif";

const NotFound = ({ title, subtext }) => {
  return (
    <div className="h-full my-6 flex flex-col items-center ">
      <div className="text-[var(--accent-color)]">
        <img
          src={sadPenguin}
          className="w-[8rem] h-[8rem] xl:w-[12rem] xl:h-[12rem]"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-lg font-bold md:text-xl lg:text-2xl">{title}</p>
        <p className="text-base font-medium italic">{subtext}</p>
      </div>
    </div>
  );
};

export default NotFound;
