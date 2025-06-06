"use client"

import { useState } from "react"
import { Search, Bell, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Movies
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              New & Popular
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              My List
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />
          <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />

          {/* Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-semibold">U</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
