import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      role: 'Parent',
      rating: 5,
      content: 'My children have improved their Quran recitation dramatically in just 3 months. The teachers are patient and knowledgeable, making learning enjoyable for kids.',
      avatar: '/avatars/parent.jpg'
    },
    {
      id: 2,
      name: 'Fatima Ali',
      role: 'Hifz Student',
      rating: 5,
      content: 'I\'ve memorized 5 juz so far with their systematic approach. The weekly progress tracking keeps me motivated and the teachers are very supportive.',
      avatar: '/avatars/student1.jpg'
    },
    {
      id: 3,
      name: 'Yusuf Abdullah',
      role: 'Adult Learner',
      rating: 4,
      content: 'As a working professional, the flexible scheduling allowed me to continue my Quran studies. I appreciate the personalized learning plan they created for me.',
      avatar: '/avatars/student2.jpg'
    },
    {
      id: 4,
      name: 'Amina Rahman',
      role: 'Tajweed Student',
      rating: 5,
      content: 'The Tajweed course transformed my Quran recitation. My teacher corrected mistakes I didn\'t even know I was making. Highly recommended for serious students!',
      avatar: '/avatars/student3.jpg'
    },
    {
      id: 5,
      name: 'Mohammed Ibrahim',
      role: 'Parent',
      rating: 5,
      content: 'The teachers connect so well with my son. He looks forward to his classes and has developed a love for Quran that I never expected at his age.',
      avatar: '/avatars/parent2.jpg'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Revert Student',
      rating: 5,
      content: 'As a new Muslim, I was nervous about learning Quran. The teachers were so understanding and started from the very basics. I can now read Arabic!',
      avatar: '/avatars/revert.jpg'
    }
  ]

  const stats = [
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '500+', label: 'Active Students' },
    { value: '15+', label: 'Qualified Teachers' },
    { value: '4.9/5', label: 'Average Rating' }
  ]

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <section className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Student Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our students and parents say about their learning experience
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  {/* Replace with actual Image component for production */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`} 
                  />
                ))}
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-1 text-green-100 text-3xl" />
                <p className="text-gray-600 relative z-10 pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your Quran journey?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied students learning with our qualified teachers
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/demo" 
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Book a Demo Class
            </a>
            <a 
              href="/admission" 
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
