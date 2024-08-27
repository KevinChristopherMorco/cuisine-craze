import React from "react";
import searchingPenguin from "../../images/gif/searching-penguin.gif";

const SearchResponse = ({ title, subtext }) => {
  return (
    <div className="h-[10rem] flex flex-col justify-evenly items-center">
      <img
        src={searchingPenguin}
        className="w-[8rem] h-[8rem] xl:w-[12rem] xl:h-[12rem]"
      />
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-lg font-bold md:text-xl lg:text-2xl">{title}</p>
        <p className="text-base font-medium italic">{subtext}</p>
      </div>
    </div>
  );
};

export default SearchResponse;
