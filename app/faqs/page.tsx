'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaQuran, FaChalkboardTeacher, FaClock, FaLaptop } from 'react-icons/fa'

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqCategories = [
    {
      name: 'General Information',
      icon: <FaQuran className="text-green-600 mr-2" />,
      items: [
        {
          question: 'What teaching methodology do you use?',
          answer: 'We combine traditional Qaida learning with modern interactive techniques, focusing on proper Tajweed rules and gradual memorization.'
        },
        {
          question: 'Are your teachers qualified?',
          answer: 'All our teachers are certified with Ijazah and have minimum 5 years of teaching experience in Quran education.'
        },
        {
          question: 'What age groups do you teach?',
          answer: 'We accept students from age 5 to adults, with specialized programs for children, teens, and mature learners.'
        }
      ]
    },
    {
      name: 'Technical Requirements',
      icon: <FaLaptop className="text-green-600 mr-2" />,
      items: [
        {
          question: 'What equipment do I need for classes?',
          answer: 'You need a stable internet connection, computer/tablet with microphone, and preferably a webcam. We recommend using Zoom.'
        },
        {
          question: 'How do I submit my recitation practice?',
          answer: 'Students can share audio recordings via WhatsApp or our learning portal for teacher feedback between sessions.'
        }
      ]
    },
    {
      name: 'Schedule & Pricing',
      icon: <FaClock className="text-green-600 mr-2" />,
      items: [
        {
          question: 'What are your class timings?',
          answer: 'We offer 24/7 scheduling flexibility. Morning, afternoon and evening slots available across time zones.'
        },
        {
          question: 'Do you offer family discounts?',
          answer: 'Yes! We provide 15% discount for siblings and 20% for groups of 3 or more students from same family.'
        }
      ]
    },
    {
      name: 'Learning Progress',
      icon: <FaChalkboardTeacher className="text-green-600 mr-2" />,
      items: [
        {
          question: 'How long to complete Qaida course?',
          answer: 'Typically 3-6 months depending on student dedication and practice frequency (2-5 classes per week recommended).'
        },
        {
          question: 'What certification do you provide?',
          answer: 'We issue completion certificates for each level and Ijazah for Hifz graduates who complete memorization.'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <Head>
        <title>FAQs - Quran Academy</title>
        <meta name="description" content="Get answers to common questions about our online Quran learning programs" />
      </Head>

      <section className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common queries about our Quran learning programs
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center">
                {category.icon}
                {category.name}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const isActive = activeIndex === itemIndex
                  return (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all"
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
                        onClick={() => toggleAccordion(itemIndex)}
                        aria-expanded={isActive}
                      >
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.question}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-green-600 transform transition-transform ${
                            isActive ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      <div
                        className={`px-6 pb-6 pt-2 ${isActive ? 'block' : 'hidden'}`}
                      >
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Need more help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to answer your questions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/demo"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
