// src/pages/Home.jsx
import React from "react";
import { motion, Variants } from "framer-motion";
import rasm from "../assets/images.jpg";
import childtracker from "../assets/Снимок экрана 2025-08-22 212730.png";
import gisht from "../assets/gisht.png";
import oldmoney from "../assets/oldmoney.png";
import milk from "../assets/milk.png";
import invest from "../assets/investors.png";
import sirus from "../assets/sirus.png";
import blackwhite from "../assets/blackwhite.png";
import bumaga from "../assets/bumaga.png";
import kabel from "../assets/kabel.png";
import uchsex from "../assets/uchsex.png";
import yoqilgi from "../assets/yoqilgi.png";
import { NavLink } from "react-router-dom";


// Portfolio loyihalar
const portfolios = [
  {
    img: childtracker,
    id: 1,
    title: "50,000$ Child Tracker platformasi",
    desc: "BU RAQAMLI DUNYODA BOLA XAVFSIZLIGI UCHUN YANGI STANDART!",
  },
  {
    img: rasm,
    id: 2,
    title: "100,000$ O'zbekistonda reklama va sovg'a mahsulotlari ishlab chiqarish",
    desc: "O'zbekiston ruhidagi yuqori sifatli reklama va sovg'a mahsulotlarini ishlab chiqarish hamda sotish.",
  },
  {
    img: gisht,
    id: 3,
    title: "1M$ G'isht loyihasi",
    desc: "Turli o'lcham va sifatli g'ishtlar ishlab chiqariladi. Pishgan va xom g'ishtlar mavjud.",
  },
  {
    img: oldmoney,
    id: 4,
    title: "100,000$ Old Money ishlab chiqarish biznesi",
    desc: "Eng qadimgi va mashhur brendlaridan biri bo'lgan Old Money ishlab chiqarish biznesi.",
  },
  {
    img: milk,
    id: 5,
    title: "O'zbekistonda sifatli va hamyonbop sut mahsulotlari",
    desc: "O'zbekiston bozorida sifatli va arzon sut mahsulotlariga talab yuqori. Ushbu taqdimot sizni ushbu sohada investitsiya qilishning ajoyib imkoniyatlari bilan tanishtiradi.",
  },
  {
    img: invest,
    id: 6,
    title: "Investor.uz loyihasi",
    desc: "Kelajak O'zbekistonga investitsiya qilish uchun loyiha.",
  },
  {
    img: sirus,
    id: 7,
    title: "Sirus tijorat taklifi",
    desc: " Sizning biznesingizni zamonaviy raqamli marketing orqali yangi bosqichga olib chiqish va maqsadli mijozlaringizni jalb qilish platformasi ",
  },
  {
    img: blackwhite,
    id: 8,
    title: "30,000$ Blue and white simple",
    desc: "toshkentdan boshlaymiz va butun o'zbekiston bo'ylab qilamiz to'y xizmati qilsak xalqimiz juda xursand bo'ladi chunki ularning muammolari kamroq bo'ladi va pul uchun muammolarni hal qilamiz",
  },
  {
    img: bumaga,
    id: 9,
    title: "300,000$ Bumaga ishlab chiqarish biznesi",
    desc: "Ekologik sifatli bumaga ishlab chiqarish uchun loyiha.",
  },
  {
    img: kabel,
    id: 10,
    title: "220,000$ СИП кабел va beton opor ishlab chiqarish biznesi",
    desc: "kabel ishlab chiqarish biznesi, SİP kabellar va beton oporlar ishlab chiqarish uchun loyiha.",
  },
  {
    img: uchsex,
    id: 11,
    title: "3,085mlrd uzs, Uchseh beton loyihasi",
    desc: "Uchseh beton ishlab chiqarish biznesi, yuqori sifatli beton mahsulotlari ishlab chiqarish uchun loyiha.",
  },
  {
    img: yoqilgi,
    id: 12,
    title: "150,000$ ASLANBEK OIL GOLD yoqilgi shaxobchasi",
    desc: "Yoqilg'i mahsulotlari sotish va xizmat ko'rsatish uchun loyiha. O'zbekiston bozorida yuqori sifatli yoqilg'i mahsulotlariga talab yuqori.",
  },
  // {
  //   img: invest,
  //   id: 13,
  //   title: "Investor.uz loyihasi",
  //   desc: "Kelajak O'zbekistonga investitsiya qilish uchun loyiha.",
  // },
  // {
  //   img: invest,
  //   id: 14,
  //   title: "Investor.uz loyihasi",
  //   desc: "Kelajak O'zbekistonga investitsiya qilish uchun loyiha.",
  // },
  // {
  //   img: invest,
  //   id: 15,
  //   title: "Investor.uz loyihasi",
  //   desc: "Kelajak O'zbekistonga investitsiya qilish uchun loyiha.",
  // },
];

// Animatsiya variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // pastdan chiqadi
  visible: (index: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // har bir kartani kechikib chiqishi
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-6 py-12">
      {/* Sarlavha */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Bizning Portfolio
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Investorlar bilan amalga oshirilgan muvaffaqiyatli loyihalarimizdan
          namunalar.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // sahifaga 20% kirganda chiqadi
            custom={index} // har biriga index bo‘yicha delay
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 flex-grow">{item.desc}</p>
              <NavLink to="/contact">
              <div className="mt-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Bog'lanish →
                </motion.button>
              </div>
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
