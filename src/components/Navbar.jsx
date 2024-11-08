import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Path logo

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar fixed w-full transition-all py-4 bg-[#f0f4e3] shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center space-x-2">
          <img src={logo} alt="E-Corn Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-green-700">E-Corn</h1>
        </div>

        {/* Menu - hidden on small screens, flex on medium and larger screens */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link to="/home" className="hover:text-gray-900">Beranda</Link>
          </li>
          <li>
            <Link to="/edukasi" className="hover:text-gray-900">Edukasi</Link>
          </li>
          <li>
            <Link to="/berita" className="hover:text-gray-900">Berita</Link>
          </li>
          <li>
            <Link to="/komunitas" className="hover:text-gray-900">Komunitas</Link>
          </li>
          <li>
            <Link to="/tentang-kami" className="hover:text-gray-900">Tentang Kami</Link>
          </li>
        </ul>

        {/* Masuk Button */}
        <div className="hidden md:block">
          <Link to="/login" className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">Masuk</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {/* Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when open */}
      {isOpen && (
        <div className="md:hidden bg-green-600 text-white font-bold rounded-lg shadow-lg mt-2 mx-4 p-4 space-y-4">
          <Link to="/home" className="block hover:bg-green-700 p-2 rounded">Beranda</Link>
          <Link to="/edukasi" className="block hover:bg-green-700 p-2 rounded">Edukasi</Link>
          <Link to="/berita" className="block hover:bg-green-700 p-2 rounded">Berita</Link>
          <Link to="/komunitas" className="block hover:bg-green-700 p-2 rounded">Komunitas</Link>
          <Link to="/tentang-kami" className="block hover:bg-green-700 p-2 rounded">Tentang Kami</Link>
          <Link to="/login" className="block bg-white text-green-700 font-bold p-2 rounded hover:bg-gray-200 text-center">Masuk</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
