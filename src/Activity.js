import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Activity = ({ orders = [] }) => {
  const deliveredCount = orders.filter(
    (order) => order.status === "Delivered"
  ).length;
  const pendingCount = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const data = [
    { name: "Delivered", value: deliveredCount },
    { name: "Pending", value: pendingCount },
  ];

  return (
    <div className="p-4 bg-dark-purple rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">
        Activity Overview
      </h2>
      <div className="flex flex-col">
        <div className="text-white text-lg mb-2">Orders Overview</div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="value" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Prop types
Activity.propTypes = {
  orders: PropTypes.array,
};

export default Activity;
