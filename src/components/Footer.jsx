
import logo from '../assets/logo.png'; // Sesuaikan dengan path logo Anda
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#DBF1AD] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 px-4">
        
        {/* Logo dan Alamat */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <img src={logo} alt="E-Corn Logo" className="h-16" />
          <p className="text-center md:text-left">
            Jl. Alamat 1 No.1, Desa,<br />
            Kecamatan, Kabupaten, Kota<br />
            Kode Pos
          </p>
        </div>

        {/* Hak Cipta */}
        <div className="text-center">
          <p>Ecorn © 2024. All rights reserved</p>
        </div>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-4">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
