import Link from 'next/link';
import Image from 'next/image';

export default function DemoClassPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Free Demo Class</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our Quran teaching methodology with a 30-minute free session with one of our certified teachers.
          </p>
        </div>
      </section>

      {/* Demo Class Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-100 p-8 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">What to Expect</h2>
                  <ul className="space-y-3 text-left text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Assessment of current Quran reading level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Introduction to our teaching methodology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Personalized learning plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Q&A with the teacher</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/images/quran-demo.jpg" // Replace with your image
                  alt="Quran Demo Class"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>

              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Demo</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="student-level" className="block text-sm font-medium text-gray-700 mb-1">
                      Student's Current Level
                    </label>
                    <select
                      id="student-level"
                      name="student-level"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner (Can't read Arabic)</option>
                      <option value="basic">Basic (Can read slowly)</option>
                      <option value="intermediate">Intermediate (Knows some Tajweed)</option>
                      <option value="advanced">Advanced (Wants to memorize)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="datetime-local"
                      id="preferred-time"
                      name="preferred-time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Book Free Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-12">What Parents Say About Our Demo Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The demo class helped me understand how my son would learn. The teacher was so patient!",
                name: "Amina Khan",
                location: "London, UK"
              },
              {
                quote: "After the demo, my daughter couldn't wait to start regular classes. She loved the interactive approach.",
                name: "Yusuf Abdullah",
                location: "Dubai, UAE"
              },
              {
                quote: "The teacher identified exactly where my child needed help during the demo session.",
                name: "Fatima Ali",
                location: "Toronto, Canada"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold text-green-700">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
