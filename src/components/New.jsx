import { Button, Pagination } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { usePro } from "../hooks/UseContext";

function New() {
  const { data, addToBasket, addToLike } = usePro();

  // Pagination uchun zaruriy holatlar
  const [currentPage, setCurrentPage] = useState(1); // Hozirgi sahifa
  const itemsPerPage = 8; // Har bir sahifada qancha mahsulot ko'rsatiladi

  // Hozirgi sahifada ko'rsatiladigan mahsulotlar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((item) => (
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
      <Pagination
        style={{ marginTop: "50px", fontSize: "17px", marginBottom: "50px" }}
        align="center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={data.length}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default New;
