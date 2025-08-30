'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, MapPin } from 'lucide-react'

const mainNavItems = [
  { title: 'Explore', href: '/explore', icon: Search },
  { title: 'Co-living', href: '/co-living', icon: MapPin },
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
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const isActivePath = (href: string) => pathname === href

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-xl shadow-black/5 border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative z-10">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Cohousy - Premium Co-living Spaces" 
                  className="h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-accent/20 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => {
                const Icon = item.icon
                const isActive = isActivePath(item.href)
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-4 py-2.5 font-medium rounded-lg transition-all duration-300 group ${
                      isActive
                        ? 'text-accent bg-accent/10 shadow-sm'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-accent hover:bg-gray-50' 
                          : 'text-gray-800 hover:text-accent hover:bg-white/10'
                    }`}
                  >
                    {Icon && <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />}
                    <span>{item.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-accent/5 rounded-lg border border-accent/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}

              {/* More Options Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('accommodation')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-2 px-4 py-2.5 font-medium rounded-lg transition-all duration-300 group ${
                    isScrolled ? 'text-gray-700 hover:text-accent hover:bg-gray-50' : 'text-gray-800 hover:text-accent hover:bg-white/10'
                  }`}
                >
                  <span>More Options</span>
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'accommodation' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-3 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/10 py-3 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Accommodation Options
                        </p>
                      </div>
                      {accommodationItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:text-accent hover:bg-accent/5 transition-all duration-200 group"
                          >
                            <span className="flex-1">{item.title}</span>
                            <ChevronDown size={14} className="rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                          </Link>
                        </motion.div>
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
                className="relative inline-flex items-center px-6 py-3 bg-accent text-black font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative p-2.5 rounded-xl transition-all duration-300 group ${
                isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-gray-800 hover:bg-white/10'
              } ${isOpen ? 'bg-gray-100' : ''}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
              </div>
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
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={closeMenu} 
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <img src="/logo.png" alt="Cohousy" className="h-8 w-auto" />
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <X size={20} className="text-gray-600 group-hover:text-gray-900" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6">
                {mainNavItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = isActivePath(item.href)
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center space-x-3 mx-6 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-accent bg-accent/10 shadow-sm'
                            : 'text-gray-900 hover:text-accent hover:bg-gray-50'
                        }`}
                      >
                        {Icon && <Icon size={18} />}
                        <span>{item.title}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* More Options Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    More Options
                  </div>
                  {accommodationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (mainNavItems.length + index) * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between mx-6 px-4 py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl transition-all duration-200"
                      >
                        <span>{item.title}</span>
                        <ChevronDown size={14} className="rotate-[-90deg] opacity-60" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="mt-8 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/co-living"
                    onClick={closeMenu}
                    className="flex items-center justify-center w-full bg-accent text-black py-4 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Book Now</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}