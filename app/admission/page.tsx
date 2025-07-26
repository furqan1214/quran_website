'use client'

import { useState } from 'react'
import Head from 'next/head'
import { FaUser, FaQuran, FaCalendarAlt, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    schedule: '',
    experience: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const programs = [
    {
      id: 'quran-recitation',
      name: 'Quran Recitation (Nazra)',
      description: 'Learn proper pronunciation and recitation of the Holy Quran with Tajweed rules'
    },
    {
      id: 'tajweed',
      name: 'Tajweed Mastery',
      description: 'Master the rules of Tajweed for beautiful and correct Quran recitation'
    },
    {
      id: 'hifz',
      name: 'Hifz Program (Memorization)',
      description: 'Systematic Quran memorization program with retention techniques'
    },
    {
      id: 'arabic',
      name: 'Quranic Arabic',
      description: 'Understand the language of the Quran with our structured Arabic course'
    }
  ]

  const schedules = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 4PM)',
    'Evening (4PM - 8PM)',
    'Weekend Classes'
  ]

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <Head>
        <title>Admission - Quran Academy</title>
        <meta name="description" content="Enroll in our Quran learning programs" />
      </Head>

      <section className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Begin Your Quran Journey</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students learning Quran online with our certified teachers
          </p>
        </div>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-center">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to Quran Academy. Our admissions team will contact you within 24 hours to complete your enrollment.
            </p>
            <Link
              href="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Information */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Our Programs</h2>
              
              <div className="space-y-6">
                {programs.map(program => (
                  <div key={program.id} className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                    <p className="text-gray-600 mt-1">{program.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-700 mb-2">Why Choose Us?</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Certified teachers with Ijazah</li>
                  <li>Personalized learning plans</li>
                  <li>Flexible scheduling</li>
                  <li>Progress tracking</li>
                  <li>Affordable pricing</li>
                </ul>
              </div>
            </div>

            {/* Admission Form */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Admission Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="5"
                    required
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaQuran className="text-gray-400" />
                    </div>
                    <select
                      id="program"
                      name="program"
                      required
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.program}
                      onChange={handleChange}
                    >
                      <option value="">Select a program</option>
                      {programs.map(program => (
                        <option key={program.id} value={program.id}>{program.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Schedule
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                    <select
                      id="schedule"
                      name="schedule"
                      required
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.schedule}
                      onChange={handleChange}
                    >
                      <option value="">Select preferred time</option>
                      {schedules.map(schedule => (
                        <option key={schedule} value={schedule}>{schedule}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Quran Learning Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
