import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice.js';
import { AiFillSignature } from "react-icons/ai";
import { motion } from "framer-motion";
import Logo3D from './Logo.jsx';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    navigate({ to: '/' });
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex gap-2 items-center">

            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AiFillSignature className="text-white text-xl sm:text-2xl" />
            </motion.div>

            <Logo3D />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-300 text-sm lg:text-base">
                  Welcome, {user?.name || 'User'}
                </span>

                <button
                  onClick={onLogout}
                  className="border border-white text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-black transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 bg-blue-200 hover:bg-blue-600  rounded-lg font-semibold transition"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-black border-t border-white/10">

          {isAuthenticated ? (
            <div className="flex flex-col gap-4 mt-4">
              <span className="text-gray-300">
                Welcome, {user?.name || 'User'}
              </span>

              <button
                onClick={onLogout}
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-black transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center px-4 py-2 bg-blue-200 hover:bg-blue-600  rounded-lg font-semibold"
            >
              Login
            </Link>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;