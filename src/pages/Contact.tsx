import React from "react";
import { FaInstagram, FaTelegram, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 mt-0 py-0 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Biz bilan bog'lanish uchun</h1>
        <p className="text-lg text-gray-700 mb-10">
          Siz biz bilan quyidagi ijtimoiy tarmoqlar orqali bog'lanishingiz mumkin.
        </p>

        <div className="flex flex-col gap-6 items-center">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/successinvest.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-800 hover:text-pink-600 transition"
          >
            <FaInstagram size={28} />
            <span>@successinvest.uz</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/successinvest_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-800 hover:text-blue-500 transition"
          >
            <FaTelegram size={28} />
            <span>@successinvest_uz</span>
          </a>

          {/* Telefon */}
          <a
            href="tel:+998 95 233 23 53"
            className="flex items-center gap-3 text-lg text-gray-800 hover:text-green-600 transition"
          >
            <FaPhone size={28} />
            <span>+998 95 233 23 53</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
