import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BsArrowLeftShort, BsBarChart } from "react-icons/bs";
import {
  AiFillHome,
  AiOutlineCarryOut,
  AiFillSetting,
  AiFillShopping,
  AiOutlineMail,
  AiOutlineBell,
  AiOutlineUser,
} from "react-icons/ai";
import RecentOrders, { initialOrders } from "./RecentOrders";
import Activity from "./Activity";
import OrdersStatus from "./OrdersStatus";
import NetProfit from "./NetProfit";
import MenuItems from "./MenuItems";
import CustomerFeedback from "./CustomerFeedback";

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [open, setOpen] = useState(false);
  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
  };

  const calculateTotalAmount = () => {
    return orders.reduce((total, order) => {
      // Remove the "$" sign and parse the amount to a float
      const amount = parseFloat(order.amount.replace("$", ""));
      return total + amount;
    }, 0);
  };

  const totalAmount = calculateTotalAmount();
  return (
    <Router>
      <div className="flex flex-col h-screen bg-black-900">
        {/* Top Bar */}
        <div className="flex-shrink-0 bg-dark-purple p-5 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md w-1/3 mx-auto"
          />
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-white text-3xl cursor-pointer" />
            <AiFillSetting className="text-white text-3xl cursor-pointer" />
            <AiOutlineUser className="text-white text-3xl cursor-pointer" />
            <AiOutlineBell className="text-white text-3xl cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 w-800">
          {/* Sidebar */}
          <div
            className={`bg-dark-purple text-white p-5 pt-8 ${
              open ? "w-72" : "w-20"
            } duration-300 relative flex-shrink-0`}
          >
            <BsArrowLeftShort
              className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
            <div className="inline-flex items-center mb-8">
              <AiFillHome
                className="bg-amber-3000 text-4xl rounded cursor-pointer"
                style={{ marginRight: "40px" }}
              />
              <h1
                className={`text-white font-medium text-2xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Home
              </h1>
            </div>
            <div className="inline-flex items-center mb-8">
              <Link to="/activity" className="flex items-center">
                <BsBarChart
                  className="bg-amber-3000 text-4xl rounded cursor-pointer"
                  style={{ marginRight: "40px" }}
                />
                <h1
                  className={`text-white font-medium text-2xl duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Activity
                </h1>
              </Link>
            </div>
            <div className="inline-flex items-center mb-8">
              <Link to="/orders" className="flex items-center">
                <AiOutlineCarryOut
                  className="bg-amber-3000 text-4xl rounded cursor-pointer"
                  style={{ marginRight: "40px" }}
                />
                <h1
                  className={`text-white font-medium text-2xl duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Orders
                </h1>
              </Link>
            </div>
            <div className="inline-flex items-center mb-8">
              <AiFillSetting
                className="bg-amber-3000 text-4xl rounded cursor-pointer"
                style={{ marginRight: "40px" }}
              />
              <h1
                className={`text-white font-medium text-2xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Setting
              </h1>
            </div>
            <div className="inline-flex items-center mb-8">
              <AiFillShopping
                className="bg-amber-3000 text-4xl rounded cursor-pointer"
                style={{ marginRight: "40px" }}
              />
              <h1
                className={`text-white font-medium text-2xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Delivered
              </h1>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex flex-col items-center  pl-4 pr-4 pt-4 bg-gray-900 flex-1">
            <main className="w-full flex flex-1 pt-4 overflow-hidden bg-black-900 ">
              <div className="flex flex-col items w-2/3">
                <OrdersStatus orders={orders} />

                <Activity orders={orders} className="mb-4 " />
                <RecentOrders
                  updateOrders={updateOrders}
                  className="mb-4 pt-6 mt-4"
                />
              </div>
              <div className="flex flex-col items-center overflow-hidden w-1/3">
                <div className="w-full justify-center items-center mb-8">
                  <NetProfit totalAmount={totalAmount} />
                  <MenuItems />
                  <CustomerFeedback />
                </div>
                {/* <MenuItems /> */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
