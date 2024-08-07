import React from "react";
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const OrdersStatus = ({ orders }) => {
  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;
  const canceledOrders = orders.filter(
    (order) => order.status === "Cancelled"
  ).length;

  return (
    <div className="flex space-x-4 bg-grey p-2 rounded-lg  ">
      <div className="flex flex-col items-center justify-center w-60 h-32 bg-black rounded-lg">
        <PiBowlFood className="text-white text-4xl cursor-pointer mb-2" />
        <h1 className="text-white font-medium text-base duration-300">
          Total Orders
        </h1>
        <p className="text-white font-medium text-xl">{totalOrders}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-60 h-32 bg-black rounded-lg">
        <MdOutlineDeliveryDining className="text-white text-4xl cursor-pointer mb-2" />
        <h1 className="text-white font-medium text-base duration-300">
          Total Delivered
        </h1>
        <p className="text-white font-medium text-xl">{deliveredOrders}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-60 h-32 bg-black rounded-lg">
        <MdOutlinePendingActions className="text-white text-4xl cursor-pointer mb-2" />
        <h1 className="text-white font-medium text-base duration-300">
          Total Pending
        </h1>
        <p className="text-white font-medium text-xl">{pendingOrders}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-60 h-32 bg-black rounded-lg">
        <ImCancelCircle className="text-white text-4xl cursor-pointer mb-2" />
        <h1 className="text-white font-medium text-base duration-300">
          Total Canceled
        </h1>
        <p className="text-white font-medium text-xl">{canceledOrders}</p>
      </div>
    </div>
  );
};

export default OrdersStatus;
