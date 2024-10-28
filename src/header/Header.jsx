import React, { useContext } from "react";
import img1 from "../header/header.jpg";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import { Contexts } from "../App";
import "../header/header.css";

function Header() {
  const { like, basket } = useContext(Contexts);

  return (
    <div className="bg-[#f7f7f7] py-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4">
        {/* Logo and Title */}
        <NavLink to="/">
          <div className="flex items-center gap-3">
            <img src={img1} alt="Logo" className="w-16 h-auto" />
            <div>
              <h2 className="text-[#FFB12A] font-bold text-lg md:text-xl">
                TEPLODOM
              </h2>
              <p className="text-sm md:text-base">
                Online store construction materials
              </p>
            </div>
          </div>
        </NavLink>

        {/* Search Input */}
        <div className="w-full md:w-auto">
          <input
            type="text"
            className="w-full md:w-80 p-3 rounded-xl shadow-md hidden lg:block outline-none"
            placeholder="Search..."
          />
        </div>

        {/* Icons (Like, Basket, Profile) */}
        <div className="flex gap-4 justify-around">
          {/* Like Icon */}
          <Link to="/like" className="relative">
            {like.length > 0 && (
              <span className="badge absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                {like.length}
              </span>
            )}
            <Button className="button_1 flex items-center justify-center">
              <FaRegHeart />
            </Button>
          </Link>

          {/* Basket Icon */}
          <Link to="/basket" className="relative">
            {basket.length > 0 && (
              <span className="badge absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                {basket.length}
              </span>
            )}
            <Button className="button_1 flex items-center justify-center">
              <GiShoppingBag />
            </Button>
          </Link>

          {/* Profile Icon */}
          <Button className="button_1 flex items-center justify-center">
            <GoPerson />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
