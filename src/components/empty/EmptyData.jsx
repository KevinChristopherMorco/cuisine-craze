import React from "react";
import sanPenguin from "../../images/gif/sad-penguin.gif";

const EmptyData = ({ title, subtext }) => {
  return (
    <div className="h-full my-6 flex flex-col items-center ">
      <div className="text-[var(--accent-color)]">
        <img src={sanPenguin} alt="" />
      </div>
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base font-medium italic">{subtext}</p>
      </div>
    </div>
  );
};

export default EmptyData;
