import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-start md:items-center justify-center px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/5 backdrop-blur-xl 
                   p-5 sm:p-6 md:p-8 
                   shadow-2xl w-full 
                   max-w-lg sm:max-w-2xl md:max-w-4xl 
                   overflow-hidden"
      >
        <div className="absolute -top-16 -left-16 w-40 sm:w-60 h-40 sm:h-60 bg-blue-300 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-40 sm:w-60 h-40 sm:h-60 bg-purple-200 opacity-20 blur-3xl animate-pulse"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl 
                     font-serif text-center mb-6 
                     bg-gradient-to-r from-blue-200 to-cyan-400 
                     bg-clip-text text-transparent"
        >
          URL Shortener Dashboard
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <UrlForm />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <UserUrl />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default DashboardPage;