import React from "react";
import { Bell, Search, Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-4 md:px-6">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-gray-700">
          Dashboard
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-xl w-80">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Theme Icon (only design) */}
        <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Moon size={20} />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell size={20} />
          {/* notification  */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block text-sm font-medium">
            Rita
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;