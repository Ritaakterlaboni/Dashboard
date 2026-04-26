import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Package,
  ClipboardList,
  Users,
  Settings,
  LogOut,
  PlusCircle,
  ListChecks,
  Boxes,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [catOpen, setCatOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  const active = (path) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-white border-r shadow-sm flex flex-col justify-between">

      {/* TOP */}
      <div>

        {/* Logo */}
        <div className="p-6 text-2xl font-bold text-indigo-600">
          Admin Panel
        </div>

        <nav className="px-3 space-y-2">

          {/* DASHBOARD */}
          <div
            onClick={() => navigate("/")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
              ${active("/") ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"}
            `}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </div>

          {/* CATEGORY */}
          <div>

            <div
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-indigo-100"
            >
              <div className="flex items-center gap-3">
                <FolderKanban size={18} />
                Category
              </div>
              <ChevronDown size={18} />
            </div>

            {catOpen && (
              <div className="ml-7 mt-1 space-y-1">

                <div
                  onClick={() => navigate("/category")}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <PlusCircle size={16} />
                  Add Category
                </div>

                <div
                  onClick={() => navigate("/categorylist")}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <ListChecks size={16} />
                  Category List
                </div>

              </div>
            )}
          </div>

          {/* PRODUCT */}
          <div>

            <div
              onClick={() => setProdOpen(!prodOpen)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer hover:bg-indigo-100"
            >
              <div className="flex items-center gap-3">
                <Package size={18} />
                Product
              </div>
              <ChevronDown size={18} />
            </div>

            {prodOpen && (
              <div className="ml-7 mt-1 space-y-1">

                <div
                  onClick={() => navigate("/product")}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <PlusCircle size={16} />
                  Add Product
                </div>

                <div
                  onClick={() => navigate("/productlist")}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <Boxes size={16} />
                  Product List
                </div>

              </div>
            )}
          </div>

          {/* ORDERS */}
          <div
            onClick={() => navigate("/orders")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
              ${active("/orders") ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"}
            `}
          >
            <ClipboardList size={18} />
            Orders
          </div>

          {/* USERS (UPDATED 👇) */}
          <div
            onClick={() => navigate("/users")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
              ${active("/users") ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"}
            `}
          >
            <Users size={18} />
            Users
          </div>

          {/* SETTINGS */}
          <div
            onClick={() => navigate("/settings")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer
              ${active("/settings") ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"}
            `}
          >
            <Settings size={18} />
            Settings
          </div>

        </nav>
      </div>

      {/* BOTTOM */}
      <div className="p-3 border-t">

        <div
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer text-red-500 hover:bg-red-100"
        >
          <LogOut size={18} />
          Logout
        </div>

      </div>
    </div>
  );
};

export default Sidebar;