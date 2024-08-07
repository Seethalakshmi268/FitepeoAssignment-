import React from "react";
import { PiBowlFood } from "react-icons/pi";
const NetProfit = ({ totalAmount }) => {
  return (
    <div>
      {/* p-4 bg-gray-800 rounded-lg shadow-lg m-4 */}
      <div className="flex w-full space-x-4 bg-grey shadow-lg p-2 rounded-lg items-center justify-center items-center ">
        <div className="flex flex-col items-center justify-center w-full h-32 bg-black rounded-lg">
          <PiBowlFood className="text-white text-4xl cursor-pointer" />
          <h1 className="text-white font-medium text-base duration-300">
            NetProfit
          </h1>
          <p className="text-white text-xl">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
