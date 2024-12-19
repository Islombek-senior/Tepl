import React, { useState } from "react";
import { Button } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import Modal_2 from "../modal/Modal_2";
import { usePro } from "../hooks/UseContext";

function Basket() {
  const { basket, setBasket, removeFromB } = usePro();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((p) => p.id !== id);
    setBasket(updatedBasket);
    localStorage.clear();
  };

  /////////////// Local storage

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
        <h1>Your Basket</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {basket.map((item) => (
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
            <div className="text-start">
              <p className="text-lg font-bold mb-2">{item.title}</p>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <p className="text-xl font-bold">{item.price} сум</p>
            </div>

            <div className="flex items-center justify-between gap-3 mt-[1px]">
              <Button
                style={{
                  fontSize: "17px",
                }}
                className="bg-[#FFB12A] text-white hover:text-[#FFB12A] hover:bg-white border border-[#FFB12A] w-full h-[40px] text-[17px] flex items-center justify-center gap-2"
                onClick={showModal}
              >
                Buy Now <HiMiniShoppingCart />
              </Button>
              <Button
                className="bg-red-600 text-white border-none w-16 h-[40px] flex items-center justify-center hover:bg-[#FFB12A] hover:text-white"
                onClick={() => removeFromB(item.id)}
                style={{
                  fontSize: "17px",
                }}
              >
                <GoTrash />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Modal_2
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
      />
    </div>
  );
}

export default Basket;
