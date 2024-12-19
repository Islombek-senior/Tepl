import React, { useContext } from "react";
import { Contexts } from "../hooks/UseContext";
import { Link } from "react-router-dom";

function AllCategories() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.slice(12, 30).map((item) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
