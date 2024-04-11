import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Logo from "../images/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track whether the menu is open or closed

  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
          <img
            src={Logo}
            className="w-28 h-10 mix-blend-multiply"
            alt="my logo img"
          />
        </Link>
        {/* Toggle button for opening/closing menu */}
        <div
          className="md:hidden bg-transparent cursor-pointer border-none inline-block"
          onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu state
        >
          {menuOpen ? ( // Render close icon if menu is open, otherwise render menu icon
            <CgClose
              name="close-outline"
              className="block md:hidden md:font-xl md:absolute md:top-1/3 md:right-10% z-50"
            />
          ) : (
            <CgMenu
              name="menu-outline"
              className="block md:hidden md:font-xl md:absolute md:top-1/3 md:right-10% z-50"
            />
          )}
        </div>
      </div>
      {menuOpen && ( // Render menu only if it is open
        <ul className="flex items-center flex-col md:flex-row gap-[76px] md:hidden">
          {/* Menu items */}
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
          {/* Cart icon */}
          <li>
            <Link
              to="/cart"
              className="items-center gap-2 relative hidden md:block"
            >
              <GrCart className="relative hover:text-[#a647ff]" />
              {/* Cart count */}
              <span className="absolute w-4 h-4 text-[10px] text-white font-medium top-[-20%] left-[70%] bg-[#9c33ff] grid place-items-center rounded-[50%]">
                20
              </span>
            </Link>
          </li>
        </ul>
      )}
      {/* Menu for larger screens */}
      <ul className="md:flex items-center flex-col md:flex-row gap-[76px] hidden">
        {/* Menu items */}
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
        {/* Cart icon */}
        <li>
          <Link
            to="/cart"
            className="items-center gap-2 relative hidden md:block"
          >
            <GrCart className="relative hover:text-[#a647ff]" />
            {/* Cart count */}
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
