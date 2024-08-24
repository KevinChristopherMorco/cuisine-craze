import React, { useState } from "react";
import useFetch from "../useFetch";

const useSearch = () => {
  const [input, setInput] = useState({ search: "" });
  const [empty, checkEmpty] = useState(false);
  const { search } = input;

  const { data, loader } = useFetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${search}`
  );

  const handleInput = (event) => {
    const { name, value } = event.target;

    value.length > 0 ? checkEmpty(true) : checkEmpty(false);

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return { data, loader, input, empty, handleInput };
};

export default useSearch;
