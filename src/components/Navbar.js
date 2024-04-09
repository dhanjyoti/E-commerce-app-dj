import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
          <img
            src="./images/logo.png"
            className="w-28 h-10 mix-blend-multiply"
            alt="my logo img"
          />
        </Link>
        {/* buttons for open and close menu */}
        <div
          className="md:hidden bg-transparent cursor-pointer border-none inline-block"
          onClick={() => setMenuIcon((prev) => !prev)}
        >
          <CgMenu
            name="menu-outline"
            className="block md:hidden md:font-xl md:absolute md:top-1/3 md:right-10% z-50"
          />
          <CgClose
            name="close-outline"
            className="hidden md:block md:font-xl md:absolute md:top-1/3 md:right-10% z-50"
          />
        </div>
      </div>
      {menuIcon && (
        <ul className="flex items-center flex-col md:flex-row gap-[76px] md:hidden">
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/">Home</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/about">About</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/products">Products</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="items-center gap-2 relative hidden md:block"
            >
              <GrCart className="relative hover:text-[#a647ff]" />
              <span className="absolute w-4 h-4 text-[10px] text-white font-medium top-[-20%] left-[70%] bg-[#9c33ff] grid place-items-center rounded-[50%]">
                20
              </span>
            </Link>
          </li>
        </ul>
      )}
      <ul className="md:flex items-center flex-col md:flex-row gap-[76px] hidden">
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/">Home</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/about">About</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/products">Products</Link>
          </li>
          <li className="visited:inline-block text-7 font-medium hover:text-[#a647ff]">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="items-center gap-2 relative hidden md:block"
            >
              <GrCart className="relative hover:text-[#a647ff]" />
              <span className="absolute w-4 h-4 text-[10px] text-white font-medium top-[-20%] left-[70%] bg-[#9c33ff] grid place-items-center rounded-[50%]">
                20
              </span>
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
