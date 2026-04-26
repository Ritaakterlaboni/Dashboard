import React from "react";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      
      {/* Top Heading */}
      <h1 className="text-2xl font-bold text-gray-700">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <h2 className="text-xl font-bold">120</h2>
          </div>
          <Package className="text-indigo-500" />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Orders</p>
            <h2 className="text-xl font-bold">85</h2>
          </div>
          <ShoppingCart className="text-green-500" />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Users</p>
            <h2 className="text-xl font-bold">45</h2>
          </div>
          <Users className="text-blue-500" />
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-xl font-bold">$2,400</h2>
          </div>
          <DollarSign className="text-yellow-500" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">
            Recent Orders
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between text-sm border-b pb-2">
              <span>#1234 - iPhone 14</span>
              <span className="text-green-500">Paid</span>
            </div>
            <div className="flex justify-between text-sm border-b pb-2">
              <span>#1235 - Samsung TV</span>
              <span className="text-yellow-500">Pending</span>
            </div>
            <div className="flex justify-between text-sm border-b pb-2">
              <span>#1236 - Headphone</span>
              <span className="text-red-500">Cancelled</span>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">
            Activity
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>🛒 New order placed</li>
            <li>👤 New user registered</li>
            <li>📦 Product added</li>
            <li>💰 Payment received</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;