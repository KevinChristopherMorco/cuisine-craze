import React, { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState();
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const dateToday = new Date().toLocaleDateString("en-US", {
      timeZone: "UTC",
    });
    const visitDate = localStorage.getItem("visitDate");

    if (visitDate === dateToday) return;

    localStorage.setItem("visitDate", dateToday);
  }, []);

  return { time };
};

export default useTime;
