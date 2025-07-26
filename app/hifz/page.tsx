import Link from 'next/link';
import { FaQuran, FaBrain, FaUserTie, FaClock, FaStar, FaMosque, FaCheckCircle } from 'react-icons/fa';

export default function HifzPage() {
  const programData = {
    title: "Quran Hifz Program",
    subtitle: "Memorize the Holy Quran with Perfection",
    description: "Our structured memorization program guides students to commit the entire Quran to memory with proper Tajweed and retention techniques",
    features: [
      {
        icon: <FaQuran className="text-green-600 text-2xl" />,
        title: "Personalized Plan",
        description: "Customized memorization schedule based on your capacity"
      },
      {
        icon: <FaBrain className="text-green-600 text-2xl" />,
        title: "Retention Techniques",
        description: "Proven methods to ensure long-term memorization"
      },
      {
        icon: <FaUserTie className="text-green-600 text-2xl" />,
        title: "Certified Huffaz",
        description: "Learn from teachers with Ijazah in Quran memorization"
      },
      {
        icon: <FaMosque className="text-green-600 text-2xl" />,
        title: "Tajweed Focus",
        description: "Memorize with perfect pronunciation and rules"
      }
    ],
    methodology: [
      {
        step: "1",
        title: "New Lesson",
        description: "Daily new verses with teacher guidance"
      },
      {
        step: "2",
        title: "Repetition",
        description: "Systematic revision of new and old portions"
      },
      {
        step: "3",
        title: "Testing",
        description: "Regular evaluation by certified Huffaz"
      },
      {
        step: "4",
        title: "Consolidation",
        description: "Periodic full-juz revision sessions"
      }
    ],
    levels: [
      {
        name: "Beginner",
        duration: "1-2 Years",
        target: "1-10 Juz",
        description: "Establish memorization habits and basic retention"
      },
      {
        name: "Intermediate",
        duration: "2-3 Years",
        target: "11-20 Juz",
        description: "Increase memorization speed and accuracy"
      },
      {
        name: "Advanced",
        duration: "1-2 Years",
        target: "21-30 Juz",
        description: "Complete memorization with perfection"
      }
    ],
    testimonials: [
      {
        name: "Abdur-Rahman",
        achievement: "Completed Hifz in 3 years",
        review: "The structured approach made memorization manageable and rewarding",
        rating: 5
      },
      {
        name: "Parent of Maryam",
        achievement: "12-year-old memorized 15 Juz",
        review: "My daughter progressed beautifully under the teachers' guidance",
        rating: 5
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{programData.title}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{programData.subtitle}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">{programData.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hifz-assessment" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Free Assessment
            </Link>
            <Link 
              href="/hifz-trial" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Trial Class
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Memorization Methodology</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {programData.methodology.map((method, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
                <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {method.step}
                </div>
                <h3 className="text-lg font-bold text-green-700 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Levels</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programData.levels.map((level, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700 mb-4">{level.name} Level</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaClock className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Duration:</h4>
                    <p className="text-gray-600">{level.duration}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaQuran className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Memorization Target:</h4>
                    <p className="text-gray-600">{level.target}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Focus:</h4>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                <div className="font-semibold text-green-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.achievement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Hifz Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our blessed program to become a Hafiz/Hafiza of the Quran</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/demo" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Book democlass
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Speak to a Teacher
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
