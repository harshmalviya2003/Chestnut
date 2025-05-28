"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navItems = [
    { name: "Products", href: "#products", subItems: ["Mortgages", "Refinancing", "Home Equity"] },
    { name: "Compare Rates", href: "#compare" },
    { name: "Resources", href: "#resources", subItems: ["Blog", "Calculators", "Guides"] },
    { name: "About Us", href: "#about" }
  ]

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            {/* SVG Logo */}
            <motion.div
              className="w-5 h-5 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#0022DF"/>
                <path d="M10 0 C 15 5, 15 15, 10 20 C 5 15, 5 5, 10 0 Z" fill="white"/>
              </svg>
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-black tracking-tight"
              whileHover={{ color: '#0022DF' }}
            >
              Chestnut
            </motion.span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium flex items-center transition-colors ${
                    hoveredLink === item.name 
                      ? 'text-[#0022DF]' 
                      : 'text-gray-700 hover:text-[#0022DF]'
                  }`}
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item.name}
                  {item.subItems && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      hoveredLink === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredLink === item.name ? 1 : 0,
                      y: hoveredLink === item.name ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-100 z-50"
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0022DF]/5 hover:text-[#0022DF] transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-[#0022DF] hover:bg-[#0022DF]/5 px-4"
              size="sm"
            >
              Sign In
            </Button>
            <Button 
              className="px-6 text-white hover:shadow-md transition-all hover:bg-[#0018b3]"
              style={{ 
                backgroundColor: '#0022DF',
                backgroundImage: 'linear-gradient(to right, #0022DF, #0055ff)'
              }}
              size="sm"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#0022DF] focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0022DF] hover:bg-[#0022DF]/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-[#0022DF] hover:bg-[#0022DF]/5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <Button 
                  className="w-full mb-2 text-white hover:shadow-md"
                  style={{ 
                    backgroundColor: '#0022DF',
                    backgroundImage: 'linear-gradient(to right, #0022DF, #0055ff)'
                  }}
                  size="sm"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-gray-700 border-gray-300"
                  size="sm"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}