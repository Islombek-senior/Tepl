import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import {
  FaCalendarAlt,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaWallet,
} from "react-icons/fa";
import { Contexts } from "../App";
import { toast } from "react-toastify";
import "../selectedProducts/selected.css";

const ProductList = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const { like, basket, setBasket, setLike } = useContext(Contexts);

  const counter = () => {
    setCount((prev) => prev + 1);
  };

  const enCounter = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const addToBasket = () => {
    const exsistB = basket.some((t) => t.id === data.id);
    if (!exsistB) {
      setBasket([...basket, data]);
      toast("Added to basket!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else {
      toast("This product is already in the basket!", {
        theme: "colored",
        className: "bg-danger my-toast_1",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  const addToLike = () => {
    const exsistL = like.some((t) => t.id === data.id);
    if (!exsistL) {
      setLike([...like, data]);
      toast("Added to favorite list!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else {
      toast("This product is already in your favorites!", {
        theme: "colored",
        className: "bg-danger my-toast_1",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "10px",
            width: "1200px",
            height: "auto",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
          }}
          key={data.id}
          className="shadow-lg hover:shadow-xl"
        >
          <div style={{ flex: "0 0 50%" }}>
            <img
              src={data.images?.[0]}
              alt={data.title}
              style={{
                objectFit: "contain",
                width: "70%",
                height: "auto",
              }}
            />
          </div>
          <div style={{ textAlign: "start", flex: "1", marginLeft: "20px" }}>
            <p
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              {data.title}
            </p>
            <p>{data.description}</p>
            <p
              style={{
                fontSize: "30px",
                marginTop: "20px",
                color: "red",
              }}
            >
              {data.price} sum
            </p>
            <div className="button-container">
              <button className="action-button">
                <FaWallet />
              </button>
              <button className="action-button">
                <FaCalendarAlt />
              </button>
              <button onClick={addToBasket} className="action-button">
                <HiMiniShoppingCart />
              </button>
              <button onClick={addToLike} className="action-button">
                <FaRegHeart />
              </button>
              <div className="quantity-container">
                <button className="quantity-button" onClick={enCounter}>
                  <FaMinus />
                </button>
                <span className="quantity-display">{count}</span>
                <button className="quantity-button" onClick={counter}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
