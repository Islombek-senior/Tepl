import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
import { Button } from "antd";
import Modal_2 from "../modal/Modal_2";
import Modal_3 from "../modal/Modal_3";
import { usePro } from "../hooks/UseContext";
import Media from "../skeleton/Skeleton";

const ProductList = () => {
  const [data_1, setData_1] = useState({});
  const { data, setData, addToBasket, addToLike } = usePro();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen_3, setIsModalOpen_3] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal_3 = () => {
    setIsModalOpen_3(true);
  };

  const counter = () => {
    setCount((prev) => prev + 1);
  };

  const enCounter = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    axios
      .get(`https://0c7d0caa3768a5b0.mokky.dev/Teplodom/${id}`)
      .then((res) => {
        setData_1(res.data);
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
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-20 hover:shadow-xl w-full max-w-full mb-16 gap-8">
        {/* Rasm bo'limi */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={data_1.img}
            alt={data_1.title}
            className="object-contain w-3/4 h-auto"
          />
        </div>
        {loading && <Media loading={loading} />}

        {/* Ma'lumot bo'limi */}
        <div className="flex-1 text-start relative">
          <h2 className="text-[40px] font-bold mb-4">{data_1.title}</h2>
          <p className="text-gray-700 mb-4">{data_1.desc}</p>
          <p className="text-red-500 text-[45px] mb-6">{data_1.price} сум</p>

          {/* Tugmalar va miqdor bo'limi */}
          <div className="flex items-center gap-4 absolute bottom-5">
            <button
              className="p-4 border-2 border-black hover:border-yellow-500 w-16 h-16 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 rounded-lg text-2xl flex items-center justify-center"
              onClick={showModal}
            >
              <FaWallet />
            </button>
            <button
              className="p-4 border-2 border-black hover:border-yellow-500 w-16 h-16 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 rounded-lg text-2xl flex items-center justify-center"
              onClick={showModal_3}
            >
              <FaCalendarAlt />
            </button>
            <button
              className="p-4 border-2 border-black hover:border-yellow-500 w-16 h-16 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 rounded-lg text-2xl flex items-center justify-center"
              onClick={() => addToBasket(data_1.id)}
            >
              <HiMiniShoppingCart />
            </button>
            <button
              className="p-4 border-2 border-black hover:border-yellow-500 w-16 h-16 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 rounded-lg text-2xl flex items-center justify-center"
              onClick={() => addToLike(data_1.id)}
            >
              <FaRegHeart />
            </button>

            {/* Miqdor tugmalari */}
            <div className="flex items-center gap-2">
              <button
                className="p-4 w-12 h-12 bg-gray-300 rounded-lg text-xl hover:bg-gray-400 flex items-center justify-center"
                onClick={enCounter}
              >
                <FaMinus />
              </button>
              <span className="text-2xl">{count}</span>
              <button
                className="p-4 w-12 h-12 bg-gray-300 rounded-lg text-xl hover:bg-gray-400 flex items-center justify-center"
                onClick={counter}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////// */}
      <div className="flex justify-between align-middle mb-14">
        <p className="text-[20px]">Похожие продукты</p>
        <Link to={"/allCategories"}>
          <p className="text-[25px]">Смотреть все</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 12).map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow-md p-5 mb-8 flex flex-col justify-between min-h-[450px]"
          >
            <Link to={`/productList/${item.id}`}>
              <img
                src={item.img}
                alt=""
                className="mx-auto w-[200px] h-[200px] object-contain mb-4"
              />
            </Link>
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
      <Modal_2
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
      />
      <Modal_3
        isModalOpen_3={isModalOpen_3}
        setIsModalOpen_3={setIsModalOpen_3}
      />
    </div>
  );
};

export default ProductList;
