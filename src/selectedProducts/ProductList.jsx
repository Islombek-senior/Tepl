import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.images[0]} alt={data.title} />
      <p>{data.description}</p>
      <p>Narxi: ${data.price}</p>
    </div>
  );
};

export default ProductList;
