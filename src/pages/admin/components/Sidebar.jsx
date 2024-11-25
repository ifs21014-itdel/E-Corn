import  { useState } from "react";
import { FaHome, FaUsers, FaCog, FaChartBar, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link dan useNavigate

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // State untuk sidebar
  const navigate = useNavigate(); // Hook untuk navigasi

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle state sidebar
  };

  const handleLogout = () => {
    // Hapus token dan role dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirect ke halaman login
    navigate("/admin/login");
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
          className="text-white text-2xl p-4"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Sidebar items */}
        <div className="flex-grow flex flex-col">
          <ul className="space-y-2 mt-4">
            <li>
              <Link
                to="/admin/home"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaHome className="text-xl" />
                {isSidebarOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaUsers className="text-xl" />
                {isSidebarOpen && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaCog className="text-xl" />
                {isSidebarOpen && <span>Settings</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reports"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaChartBar className="text-xl" />
                {isSidebarOpen && <span>Reports</span>}
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout button */}
        <div className="p-4">
          <button
            onClick={handleLogout} // Event handler logout
            className="bg-red-600 text-white w-full p-3 rounded-md hover:bg-red-700 transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Konten utama */}
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } p-6`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
