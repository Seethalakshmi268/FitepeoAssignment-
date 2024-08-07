import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { PiCookingPotFill } from "react-icons/pi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";

const menuItems = [
  {
    name: "Goals",
    color: "bg-red-500",
    // icon: <i className="fas fa-bullseye"></i>, // replace with actual icon if needed
    icon: <CgAdd className="w-full h-full" />, // Using the imported CgAdd icon
  },
  {
    name: "Popular Dishes",
    color: "bg-blue-500",
    icon: <PiCookingPotFill className="w-full h-full" />, // replace with actual icon if needed
  },
  {
    name: "Menus",
    color: "bg-teal-500",
    icon: <CgMenuRound className="w-full h-full" />,
  },
];

const MenuItems = () => {
  return (
    <div className="w-full bg-dark-purple rounded-lg shadow-lg p-4 m-2 overflow-hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-5 bg-gray-700 rounded-lg  m-2"
        >
          <div className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}
            >
              {item.icon}
            </div>
            <span className=" text-white text-lg m-2">{item.name}</span>
          </div>
          <AiOutlineRight className="text-white" />
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
