import React from "react";
import { Button } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import { usePro } from "../hooks/UseContext";

function Like() {
  const { like, addToBasket, removeFromLike } = usePro();

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
            className="relative bg-white rounded-lg shadow-md p-5 mb-8 flex flex-col justify-between min-h-[450px]"
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
                src={item.img}
                alt=""
                className="mx-auto w-[200px] h-[200px] object-contain mb-4"
              />
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
                  className="bg-[#FFB12A] text-white hover:text-[#FFB12A] hover:bg-white border border-[#FFB12A] w-full h-[40px] text-[17px] flex items-center justify-center gap-2"
                >
                  Add to basket <HiMiniShoppingCart />
                </Button>
                <Button
                  className="bg-red-600 text-white border border-[#FFB12A] w-16 h-[40px] flex items-center justify-center hover:bg-[#FFB12A] hover:text-white"
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
