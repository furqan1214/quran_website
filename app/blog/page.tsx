'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaSearch, FaQuran, FaChild, FaMosque } from 'react-icons/fa'
import { MdFamilyRestroom, MdTranslate } from 'react-icons/md'

const blogPosts = [
  {
    id: 1,
    title: 'The Miraculous Language of the Quran',
    excerpt: 'Exploring the linguistic wonders that make the Quran inimitable',
    category: 'Quranic Studies',
    date: 'August 20, 2023',
    readTime: '8 min',
    icon: <FaQuran className="text-green-500 text-2xl" />
  },
  {
    id: 2,
    title: 'Teaching Quran to Children: 7 Effective Methods',
    excerpt: 'Proven techniques to make Quran learning enjoyable for young minds',
    category: 'Islamic Parenting',
    date: 'August 15, 2023',
    readTime: '6 min',
    icon: <FaChild className="text-green-500 text-2xl" />
  },
  {
    id: 3,
    title: 'Understanding Tajweed: The Science of Beautiful Recitation',
    excerpt: 'Essential rules every Muslim should know for proper Quran reading',
    category: 'Tajweed',
    date: 'August 10, 2023',
    readTime: '10 min',
    icon: <MdTranslate className="text-green-500 text-2xl" />
  },
  {
    id: 4,
    title: 'Building a Quran-Centered Family',
    excerpt: 'Practical tips to cultivate love for the Quran in your household',
    category: 'Family Life',
    date: 'August 5, 2023',
    readTime: '7 min',
    icon: <MdFamilyRestroom className="text-green-500 text-2xl" />
  },
  {
    id: 5,
    title: 'The Spiritual Benefits of Morning Quran Recitation',
    excerpt: 'How Fajr time Quran study transforms your entire day',
    category: 'Spirituality',
    date: 'July 30, 2023',
    readTime: '5 min',
    icon: <FaMosque className="text-green-500 text-2xl" />
  },
  {
    id: 6,
    title: 'Memorizing Quran: A Complete Beginner\'s Guide',
    excerpt: 'Step-by-step approach to starting your Hifz journey',
    category: 'Hifz',
    date: 'July 25, 2023',
    readTime: '12 min',
    icon: <FaQuran className="text-green-500 text-2xl" />
  }
]

export default function IslamicBlog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Quranic Studies', 'Islamic Parenting', 'Tajweed', 'Family Life', 'Spirituality', 'Hifz']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <Head>
        <title>Islamic Blog - Quran Academy</title>
        <meta name="description" content="Enlightening Islamic articles on Quran study, Tajweed, and Muslim family life" />
      </Head>

      <section className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Islamic Knowledge Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enlightening articles to strengthen your connection with the Quran
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Islamic articles..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="block w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-emerald-500 p-8 flex items-center justify-center">
              <FaQuran className="text-white text-6xl opacity-80" />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-3">
                  Featured
                </span>
                <span className="text-green-600 font-medium">Quranic Studies</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">The Preservation Miracle of the Quran</h2>
              <p className="text-gray-600 mb-4">
                How Allah has perfectly preserved the Quran through centuries and what this means for Muslims today
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <FaCalendarAlt className="mr-1" />
                <span className="mr-4">August 25, 2023</span>
                <FaClock className="mr-1" />
                <span>9 min read</span>
              </div>
              <Link
                href="/blog/quran-preservation"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-start">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  {post.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    Read <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Subscribe to Our Islamic Newsletter</h2>
            <p className="mb-6 opacity-90">
              Receive weekly articles on Quran study, parenting advice, and spiritual growth directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
