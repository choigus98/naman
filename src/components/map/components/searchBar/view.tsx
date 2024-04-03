'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar, Typography, IconButton, Button, Input } from '@material-tailwind/react'

const SearchBar = () => {
  return (
    <>
      <div className="z-200 flex opacity-100">
        <span className="whitespace-nowrap text-xl font-semibold dark:text-white">Sweety Parking Tip</span>
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            ></svg>
            <span className="sr-only">Search icon</span>
          </div>
          <Link href="/search">
            <input
              type="text"
              id="search-navbar"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search..."
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SearchBar
