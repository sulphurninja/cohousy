'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const mainNavItems = [
  { title: 'Co-living', href: '/co-living' },
  { title: 'PG near Eon IT Park', href: '/pg-near-eon-it-park' },
  { title: 'Single Room PG', href: '/single-room-pg-kharadi' },
]

const accommodationItems = [
  { title: 'Ladies PG in Kharadi', href: '/ladies-pg-kharadi' },
  { title: 'Male PG in Kharadi', href: '/male-pg-kharadi' },
  { title: 'Long-term Rentals', href: '/long-term-rentals' },
  { title: 'Short-term Stays', href: '/short-term-rentals' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Cohousy - Premium Co-living Spaces" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-gray-900' : 'text-black'
                  } group py-2`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Accommodation Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('accommodation')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-gray-900' : 'text-black'
                  } group py-2`}
                >
                  <span>More Options</span>
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'accommodation' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-4 z-50"
                    >
                      {accommodationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-3 text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/co-living"
                className="bg-accent text-black px-6 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src="/logo.png" alt="Cohousy" className="h-8 w-auto" />
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="py-6">
                {/* Main Navigation Items */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-gray-900 font-medium hover:text-accent hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                ))}

                {/* Accommodation Items */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    More Options
                  </div>
                  {accommodationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-6 py-3 text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 px-6">
                  <Link
                    href="/co-living"
                    onClick={closeMenu}
                    className="block w-full text-center bg-accent text-black py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}