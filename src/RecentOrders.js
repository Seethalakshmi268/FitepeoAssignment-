import React, { useState } from "react";

// Initial orders data
export const initialOrders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    imageUrl: "https://via.placeholder.com/40",
  },
];

// Utility function for status color classes
const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-500";
    case "Cancelled":
      return "bg-red-500";
    case "Pending":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const RecentOrders = ({ updateOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customer: "",
    orderNo: "",
    amount: "",
    status: "",
    imageUrl: "",
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !newCustomer.customer ||
      !newCustomer.orderNo ||
      !newCustomer.amount ||
      !newCustomer.status ||
      !newCustomer.imageUrl
    ) {
      alert("Please fill all fields.");
      return;
    }
    const updatedOrders = [...orders, newCustomer];
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
    setShowForm(false);
    setNewCustomer({
      customer: "",
      orderNo: "",
      amount: "",
      status: "",
      imageUrl: "",
    });
  };

  const handleDelete = (orderNo) => {
    const updatedOrders = orders.filter((order) => order.orderNo !== orderNo);
    setOrders(updatedOrders);
    updateOrders(updatedOrders);
  };

  // Handle deleting an order

  return (
    <div className="p-4 bg-black-800 rounded-lg shadow-lg mb-4">
      <h2 className="text-white text-2xl font-semibold mb-4">Recent Orders</h2>

      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New Order
      </button>

      {showForm && (
        <form
          onSubmit={handleFormSubmit}
          className="bg-dark-purple rounded-lg p-4 mb-4"
        >
          <h3 className="text-white text-xl font-semibold mb-4">
            Add New Order
          </h3>
          <div className="mb-4">
            <label className="block text-white mb-2">Customer Name</label>
            <input
              type="text"
              name="customer"
              value={newCustomer.customer}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-900 text-white"
              placeholder="Customer Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Order No.</label>
            <input
              type="text"
              name="orderNo"
              value={newCustomer.orderNo}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-900 text-white"
              placeholder="Order No."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Amount</label>
            <input
              type="text"
              name="amount"
              value={newCustomer.amount}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-900 text-white"
              placeholder="Amount"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Status</label>
            <select
              name="status"
              value={newCustomer.status}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-900 text-white"
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={newCustomer.imageUrl}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-900 text-white"
              placeholder="Image URL"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Order
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      )}

      <table className="w-full table-auto bg-dark-purple-900 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-dark-purple text-left text-gray-400">
            <th className="pb-2">Customer</th>
            <th className="pb-2">Order No.</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-white bg-dark-purple">
          {orders.map((order, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2 flex items-center ml-3">
                <img
                  src={order.imageUrl}
                  alt={order.customer}
                  className="w-10 h-10 rounded-full mr-3"
                />
                {order.customer}
              </td>
              <td className="py-2">{order.orderNo}</td>
              <td className="py-2">{order.amount}</td>
              <td className="py-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm text-white ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(order.orderNo)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
