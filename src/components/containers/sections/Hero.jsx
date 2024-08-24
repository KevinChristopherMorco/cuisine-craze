import React from "react";
import food from "../../../images/foods/food.jpeg";

const Hero = () => {
  return (
    <div className="h-[20rem] p-2 bg-waves bg-no-repeat bg-cover">
      <h1 className="text-2xl text-[#fff] font-medium">Hi there, stranger!</h1>
      <div className="py-10 flex gap-x-4">
        <div className="basis-[70%]">
          <p className="text-xl font-medium text-[#fff] leading-[3rem]">
            Find recipes based on what you already have at{" "}
            <span className="font-medium">home!</span>
          </p>
        </div>
        <div className="p-2 h-[9rem] w-[9rem] bg-[var(--secondary-color)] rounded-full">
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
