import Link from 'next/link';
import { FaQuran, FaClock, FaUserTie, FaStar, FaCheckCircle, FaMosque } from 'react-icons/fa';

export default function NazraPage() {
  const courseData = {
    title: "Quran Nazra Program",
    subtitle: "Perfect Your Quran Recitation with Tajweed",
    description: "Learn to recite the Holy Quran with proper pronunciation, rhythm, and Tajweed rules under the guidance of certified Qaris",
    features: [
      {
        icon: <FaQuran className="text-green-600 text-2xl" />,
        title: "Verse-by-Verse Learning",
        description: "Systematic recitation of the entire Quran"
      },
      {
        icon: <FaMosque className="text-green-600 text-2xl" />,
        title: "Tajweed Rules",
        description: "Master proper articulation and characteristics of letters"
      },
      {
        icon: <FaUserTie className="text-green-600 text-2xl" />,
        title: "Certified Instructors",
        description: "Learn from qualified Qaris with Ijazah"
      },
      {
        icon: <FaClock className="text-green-600 text-2xl" />,
        title: "Flexible Scheduling",
        description: "Choose class times that work for you"
      }
    ],
    levels: [
      {
        name: "Beginner Level",
        duration: "1-3 Months",
        focus: "Basic Arabic letters and pronunciation",
        target: "New learners and children"
      },
      {
        name: "Intermediate Level",
        duration: "3-6 Months",
        focus: "Fluency in short Surahs with Tajweed",
        target: "Those with basic Quran reading skills"
      },
      {
        name: "Advanced Level",
        duration: "6-12 Months",
        focus: "Complete Quran recitation with perfection",
        target: "Students aiming for Ijazah"
      }
    ],
    testimonials: [
      {
        name: "Abdullah K.",
        review: "My recitation improved dramatically after just one month of classes",
        rating: 5
      },
      {
        name: "Mother of Ayesha",
        review: "My daughter now reads Quran beautifully with proper Tajweed",
        rating: 5
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{courseData.subtitle}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">{courseData.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/free-trial" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Course Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Learning Levels</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courseData.levels.map((level, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-green-700 mb-4">{level.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaClock className="text-green-600 mt-1 mr-2" />
                    <div>
                      <h4 className="font-semibold">Duration:</h4>
                      <p className="text-gray-600">{level.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2" />
                    <div>
                      <h4 className="font-semibold">Focus Areas:</h4>
                      <p className="text-gray-600">{level.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserTie className="text-green-600 mt-1 mr-2" />
                    <div>
                      <h4 className="font-semibold">Ideal For:</h4>
                      <p className="text-gray-600">{level.target}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Student Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courseData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.review}"</p>
                <div className="font-semibold text-green-800">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Quran Recitation Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our Nazra program and recite the Quran with confidence and beauty</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
