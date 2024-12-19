import { Button } from "antd";
import React from "react";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Contexts } from "../App";
import imgs from "./imgs/image.png";
import { toast } from "react-toastify";
import { usePro } from "../hooks/UseContext";

function Discount() {
  const { data, addToBasket, addToLike } = usePro();

  return (
    <div className="container mx-auto mt-14">
      <p className="text-3xl mb-14" style={{ fontWeight: "bold" }}>
        Товары по акции
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow-md p-5 mb-8 flex flex-col justify-between min-h-[450px]"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "250px",
                borderRadius: "10px",
              }}
            >
              <img
                src={imgs}
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Title and Description */}
            <div className="text-start">
              <p className="text-lg font-bold mb-2">{item.title}</p>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <p className="text-xl font-bold">{item.price} сум</p>
            </div>

            <div className="flex items-center justify-between gap-3 mt-[1px]">
              <Button
                onClick={() => data.length > 0 && addToBasket(item.id)}
                style={{
                  fontSize: "17px",
                }}
                className="bg-[#FFB12A] text-white hover:text-[#FFB12A] hover:bg-white border border-[#FFB12A] w-full h-[40px] text-[17px] flex items-center justify-center gap-2"
              >
                В корзину <HiMiniShoppingCart />
              </Button>
              <Button
                className="bg-white text-[#FFB12A] border border-[#FFB12A] w-16 h-[40px] flex items-center justify-center hover:bg-[#FFB12A] hover:text-white"
                onClick={() => addToLike(item.id)}
                style={{
                  fontSize: "17px",
                }}
              >
                <FaRegHeart />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discount;
