import React from "react";
import food from "../../../images/foods/food.jpeg";

const Hero = () => {
  return (
    <div className="h-[20rem] p-2 bg-waves bg-no-repeat bg-cover dark:bg-wavesDark md:h-[22rem] lg:h-[25rem]">
      <h1 className="text-2xl text-[#fff] font-medium md:text-4xl lg:text-5xl">
        Hi there, stranger!
      </h1>
      <div className="py-10 flex gap-x-4 lg:gap-x-0 lg:justify-between">
        <div className="basis-[70%]">
          <p className="text-xl font-medium text-[#fff] leading-[3rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[4rem]">
            Find recipes based on what you already have at{" "}
            <span className="font-bold">home!</span>
          </p>
        </div>
        <div className="p-2 h-[9rem] w-[9rem] bg-[var(--secondary-color)] rounded-full md:h-[12rem] md:w-[12rem] lg:h-[16rem] lg:w-[16rem]">
          <img
            src={food}
            alt="Food Cover"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
