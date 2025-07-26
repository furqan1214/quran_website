import Link from 'next/link';
import { 
  FaMosque, 
  FaQuran, 
  FaUserGraduate, 
  FaStar, 
  FaCheckCircle, 
  FaClock,
  FaHistory,
  FaBookOpen,
} from 'react-icons/fa';

export default function IslamicStudiesPage() {
  const courseData = {
    title: "Islamic Studies Program",
    subtitle: "Comprehensive Knowledge of Islam",
    description: "Learn the fundamentals of Islamic beliefs, practices, history, and spirituality from authentic sources",
    features: [
      {
        icon: <FaMosque className="text-green-600 text-2xl" />,
        title: "Aqeedah",
        description: "Correct Islamic belief system"
      },
      {
        icon: <FaQuran className="text-green-600 text-2xl" />,
        title: "Fiqh",
        description: "Understanding Islamic jurisprudence"
      },
      {
        icon: <FaHistory className="text-green-600 text-2xl" />,
        title: "Seerah",
        description: "Life of Prophet Muhammad (PBUH)"
      },
      {
        icon: <FaBookOpen className="text-green-600 text-2xl" />,
        title: "Tazkiyah",
        description: "Spiritual purification and growth"
      }
    ],
    levels: [
      {
        name: "Foundations",
        topics: [
          "Five Pillars of Islam",
          "Six Articles of Faith",
          "Basic Fiqh of Purification & Prayer",
          "Introduction to Prophetic Biography"
        ],
        duration: "3 Months"
      },
      {
        name: "Intermediate",
        topics: [
          "Advanced Aqeedah Studies",
          "Fiqh of Zakat, Fasting & Hajj",
          "Detailed Seerah Study",
          "Islamic Ethics & Manners"
        ],
        duration: "6 Months"
      },
      {
        name: "Advanced",
        topics: [
          "Comparative Fiqh",
          "Islamic History & Civilization",
          "Contemporary Islamic Issues",
          "Spiritual Development"
        ],
        duration: "12 Months"
      }
    ],
    instructors: [
      {
        name: "Shaykh Abdullah",
        qualification: "PhD in Islamic Studies",
        specialization: "Islamic Theology"
      },
      {
        name: "Ustadha Aisha",
        qualification: "M.A. in Islamic Jurisprudence",
        specialization: "Women's Fiqh"
      }
    ],
    testimonials: [
      {
        name: "Brother Yusuf",
        review: "This course gave me a structured understanding of my faith I never had before",
        rating: 5
      },
      {
        name: "Sister Fatima",
        review: "The teachers make complex concepts easy to understand and apply",
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
              href="/islamic-studies-enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Free Sample Lesson
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Core Subjects</h2>
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
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Structure</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courseData.levels.map((level, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-green-700 mb-4">{level.name} Level</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {level.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-green-600" />
                    <span>Duration: {level.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Learn From Scholars</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courseData.instructors.map((instructor, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
                  {instructor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{instructor.name}</h3>
                  <p className="text-green-600">{instructor.qualification}</p>
                </div>
              </div>
              <p className="text-gray-600"><span className="font-medium">Specialization:</span> {instructor.specialization}</p>
            </div>
          ))}
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
          <h2 className="text-3xl font-bold mb-6">Strengthen Your Islamic Foundation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our comprehensive Islamic Studies program today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              islamic Studies Enroll Now
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
