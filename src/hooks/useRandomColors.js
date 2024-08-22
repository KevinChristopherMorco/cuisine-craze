import { useRef, useState } from "react";

const useRandomColors = () => {
  const combination = "89ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += combination[Math.floor(Math.random() * combination.length)];
  }

  const hexCodes = ["#CEEDFF", "#FFEFCB", "#BDF9BD"];

  return { hexCode: hexCodes[Math.floor(Math.random() * hexCodes.length)] };
};

export default useRandomColors;
