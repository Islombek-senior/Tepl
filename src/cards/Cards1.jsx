import React from "react";
import { Button } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePro } from "../hooks/UseContext";

function Cards1() {
  const { data, addToBasket, addToLike } = usePro();

  return (
    <>
      <div className="flex justify-between align-middle mb-3 p-8">
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>
          Новинки на сайте
        </h1>
        <Link to={"/allCategories"}>Смотреть все</Link>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.slice(0, 12).map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-md p-5 mb-8 flex flex-col justify-between min-h-[450px]"
            >
              {/* Image */}
              <Link to={`/productList/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto w-[200px] h-[200px] object-contain mb-4"
                />
              </Link>

              {/* Title and Description */}
              <div className="text-start">
                <p className="text-lg font-bold mb-2">{item.title}</p>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <p className="text-xl font-bold">{item.price} сум</p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-3 mt-[1px]">
                {/* Basket Button */}
                <Button
                  onClick={() => data.length > 0 && addToBasket(item.id)}
                  className="bg-[#FFB12A] text-white hover:text-[#FFB12A] hover:bg-white border border-[#FFB12A] w-full h-[40px] text-[17px] flex items-center justify-center gap-2"
                >
                  <HiMiniShoppingCart /> В корзину
                </Button>

                {/* Like Button */}
                <Button
                  onClick={() => addToLike(item.id)}
                  className="bg-white text-[#FFB12A] border border-[#FFB12A] w-16 h-[40px] flex items-center justify-center hover:bg-[#FFB12A] hover:text-white"
                >
                  <FaRegHeart size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards1;
