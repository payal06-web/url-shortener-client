import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion";
import { queryClient } from '../main'

const UrlForm = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("")
  const [loading, setLoading] = useState(false)

  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSubmit = async () => {
    if (!url) return setError("URL is required")

    try {
      setLoading(true)
      const res = await createShortUrl(url, customSlug)
      setShortUrl(res)
      queryClient.invalidateQueries({ queryKey: ['userUrls'] })
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 space-y-6"
    >
      <div>
        <label className="text-xs sm:text-sm text-gray-400">
          Enter your URL
        </label>

        <input
          type="url"
          value={url}
          placeholder="Paste your long URL here..."
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 mt-2 bg-white/5 border border-white/10 
          rounded-lg text-white text-sm sm:text-base 
          focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>
    
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold 
        bg-gradient-to-r from-cyan-200 to-blue-600 
        text-black sm:text-base text-sm
        flex items-center justify-center gap-2 
        disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="animate-spin h-5 w-5 font-serif border-2 border-black border-t-transparent rounded-full"></span>
            Processing...
          </>
        ) : (
          "Shorten URL "
        )}
      </motion.button>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-500/20 text-red-400 text-sm p-3 rounded-lg"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {shortUrl && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl space-y-3"
          >
            <p className="text-gray-400 text-sm">
              Your shortened URL:
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              
              <input
                value={shortUrl}
                readOnly
                className="flex-1 p-2 sm:p-3 bg-black/30 text-white 
                rounded-md sm:rounded-l-md text-sm"
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className={`px-4 py-2 rounded-md sm:rounded-r-md font-medium transition text-sm
                ${copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-200"
                }`}
              >
                {copied ? "Copied" : "Copy"}
              </motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default UrlForm