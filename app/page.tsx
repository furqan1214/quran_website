import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20"
      
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Quran Online with Certified Alim Teachers</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Personalized one-on-one Quran classes with Ijazah-certified instructors from Al-Azhar University. Start with a free trial lesson today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/blog" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explore Islamic Blogs
            </Link>
            <Link 
              href="/teachers" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300"
            >
              Meet Our Alim Teachers
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Thousands Choose Our Academy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📖',
                title: 'Authentic Quranic Education',
                description: 'Learn with certified Huffaz and Qaris who hold Ijazah in the 10 Qiraat. Our curriculum follows the traditional methods of Al-Azhar University.'
              },
              {
                icon: '👨‍🏫',
                title: 'Egyptian-Arabic Instructors',
                description: 'All teachers are native Arabic speakers from Egypt with minimum 7 years teaching experience and degrees in Islamic Studies.'
              },
              {
                icon: '⏱️',
                title: '24/7 Flexible Scheduling',
                description: 'Morning, evening or night classes available 365 days a year. Reschedule anytime with our flexible cancellation policy.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-green-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">Our Comprehensive Programs</h2>
            <Link href="/courses" className="text-green-600 hover:underline font-medium">
              View Full Course Catalog
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Quran Recitation (Nazra)',
                description: 'Master proper pronunciation (Makharij) and fluent recitation. Includes basic Tajweed rules and daily practice exercises.',
                level: 'All Levels',
                duration: '3-12 months'
              },
              {
                title: 'Tajweed Certification',
                description: 'Advanced study of articulation points, characteristics of letters, and rules of recitation leading to Ijazah.',
                level: 'Intermediate',
                duration: '6-18 months'
              },
              {
                title: 'Hifz-e-Quran Program',
                description: 'Personalized memorization plan with revision techniques. Average completion in 2-3 years with 95% retention rate.',
                level: 'Advanced',
                duration: '24-36 months'
              }
            ].map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center text-green-600 text-5xl">
                  {index === 0 && '📖'}
                  {index === 1 && '🎓'}
                  {index === 2 && '🧠'}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories From Our Students</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My 8-year-old completed the Nazra course in 9 months and now reads Quran fluently. The teachers' patience with children is remarkable.",
                name: "Ahmed Khan",
                role: "Parent of Student",
                location: "London, UK"
              },
              {
                quote: "After 2.5 years in the Hifz program, I've memorized 18 juz with perfect Tajweed. The revision system ensures I never forget.",
                name: "Fatima Ali",
                role: "Hifz Student",
                location: "Dubai, UAE"
              },
              {
                quote: "As a working professional, the flexible schedule allowed me to complete my Tajweed Ijazah in evenings after work.",
                name: "Yusuf Abdullah",
                role: "Medical Doctor",
                location: "Toronto, Canada"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black bg-opacity-10 p-8 rounded-lg">
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-green-200 text-sm">{testimonial.role}</div>
                <div className="text-green-300 text-xs mt-1">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Quranic Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of 5,000+ students across 35 countries learning with authentic Islamic scholarship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/enroll" 
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Enroll Now
            </Link>
            <Link 
              href="/demo" 
              className="inline-block border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
