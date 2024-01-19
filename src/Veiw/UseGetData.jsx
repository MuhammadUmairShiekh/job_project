import React, { useEffect, useState } from "react";

const UseGetData = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const res = fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getData();
  }, [category]);
  return { data };
  
};

export default UseGetData;
