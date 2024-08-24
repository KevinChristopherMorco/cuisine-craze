import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.meals || []);
        setLoader(true);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [url]);

  return { data, loader };
};

export default useFetch;
