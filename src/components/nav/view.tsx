import React from 'react'
import { useNavViewModel } from './viewModel'
import { NavModel } from './model'

const NavView = () => {
  const { nav, clickHandler } = useNavViewModel()
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <a href="/" onClick={clickHandler} className="text-2xl text-white">
          {nav.logo}
        </a>
      </div>
      <div className="flex items-center space-x-4">
        {nav.links.map((link) => (
          <a key={link.name} href={link.href} onClick={clickHandler} className="text-white">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}
