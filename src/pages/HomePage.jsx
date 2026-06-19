import React from "react";
import UrlForm from "../components/UrlForm";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="text-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 sm:py-24 lg:py-32">
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 overflow-hidden">

          <motion.span
            className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Simplify Your
          </motion.span>

          <motion.span
            className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Digital Links
          </motion.span>

        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-10"
        >
          A modern platform to manage, track, and optimize your links with ease.
          Built for speed, simplicity, and powerful performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-200 hover:bg-blue-400 rounded-lg font-semibold"
            >
              Get Started
            </motion.button>
          </Link>

          <Link to="/learn-more">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border text-white border-white/20 rounded-lg hover:bg-white/10"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20 text-white">
        {[
          {
            title: "Fast Performance",
            desc: "Experience lightning-fast processing and smooth performance across all devices.",
          },
          {
            title: "Smart Analytics",
            desc: "Get detailed insights and track user engagement in real time.",
          },
          {
            title: "Secure System",
            desc: "Advanced security ensures your data and links stay protected.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base"
        >
          We provide a seamless experience for managing digital links with powerful tools,
          modern design, and reliable infrastructure.
        </motion.p>
      </section>
      <section className="text-center px-4 text-white font-serif pb-16 sm:pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Ready to get started?
        </motion.h2>

        <Link to="/auth">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-black px-6 sm:px-8 py-3 bg-blue-100 hover:bg-blue-300 rounded-lg "
          >
            Create Free Account
          </motion.button>
        </Link>
      </section>
      <footer className="text-center text-gray-500 pb-6 text-xs sm:text-sm">
        © 2026 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;