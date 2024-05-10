import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="flex flex-row justify-between items-center shadow-[4px_-2.5px_10px_-1px_#5a04e5] bg-gray-100 rounded-xl py-7 px-16 md:min-w-[740px] absolute mb-[700px] md:mb-[410px]">
        <div className="text-sm text-gray-700">
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>
       
          <NavLink
            className="bg-[#5a04e5] text-white py-2 px-4 rounded-sm md:w-[116px] w-[132px]"
            to="./contact"
          >
            Get Started
          </NavLink>
     
      </div>

      <div className="bg-[#0818A8] text-white w-full md:pt-16">
        <div className="flex flex-col md:flex-row text-sm justify-center p-10 gap-6 md:gap-20">
          <div className="max-w-40">
            <div className="pb-2">Star Shopping</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
              dolorem.
            </div>
          </div>
          <div>
            <div className="w-52">Subscribe to get important updates</div>
            <form action="#" className="flex flex-col items-start gap-3 pt-3">
              <input
                type="email"
                placeholder="your e-mail"
                className="bg-white py-2 px-4 rounded-sm text-black outline-none"
              />
              <input
                type="submit"
                value="subscribe"
                className="bg-[#5a04e5] text-white py-2 px-4 rounded-sm"
              />
            </form>
          </div>
          <div>
            <div>Follow Us</div>
            <div className="flex gap-2 pt-3">
              <div className="border rounded-full p-[6px] md:w-fit">
                <a
                  href="https://www.instagram.com/dhanjyotir20/"
                  target="blank"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
              <div className="border rounded-full p-[6px] w-fit">
                <LuTwitter className="text-2xl" />
              </div>
              <div className="border rounded-full p-[6px] w-fit">
                <FaFacebookF className="text-2xl" />
              </div>
            </div>
          </div>
          <div>
            <p>Call Us</p>
            <p>
              <a href="tel:+91 1234567890">+91 1234567890</a>
            </p>
          </div>
        </div>
        <div className="border-t border-white md:mt-12 flex flex-col gap-4 md:flex-row justify-center md:gap-72 text-xs p-4">
          <div>
            @{new Date().getFullYear()} Dhanjyoti Rabha. All Rights Reserved
          </div>
          <div>
            <p className="pb-1">PRIVACY POLICY</p>
            <p className="pb-3">TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
