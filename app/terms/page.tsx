'use client'

import Head from 'next/head'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <Head>
        <title>Terms & Conditions - Quran Academy</title>
        <meta name="description" content="Terms and conditions for using Quran Academy services" />
      </Head>

      <section className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">
            Last updated: August 25, 2023
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Quran Academy's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Services Description</h2>
              <p className="text-gray-600 mb-4">
                Quran Academy provides online Quran education services including but not limited to:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>One-on-one Quran recitation classes</li>
                <li>Tajweed instruction</li>
                <li>Hifz (memorization) programs</li>
                <li>Islamic studies courses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Registration Requirements</h2>
              <p className="text-gray-600 mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Be at least 5 years old (parental consent required for minors)</li>
                <li>Provide accurate registration information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services for personal, non-commercial purposes only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Payment & Refunds</h2>
              <p className="text-gray-600 mb-4">
                All fees are payable in advance. We offer:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>7-day money back guarantee for new students</li>
                <li>Prorated refunds for unused classes with 30 days notice</li>
                <li>No refunds for completed classes or no-shows</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Code of Conduct</h2>
              <p className="text-gray-600 mb-4">
                Students and teachers must adhere to Islamic etiquette including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Maintaining proper hijab during video sessions</li>
                <li>Using respectful language</li>
                <li>Being punctual for scheduled classes</li>
                <li>Not recording sessions without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All course materials provided by Quran Academy are for personal use only. You may not:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Reproduce, distribute, or sell our materials</li>
                <li>Use our content for commercial purposes</li>
                <li>Create derivative works without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">7. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your personal information is protected under our <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>. We collect:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Contact information for communication</li>
                <li>Payment details for processing fees</li>
                <li>Progress data to improve learning experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Quran Academy shall not be liable for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                <li>Technical issues beyond our control</li>
                <li>Interruptions in service due to maintenance</li>
                <li>Student's individual learning outcomes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">9. Modifications</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-green-700 mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms, contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: <a href="mailto:support@quranacademy.com" className="text-green-600 hover:underline">support@quranacademy.com</a><br />
                Phone: <a href="tel:+11234567890" className="text-green-600 hover:underline">+1 (123) 456-7890</a>
              </p>
            </section>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
