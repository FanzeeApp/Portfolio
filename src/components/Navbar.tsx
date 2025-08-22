import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-5 shadow-md">
      <div className="flex items-center justify-between">
        {/* Chap taraf (Logo) */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-2xl font-bold tracking-wide uppercase hover:text-yellow-400 transition ml-2 ${
              isActive ? "text-yellow-400" : ""
            }`
          }
        >
          Succes Invest
        </NavLink>

        {/* Desktop menyu */}
        <ul className="hidden md:flex gap-8 mr-4 text-lg">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition ${
                  isActive ? "text-yellow-400 font-bold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition ${
                  isActive ? "text-yellow-400 font-bold" : ""
                }`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition ${
                  isActive ? "text-yellow-400 font-bold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobil tugma */}
        <button
          className="md:hidden text-2xl mr-4"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobil menyu (animatsiya bilan) */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 mt-4 md:hidden text-lg bg-gray-800 p-4 rounded-lg"
          >
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition ${
                    isActive ? "text-yellow-400 font-bold" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition ${
                    isActive ? "text-yellow-400 font-bold" : ""
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition ${
                    isActive ? "text-yellow-400 font-bold" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default React.memo(Navbar);
