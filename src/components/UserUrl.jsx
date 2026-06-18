import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllUserUrls } from '../api/user.api'

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getShortUrl = (short) => {
  return short.split("/").pop();
};

const UserUrl = () => {

  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000,
    staleTime: 0,
  })

  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-10">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-500/20 text-red-400 p-4 rounded-lg text-sm">
        {error.message}
      </div>
    )
  }

  if (!urls?.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-gray-400 my-10">
        No URLs found 
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4">
      <div className="flex flex-col gap-4 md:hidden">
        {[...urls.urls].reverse().map((url) => (
          <div 
            key={url._id}
            className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3"
          >
            <div>
              <p className="text-xs text-gray-400">Original</p>
              <p className="text-sm text-white truncate">
                {url.full_url}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Short</p>
              <a 
                href={`${BASE_URL}/${url.short_url}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-sm break-all"
              >
                {getShortUrl(url.short_url)}
              </a>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                {url.clicks} clicks
              </span>

              <button
                onClick={() => handleCopy(getShortUrl(url.short_url), url._id)}
                className={`text-xs px-3 py-1.5 rounded-md ${
                  copiedId === url._id
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {copiedId === url._id ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-300 uppercase">
                  Original URL
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-300 uppercase">
                  Short URL
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-300 uppercase">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-300 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {[...urls.urls].reverse().map((url) => (
                <tr key={url._id} className="hover:bg-white/5 transition">

                  <td className="px-6 py-4 text-sm text-white truncate max-w-xs">
                    {url.full_url}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    <a 
                      href={`${BASE_URL}/${url.short_url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {getShortUrl(url.short_url)}
                    </a>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {url.clicks} clicks
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleCopy(`${BASE_URL}/${url.short_url}`, url._id)}
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        copiedId === url._id
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {copiedId === url._id ? "Copied " : "Copy"}
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

export default UserUrl