import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login status
  const location = useLocation();
  const navigate = useNavigate();

  // Cek token saat komponen dimuat
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn menjadi true jika token ada
  }, [location]); // Perbarui ketika location berubah

  // Fungsi untuk menentukan apakah link aktif
  const isActive = (path) => location.pathname === path;

  // Fungsi untuk menutup menu setelah link diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    setIsLoggedIn(false); // Set isLoggedIn menjadi false
    navigate("/login"); // Arahkan ke halaman login
  };

  return (
    <div className="navbar fixed w-full transition-all py-4 bg-[#f0f4e3] shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center space-x-0">
          <img src={logo} alt="E-Corn Logo" className="h-14" />
          <h1 className="text-2xl font-bold text-green-700">E-Corn</h1>
        </div>

        {/* Menu - hidden on small screens, flex on medium and larger screens */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link
              to="/home"
              className={`hover:text-gray-900 ${
                isActive("/home") ? "text-green-700 font-bold" : ""
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/edukasi"
              className={`hover:text-gray-900 ${
                isActive("/edukasi") ? "text-green-700 font-bold" : ""
              }`}
            >
              Edukasi
            </Link>
          </li>
          <li>
            <Link
              to="/berita"
              className={`hover:text-gray-900 ${
                isActive("/berita") ? "text-green-700 font-bold" : ""
              }`}
            >
              Berita
            </Link>
          </li>
          <li>
            <Link
              to="/komunitas"
              className={`hover:text-gray-900 ${
                isActive("/komunitas") ? "text-green-700 font-bold" : ""
              }`}
            >
              Komunitas
            </Link>
          </li>
          <li>
            <Link
              to="/tentang-kami"
              className={`hover:text-gray-900 ${
                isActive("/tentang-kami") ? "text-green-700 font-bold" : ""
              }`}
            >
              Tentang Kami
            </Link>
          </li>
        </ul>

        {/* Masuk / Logout Button */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-full font-bold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              Masuk
            </Link>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when open */}
      {isOpen && (
        <div className="md:hidden bg-green-600 text-white font-bold rounded-lg shadow-lg mt-2 mx-4 p-4 space-y-4">
          <Link
            to="/home"
            className={`block hover:bg-green-700 p-2 rounded ${
              isActive("/home") ? "bg-green-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            Beranda
          </Link>
          <Link
            to="/edukasi"
            className={`block hover:bg-green-700 p-2 rounded ${
              isActive("/edukasi") ? "bg-green-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            Edukasi
          </Link>
          <Link
            to="/berita"
            className={`block hover:bg-green-700 p-2 rounded ${
              isActive("/berita") ? "bg-green-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            Berita
          </Link>
          <Link
            to="/komunitas"
            className={`block hover:bg-green-700 p-2 rounded ${
              isActive("/komunitas") ? "bg-green-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            Komunitas
          </Link>
          <Link
            to="/tentang-kami"
            className={`block hover:bg-green-700 p-2 rounded ${
              isActive("/tentang-kami") ? "bg-green-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            Tentang Kami
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                handleLinkClick();
              }}
              className="block bg-white text-red-700 font-bold p-2 rounded hover:bg-gray-200 text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block bg-white text-green-700 font-bold p-2 rounded hover:bg-gray-200 text-center"
              onClick={handleLinkClick}
            >
              Masuk
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
