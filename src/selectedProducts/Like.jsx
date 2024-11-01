import React, { useContext, useEffect } from "react";
import { Button } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import { Contexts } from "../App";
import { Link } from "react-router-dom";

function Like() {
  const { like, setLike, setBasket, basket } = useContext(Contexts);

  const removeFromLike = (id) => {
    const updatedLike = like.filter((p) => p.id !== id);
    setLike(updatedLike);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          gap: "940px",
        }}
      >
        <h1>You've Liked products</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {like.map((item) => (
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
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
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
            </div>
            <div style={{ textAlign: "start" }}>
              <p style={{ fontSize: "20px" }}>{item.title}</p>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price} $
              </p>
              <div className="flex justify-between align-baseline gap-1 mt-5">
                <Link to={`/buying/${item.id}`}>
                  <Button
                    style={{
                      fontSize: "17px",
                    }}
                    className=" bg-[#FFB12A] hover:text-[#FFB12A] text-white border-0 w-44 sm:w-36 p-2"
                  >
                    Buy Now <HiMiniShoppingCart />
                  </Button>
                </Link>
                <Button
                  className="bg-[#ff2a2a] hover:bg-white hover:text-[#FFB12A] text-white border-0 w-16 sm:w-28 p-2"
                  onClick={() => removeFromLike(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                >
                  <GoTrash />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Like;
