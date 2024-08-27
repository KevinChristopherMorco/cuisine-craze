import React from "react";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../loaders/Loader";
import ServerDown from "../../response/500/ServerDown";
import { IconEggs } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import food from "../../../images/foods/food.jpeg";

const Hero = () => {
  const { data, error, loader } = useFetch(
    "https://themealdb.com/api/json/v1/1/random.php"
  );

  return (
    <>
      <div className="h-[20rem] p-2 bg-waves bg-no-repeat bg-cover dark:bg-wavesDark md:h-[22rem] lg:h-[25rem]">
        <h1 className="text-2xl text-[#fff] font-medium md:text-4xl lg:text-5xl">
          Hi there!
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
      <div className="px-2 flex flex-col gap-y-6 lg:gap-y-10">
        <p className="text-xl font-bold md:text-2xl lg:text-3xl">
          Recipe of the day
        </p>
        {loader ? (
          <div className="flex flex-col items-center gap-y-2 lg:gap-y-6">
            <div className="w-[80%] h-[15rem] md:w-[55%] lg:w-[50%] lg:h-[20rem] xl:w-[45%]">
              {data.map(({ strMealThumb: mealImg }, index) => {
                return (
                  <img
                    key={index}
                    src={mealImg}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-y-4 lg:min-w-[70%]  lg:gap-y-6">
              {data.map(({ strMeal: mealName }, index) => {
                return (
                  <p
                    key={index}
                    className="text-xl text-center font-bold md:text-2xl"
                  >
                    {mealName}
                  </p>
                );
              })}
              {data.map(({ strMeal: mealName }, index) => {
                return (
                  <Link
                    key={index}
                    to={mealName}
                    className="px-4 py-2 flex justify-evenly items-center outline outline-[var(--accent-color)] text-lg font-bold hover:bg-[var(--accent-color)] transition md:self-center md:w-[75%] lg:max-w-[25%]"
                  >
                    <IconEggs />
                    Check this out!
                  </Link>
                );
              })}
            </div>
          </div>
        ) : error ? (
          <ServerDown
            title="Servers are down"
            subtext="Please wait patiently, we're working on it."
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Hero;
