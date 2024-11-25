import { useState } from "react";
import { FaHome, FaUser, FaUsers, FaGraduationCap, FaCog, FaBars } from "react-icons/fa"; // Import FaUser dan FaUsers
import { MdOutlineArticle } from "react-icons/md"; // Ikon Berita
import { AiOutlineInfoCircle } from "react-icons/ai"; // Ikon Tentang
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
        <button className="text-white text-2xl p-4" onClick={toggleSidebar}>
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
                <FaUser className="text-xl" /> {/* Ikon orang satu */}
                {isSidebarOpen && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/edukasi"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaGraduationCap className="text-xl" />
                {isSidebarOpen && <span>Edukasi</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/berita"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <MdOutlineArticle className="text-xl" />
                {isSidebarOpen && <span>Berita</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/komunitas"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <FaUsers className="text-xl" /> {/* Ikon grup */}
                {isSidebarOpen && <span>Komunitas</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/tentang"
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md transition-all"
              >
                <AiOutlineInfoCircle className="text-xl" />
                {isSidebarOpen && <span>Tentang</span>}
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
          </ul>
        </div>

        {/* Logout button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
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
