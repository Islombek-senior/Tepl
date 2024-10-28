import React, { useContext } from "react";
import { Button, Card, Col, Row } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Contexts } from "../App";
import { toast } from "react-toastify";

function Cards1() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

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

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between align-middle mb-14 p-8">
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>
          {" "}
          New items on the site
        </h1>
        <a href="#" className=" underline-0 text-2xl">
          All category
        </a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 12).map((item) => (
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "30px",
              height: "450px",
              marginBottom: "50px",
            }}
            key={item.id}
            className="shadow-md"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt=""
                  style={{
                    width: "100px",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div style={{ textAlign: "start" }}>
              <p style={{ fontSize: "20px" }}>{item.title}</p>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price} $
              </p>
              <div className="flex justify-between align-baseline gap-1 mt-5">
                <Button
                  onClick={() => addToBasket(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                  className=" bg-[#FFB12A] hover:text-[#FFB12A] text-white border-0 w-44 sm:w-36 p-2"
                >
                  Add to cart <HiMiniShoppingCart />
                </Button>
                <Button
                  className="bg-[#FFB12A] hover:bg-white hover:text-[#FFB12A] text-white border-0 w-16 sm:w-28 p-2"
                  onClick={() => addToLike(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                >
                  <FaRegHeart />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards1;
