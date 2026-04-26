import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "iPhone 14",
      price: "$999",
      description: "Latest Apple smartphone",
      image:
        "https://images.unsplash.com/photo-1678652197831-2d180705cd2c",
    },
    {
      id: 2,
      name: "Headphone",
      price: "$120",
      description: "Noise cancelling headset",
      image:
        "https://images.unsplash.com/photo-1580894908361-967195033215",
    },
  ]);

  const deleteOrder = (id) => {
    setOrders(orders.filter((item) => item.id !== id));
  };

  const editOrder = (id) => {
    alert("Edit functionality (API or modal add korba)");
  };

  return (
    <div className="p-6 space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700">
        Order Management
      </h1>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {orders.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">

              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <p className="text-sm text-gray-500">
                {item.description}
              </p>

              <div className="flex justify-between items-center pt-2">

                <span className="text-indigo-600 font-bold">
                  {item.price}
                </span>

                {/* Icons */}
                <div className="flex gap-3">

                  <button
                    onClick={() => editOrder(item.id)}
                    className="text-blue-500 hover:bg-blue-100 p-2 rounded-lg"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => deleteOrder(item.id)}
                    className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Order;