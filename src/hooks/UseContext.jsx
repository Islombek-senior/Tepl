import axios from "axios";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export const Contexts = createContext();

function UseContext({ children }) {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [like, setLike] = useState([]);

  const addToBasket = (id) => {
    const everr = data.find((it) => it.id === id);
    const exsistB = basket.some((t) => t.id === id);

    if (everr && !exsistB) {
      setBasket([...basket, everr]);
      toast("Added to basket!", { theme: "colored", className: "bg-success" });
    } else if (exsistB) {
      alert("This product is already in your basket");
    }
    console.log(id);
  };

  const addToLike = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistL = like.some((t) => t.id === id);
    if (product && !exsistL) {
      setLike([...like, product]);
      toast("Wow so easy!");
    } else if (exsistL) {
      alert("This product is already in your favorite list");
    }
  };

  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((p) => p.id !== id);
    setBasket(updatedBasket);
  };
  const removeFromLike = (id) => {
    const updatedLike = like.filter((p) => p.id !== id);
    setLike(updatedLike);
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);

  return (
    <Contexts.Provider
      value={{
        data,
        setData,
        basket,
        setBasket,
        like,
        setLike,
        addToBasket,
        addToLike,
        removeFromBasket,
        removeFromLike,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export const usePro = () => {
  return useContext(UseContext);
};

export default UseContext;
