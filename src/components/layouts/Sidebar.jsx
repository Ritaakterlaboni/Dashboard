import React from "react";
import {
  LayoutDashboard,
  Folder,
  ShoppingBag,
  ClipboardList,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/",
    },
    {
      name: "Category",
      icon: <Folder size={18} />,
      path: "/category",
    },
    {
      name: "Product",
      icon: <ShoppingBag size={18} />,
      path: "/product",
    },
    {
      name: "Orders",
      icon: <ClipboardList size={18} />,
      path: "/orders",
    },
    {
      name: "Profile",
      icon: <User size={18} />,
      path: "/profile",
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      path: "/settings",
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r shadow-sm flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <div className="p-6 text-2xl font-bold text-indigo-600">
          Admin Panel
        </div>

        <nav className="px-3 space-y-1">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow"
                      : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t">
        <div
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer text-red-500 hover:bg-red-100 transition"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;