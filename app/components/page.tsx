'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FaBookOpen, FaUserPlus, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false)
  const [coursesMenuOpen, setCoursesMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 10)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
     const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDemoModal(true)
    setMobileMenuOpen(false)
}

  const toggleCoursesMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setCoursesMenuOpen(!coursesMenuOpen)
  }

  const closeAllMenus = () => {
    setMobileMenuOpen(false)
    setCoursesMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Courses', 
      href: '#',
      submenu: [
        { name: 'Noorani Qaida Course', href: '/noorani-qaida' },
        { name: 'Quran Reading Course', href: '/quran-reading' },
        { name: 'Quran Memorization', href: '/hifz' },
        { name: 'Quran Translation Course', href: '/quran-translation' },
        { name: 'Quran Tajweed Course', href: '/tajweed' },
        { name: 'Quran Tafseer Course', href: '/tafseer' },
        { name: 'Hadith Course', href: '/hadith' },
        { name: 'Arabic Language Course', href: '/arabic' },
        { name: 'Islamic Studies Course', href: '/islamic-studies' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'About Us', href: '/about' },
    { name: 'Islamic Blog', href: '/blog' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:items-start mb-2">
            <Link href="/" className="flex flex-col items-center md:items-start mb-2">
              <span className="text-2xl font-bold text-green-700">DARUL ILM</span>
              <span className="text-sm text-gray-600">ONLINE QURAN ACADEMY</span>
            </Link>

            <div className="hidden md:flex items-center space-x-4 mt-2">
              <Link
                href="/demo"
                className="bg-white text-green-700 border border-green-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-50 transition-colors flex items-center"
                onClick={handleDemoClick}
              >
                <FaBookOpen className="mr-2" />
                Demo Class
              </Link>
              <Link
                href="/admission"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors flex items-center"
              >
                <FaUserPlus className="mr-2" />
                Admission
              </Link>
            </div>

            <div className="md:hidden flex items-center absolute right-4 top-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-green-700"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes /> : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 py-2 relative border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors flex items-center ${
                    pathname === link.href
                      ? 'text-green-700 font-semibold'
                      : 'text-gray-600 hover:text-green-700'
                  }`}
                  onMouseEnter={() => link.submenu && setCoursesMenuOpen(true)}
                  onMouseLeave={() => link.submenu && setCoursesMenuOpen(false)}
                >
                  {link.name}
                  {link.submenu && (
                    <FaChevronDown className="ml-1 h-3 w-3" />
                  )}
                </Link>

                {link.submenu && coursesMenuOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                    onMouseEnter={() => setCoursesMenuOpen(true)}
                    onMouseLeave={() => setCoursesMenuOpen(false)}
                  >
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
            }`}
          >
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={toggleCoursesMenu}
                        className={`px-3 py-2 rounded-md text-base font-medium flex justify-between items-center w-full ${
                          pathname === link.href
                            ? 'text-green-700 bg-green-50'
                            : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <FaChevronRight className={`transition-transform ${coursesMenuOpen ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {coursesMenuOpen && (
                        <div className="pl-4 space-y-2">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm rounded-md bg-gray-50 text-gray-700 hover:text-green-700 hover:bg-green-50"
                              onClick={closeAllMenus}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-base font-medium flex justify-between items-center ${
                        pathname === link.href
                          ? 'text-green-700 bg-green-50'
                          : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                      }`}
                      onClick={closeAllMenus}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 px-3">Welcome to Darul Ilm Online Quran Academy</h3>
                <Link
                  href="#demo"
                  onClick={handleDemoClick}
                  className="bg-white text-green-700 border border-green-700 px-4 py-2 rounded-md text-base font-medium text-center hover:bg-green-50 flex items-center justify-center"
                >
                  <FaBookOpen className="mr-2" />
                  Demo Class
                </Link>
                <Link
                  href="/admission"
                  className="bg-green-700 text-white px-4 py-2 rounded-md text-base font-medium text-center hover:bg-green-800 flex items-center justify-center"
                  onClick={closeAllMenus}
                >
                  <FaUserPlus className="mr-2" />
                  Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Class Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Schedule a Demo Class</h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Experience our teaching methodology with a free 30-minute session with one of our qualified Quran teachers.
                </p>
                
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Personalized assessment</li>
                  <li>Interactive learning experience</li>
                  <li>Q&A with our teachers</li>
                  <li>No obligation commitment</li>
                </ul>
                
                <div className="pt-4">
                  <Link
                    href="/demo-form"
                    className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => setShowDemoModal(false)}
                  >
                    Book Demo Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
