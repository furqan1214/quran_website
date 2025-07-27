'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  FaBookOpen,
  FaUserPlus,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const [isDesktopCoursesOpen, setIsDesktopCoursesOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 10)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDemoModal(true)
    setMobileMenuOpen(false)
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
      ],
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
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-green-700">
              DARUL ILM
            </Link>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/demo"
                className="bg-white text-green-700 border border-green-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-50 flex items-center"
              >
                <FaBookOpen className="mr-2" />
                Demo Class
              </Link>
              <Link
                href="/admission"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 flex items-center"
              >
                <FaUserPlus className="mr-2" />
                Admission
              </Link>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <FaTimes size={22} /> : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center space-x-6 py-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${
                    pathname === link.href
                      ? 'text-green-700 font-semibold'
                      : 'text-gray-600 hover:text-green-700'
                  }`}
                  onMouseEnter={() => link.submenu && setIsDesktopCoursesOpen(true)}
                  onMouseLeave={() => link.submenu && setIsDesktopCoursesOpen(false)}
                >
                  {link.name}
                  {link.submenu && <FaChevronDown className="ml-1 h-3 w-3" />}
                </Link>

                {link.submenu && isDesktopCoursesOpen && (
                  <div
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                    onMouseEnter={() => setIsDesktopCoursesOpen(true)}
                    onMouseLeave={() => setIsDesktopCoursesOpen(false)}
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {sub.name}
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
              mobileMenuOpen ? 'max-h-screen pt-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-2 px-2 pb-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileSubmenu((prev) =>
                            prev === link.name ? null : link.name
                          )
                        }
                        className="w-full px-3 py-2 text-left flex justify-between items-center text-base font-medium rounded-md hover:bg-green-50"
                      >
                        <span>{link.name}</span>
                        <FaChevronRight
                          className={`transition-transform ${
                            activeMobileSubmenu === link.name ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {activeMobileSubmenu === link.name && (
                        <div className="pl-4 space-y-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm rounded-md bg-gray-50 text-gray-700 hover:bg-green-50"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-base rounded-md font-medium ${
                        pathname === link.href
                          ? 'text-green-700 bg-green-50'
                          : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/demo"
                  onClick={handleDemoClick}
                  className="flex justify-center items-center bg-white text-green-700 border border-green-700 px-4 py-2 rounded-md text-base font-medium hover:bg-green-50"
                >
                  <FaBookOpen className="mr-2" />
                  Demo Class
                </Link>
                <Link
                  href="/admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-center items-center bg-green-700 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-800"
                >
                  <FaUserPlus className="mr-2" />
                  Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Modal */}
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
              <p className="text-gray-600 mb-4">
                Experience our teaching methodology with a free 30-minute session with one of our qualified Quran teachers.
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Personalized assessment</li>
                <li>Interactive learning experience</li>
                <li>Q&A with our teachers</li>
                <li>No obligation commitment</li>
              </ul>
              <Link
                href="/demo-form"
                className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700"
                onClick={() => setShowDemoModal(false)}
              >
                Book Demo Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
