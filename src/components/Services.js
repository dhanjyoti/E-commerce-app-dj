import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbCirclesRelation } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

let serviceCard = [
  {
    icon: <VscWorkspaceTrusted />,
    text: "Tuested Brands",
  },
  {
    icon: <MdSecurity />,
    text: "Non-stop Shipping",
  },
  {
    icon: <TbTruckDelivery />,
    text: "Fast and Free Delivery",
  },
  {
    icon: <RiSecurePaymentFill />,
    text: "Super Secure Payment",
  },
  {
    icon: <TbCirclesRelation />,
    text: "Customer relations",
  },
  {
    icon: <GiReceiveMoney />,
    text: "Money-back Guaranteed",
  },
];

const Services = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-4 text-center md:mx-[200px]">
      {serviceCard.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-slate-200 p-5 gap-4 text-2xl"
        >
          {item.icon}
          <div className="text-sm">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Services;
