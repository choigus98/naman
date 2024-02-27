'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar } from 'flowbite-react'

const SearchBar = () => {
  return (
    <>
      {/* <Link href="/search" className="z-150">
        <nav className="w-full  absolute left-0 top-0 ">
          <p className="text-xl font-bold text-gray-400">지역 검색하기</p>
        </nav>
      </Link> */}
      <Navbar className="w-full  absolute h-10 left-0 top-0 z-150 bg-gray-300 opacity-50">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default SearchBar
