import React from "react";
import { FaFacebook, FaTelegram, FaPhone, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Chap tomonda matn */}
        <p className="text-sm text-center md:text-left">
          &copy; 2025 My Website. Barcha huquqlar himoyalangan.
        </p>

        {/* O‘ng tomonda iconlar va telefon */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0">
          {/* Telefon */}
          <a
            href="tel:+998901234567"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <FaPhone /> <span className="text-sm">+998 90 123 45 67</span>
          </a>

          {/* Iconlar */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTelegram size={20} />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
