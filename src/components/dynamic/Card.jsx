import React from "react";
import { IconFlag3 } from "@tabler/icons-react";
import food from "../../images/foods/food.jpeg";

const Card = () => {
  const cardBackground = {
    backgroundImage: `url(${food})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="min-h-[18rem] shrink-0 basis-[60%] h-fit flex flex-col justify-around bg-blue-200 shadow-lg shadow-[var(--secondary-color)] rounded-xl">
        <div
          className="w-[10rem] h-[10rem] mx-2 flex justify-end shadow shadow-[var(--accent-color)] rounded-full self-end"
          style={cardBackground}
        ></div>
        <div className="px-2 flex flex-col justify-end gap-y-4">
          <div>
            <p className="text-lg font-bold">Blueberry Pancake</p>
          </div>
          <div className="flex items-center gap-x-1 text-[var(--inactive-color)]">
            <IconFlag3 /> <p>Filipino</p>
          </div>
        </div>
      </div>

      {/* Sample */}
    </>
  );
};

export default Card;
