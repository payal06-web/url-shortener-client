import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

function LearnPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
          URL Shortener
        </h1>

        <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          Convert long URLs into short, shareable links instantly. Simple,
          fast, and efficient.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-indigo-400 hover:bg-indigo-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition text-sm sm:text-base"
        >
          Try Now
        </Link>
      </motion.div>
      <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Enter your long URL",
            "Generate short code",
            "Get short link",
            "Redirect instantly",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl text-center backdrop-blur-lg"
            >
              <div className="text-xl sm:text-2xl font-bold mb-2">
                {i + 1}
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Instant URL shortening",
            "Track clicks & analytics",
            "Secure redirection",
            "Mobile friendly",
            "Fast performance",
            "Custom short links",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-lg"
            >
              <p className="text-sm sm:text-lg">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mb-16 sm:mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Why Use It?
        </h2>

        <p className="text-gray-400 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
          Short links are easier to share, look cleaner, and are perfect for
          social media, marketing campaigns, and professional use.
        </p>
      </section>
            <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Technologies Used
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
            (tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-indigo-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-10">
          Start Shortening Now 
        </h2>

        <Link
          to="/"
          className="inline-block border border-white/20 hover:bg-blue-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition text-sm sm:text-base"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}

export default LearnPage;