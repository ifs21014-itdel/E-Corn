import React, { useState } from "react";
import { FaHome, FaUsers, FaCog, FaChartBar, FaBars } from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } fixed left-0 top-0 h-full bg-gray-800 text-white shadow-lg transition-all duration-300 flex flex-col justify-between z-50`}
      >
        {/* Sidebar toggle button */}
        <button
          className="text-white text-2xl p-4 md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Sidebar items */}
        <div className="flex-grow flex flex-col">
          <ul className="space-y-2 mt-4">
            <li>
              <a
                href="#home"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaHome className="text-xl" />
                {isSidebarOpen && <span>Home</span>}
              </a>
            </li>
            <li>
              <a
                href="#users"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaUsers className="text-xl" />
                {isSidebarOpen && <span>Users</span>}
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaCog className="text-xl" />
                {isSidebarOpen && <span>Settings</span>}
              </a>
            </li>
            <li>
              <a
                href="#reports"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaChartBar className="text-xl" />
                {isSidebarOpen && <span>Reports</span>}
              </a>
            </li>
          </ul>
        </div>

        {/* Logout button */}
        <div className="p-4">
          {isSidebarOpen && (
            <button className="bg-red-600 text-white w-full p-3 rounded-md hover:bg-red-700 transition-all">
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`${
          isSidebarOpen ? "ml-64" : "ml-20"
        } flex-grow p-8 transition-all duration-300`}
      >
        <h1 className="text-4xl font-semibold text-gray-800">Admin Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to the admin dashboard. Manage users, view reports, and adjust
          settings from the sidebar.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;