import Link from 'next/link';
import { 
  FaLanguage, 
  FaBook, 
  FaUserGraduate, 
  FaGlobe, 
  FaMosque, 
  FaCheckCircle,
  FaStar,
  FaClock
} from 'react-icons/fa';

export default function ArabicLanguagePage() {
  const courseData = {
    title: "Arabic Language Program",
    subtitle: "Master the Language of the Quran",
    description: "Our comprehensive Arabic courses help you understand the Quran, Hadith, and Islamic texts in their original language",
    features: [
      {
        icon: <FaLanguage className="text-green-600 text-2xl" />,
        title: "Quranic Arabic",
        description: "Focus on vocabulary and grammar used in the Quran"
      },
      {
        icon: <FaBook className="text-green-600 text-2xl" />,
        title: "Classical Arabic",
        description: "Study classical Islamic texts and literature"
      },
      {
        icon: <FaUserGraduate className="text-green-600 text-2xl" />,
        title: "Modern Arabic",
        description: "Learn contemporary communication skills"
      },
      {
        icon: <FaGlobe className="text-green-600 text-2xl" />,
        title: "Cultural Context",
        description: "Understand Arab culture and expressions"
      }
    ],
    levels: [
      {
        name: "Beginner",
        focus: [
          "Arabic alphabet & pronunciation",
          "Basic vocabulary (300+ words)",
          "Simple sentence structure"
        ],
        outcome: "Read and understand basic Quranic words",
        duration: "3 Months"
      },
      {
        name: "Intermediate",
        focus: [
          "Quranic grammar (Nahw & Sarf)",
          "Verb conjugations",
          "Common Quranic phrases"
        ],
        outcome: "Understand 50% of Quranic vocabulary",
        duration: "6 Months"
      },
      {
        name: "Advanced",
        focus: [
          "Classical texts analysis",
          "Balagha (Rhetoric)",
          "Hadith terminology"
        ],
        outcome: "Read classical Islamic literature",
        duration: "12 Months"
      }
    ],
    teachingMethods: [
      {
        method: "Immersion Technique",
        description: "Learn through meaningful context rather than rote memorization"
      },
      {
        method: "Spaced Repetition",
        description: "Systematic review for long-term retention"
      },
      {
        method: "Communicative Approach",
        description: "Focus on practical communication skills"
      },
      {
        method: "Cultural Integration",
        description: "Learn language through Islamic culture"
      }
    ],
    testimonials: [
      {
        name: "Brother Yusuf",
        review: "After 6 months, I can now understand Quranic verses without translation",
        rating: 5
      },
      {
        name: "Sister Aisha",
        review: "The teachers make complex grammar rules easy to understand",
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
              href="/admission" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Admission
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
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Program Features</h2>
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
          <div className="grid md:grid-cols-3 gap-8">
            {courseData.levels.map((level, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-green-700 mb-4">{level.name} Level</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul className="space-y-2">
                    {level.focus.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Learning Outcome:</h4>
                  <p className="text-gray-600">{level.outcome}</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-green-600" />
                  <span>Duration: {level.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Teaching Methodology</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {courseData.teachingMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-green-700 mb-2">{method.method}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Student Success Stories</h2>
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
          <h2 className="text-3xl font-bold mb-6">Unlock the Language of the Quran</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Begin your journey to understand Islam in its original language</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/arabic-enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Contact Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
