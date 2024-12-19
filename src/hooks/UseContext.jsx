import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Contexts = createContext();
function UseContext({ children }) {
  const [data, setData] = useState([]);

  ///////////////////
  const storedLs = JSON.parse(localStorage.getItem("like")) || [];
  const [like, setLike] = useState(storedLs);
  ////////////////////////////////////|

  const storedBs = JSON.parse(localStorage.getItem("basket")) || [];
  const [basket, setBasket] = useState(storedBs);
  useEffect(() => {
    if (basket) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  useEffect(() => {
    if (like) {
      localStorage.setItem("like", JSON.stringify(like));
    }
  }, [like]);

  useEffect(() => {
    axios.get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom").then((res) => {
      setData(res.data);
    });
  }, []);

  const removeFromB = (item) => {
    setBasket(basket.filter((p) => p.id !== item));
  };

  const removeFromLike = (item) => {
    setLike(like.filter((p) => p.id !== item));
  };
  const addToBasket = (item) => {
    const product = data.find((p) => p.id === item);
    const existsB = basket.some((t) => t.id === item);

    if (product && !existsB) {
      setBasket([...basket, product]);
      toast("Added to basket!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center",
        style: { fontSize: "16px", padding: "5px", borderRadius: "8px" },
      });
    } else if (existsB) {
      toast("This product is already in the basket!", {
        theme: "colored",
        className: "bg-success my-toast_1",
        autoClose: 1000,
        position: "top-center",
        style: { fontSize: "16px", padding: "5px", borderRadius: "8px" },
      });
    }
  };

  const addToLike = (item) => {
    const product = data.find((p) => p.id === item);
    const existsL = like.some((t) => t.id === item);
    if (product && !existsL) {
      setLike([...like, product]);
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
    } else if (existsL) {
      toast("This product is already in the favorite list!", {
        theme: "colored",
        className: "bg-success my-toast_1",
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

  return (
    <Contexts.Provider
      value={{
        data,
        setData,
        basket,
        setBasket,
        like,
        addToBasket,
        addToLike,
        setLike,
        removeFromB,
        removeFromLike,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export const usePro = () => {
  return useContext(Contexts);
};

export default UseContext;
