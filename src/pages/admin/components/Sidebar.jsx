import { useState } from "react";
import { FaHome, FaUser, FaGraduationCap, FaCog, FaBars, FaSignOutAlt, FaCogs } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(""); // Menyimpan menu aktif
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  // Fungsi untuk mengubah menu aktif
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
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
                to="/admin/users"
                onClick={() => handleMenuClick("users")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "users" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <FaUser className="text-xl" />
                {isSidebarOpen && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/features"
                onClick={() => handleMenuClick("features")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "features" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <FaCogs className="text-xl" />
                {isSidebarOpen && <span>Features</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/edukasi"
                onClick={() => handleMenuClick("edukasi")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "edukasi" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <FaGraduationCap className="text-xl" />
                {isSidebarOpen && <span>Edukasi</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/berita"
                onClick={() => handleMenuClick("berita")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "berita" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <MdOutlineArticle className="text-xl" />
                {isSidebarOpen && <span>Berita</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/about"
                onClick={() => handleMenuClick("about")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "about" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <AiOutlineInfoCircle className="text-xl" />
                {isSidebarOpen && <span>About</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                onClick={() => handleMenuClick("settings")}
                className={`flex items-center space-x-4 p-3 rounded-md transition-all ${
                  activeMenu === "settings" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
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
            className="flex items-center justify-center space-x-4 bg-red-600 text-white w-full p-3 rounded-md hover:bg-red-700 transition-all"
          >
            <FaSignOutAlt className="text-xl" /> {/* Ikon Logout */}
            {isSidebarOpen && <span>Logout</span>}
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
