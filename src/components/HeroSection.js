import React from "react";
import { Link } from "react-router-dom";
import familyPic from "../images/familyShopping.jpg";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <div className="flex flex-col items-center md:flex-row justify-between my-20 md:mx-60 gap-5 ">
      <div className="md:w-96">
        <p className="px-12 md:px-0 text-lg font-semibold">Welcome to</p>
        <h2 className="text-[#d4af37] text-2xl font-semibold pb-7 px-12 md:px-0">
          {name}
        </h2>
        <p className="pb-5 px-12 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          voluptas temporibus. Cumque sapiente neque obcaecati? Nemo quae
          reiciendis nostrum nihil facilis
        </p>
        <Link
          to={"/products"}
          className="bg-[#5a04e5] text-white py-2 px-4 rounded-sm ml-12 md:ml-0"
        >
          Shop Now
        </Link>
      </div>
      {/* Home page hero section image */}
      <div>
        <img
          className="shadow-[40px_40px_0px_0px_rgba(109,40,217)] md:min-w-60"
          src={familyPic}
          alt="family_shopping_photo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
