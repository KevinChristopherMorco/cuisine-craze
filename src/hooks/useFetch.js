import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { data: response } = await axios.get(url, {
          timeout: 3000,
        });

        setData(response.meals || []);
        setLoader(true);
      } catch (error) {
        console.error(error.message);
        console.error(
          "Something went wrong, we're trying to address the issue."
        );
        setError(true);
      }
    })();
  }, [url]);

  return { data, error, loader };
};

export default useFetch;
