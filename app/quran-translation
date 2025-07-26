import Link from 'next/link';
import { 
  FaBook, 
  FaLanguage, 
  FaUserGraduate, 
  FaStar, 
  FaCheckCircle, 
  FaClock,
  FaGlobe,
  FaHistory
} from 'react-icons/fa';

export default function QuranTranslationPage() {
  const courseData = {
    title: "Quran Translation Course",
    subtitle: "Understand the Meaning of the Holy Quran",
    description: "Learn the translation and explanation of Quranic verses in your preferred language with contextual understanding",
    features: [
      {
        icon: <FaBook className="text-green-600 text-2xl" />,
        title: "Word-by-Word",
        description: "Understand each Arabic word's meaning"
      },
      {
        icon: <FaLanguage className="text-green-600 text-2xl" />,
        title: "Multiple Languages",
        description: "Available in English, Urdu, and more"
      },
      {
        icon: <FaHistory className="text-green-600 text-2xl" />,
        title: "Contextual Meaning",
        description: "Learn Asbab al-Nuzul (revelation contexts)"
      },
      {
        icon: <FaGlobe className="text-green-600 text-2xl" />,
        title: "Practical Application",
        description: "Implement Quranic teachings in daily life"
      }
    ],
    levels: [
      {
        name: "Basic",
        duration: "3 Months",
        focus: [
          "Short Surahs translation",
          "Basic vocabulary",
          "Simple grammatical concepts"
        ],
        outcome: "Understand basic Quranic messages"
      },
      {
        name: "Intermediate",
        duration: "6 Months",
        focus: [
          "Thematic study",
          "Comparative translation",
          "Common Quranic terms"
        ],
        outcome: "Grasp deeper meanings of verses"
      },
      {
        name: "Advanced",
        duration: "12 Months",
        focus: [
          "Complete Juz translation",
          "Linguistic analysis",
          "Tafsir principles"
        ],
        outcome: "Comprehend Quranic discourse"
      }
    ],
    instructors: [
      {
        name: "Shaykh Abdullah",
        qualification: "PhD in Quranic Studies",
        specialization: "Quranic Linguistics"
      },
      {
        name: "Ustadha Fatima",
        qualification: "M.A. in Islamic Studies",
        specialization: "Quranic Exegesis"
      }
    ],
    testimonials: [
      {
        name: "Brother Yusuf",
        review: "This course transformed my relationship with the Quran - I finally understand what I'm reciting",
        rating: 5
      },
      {
        name: "Sister Aisha",
        review: "The word-by-word approach made complex concepts accessible",
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
              href="/contact" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Learn quran translation
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Free Trial Lesson
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Course Highlights</h2>
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
                  <div>
                    <h4 className="font-semibold">Learning Outcome:</h4>
                    <p className="text-gray-600">{level.outcome}</p>
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
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Your Instructors</h2>
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
          <h2 className="text-3xl font-bold mb-6">Understand Allah's Message</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Begin your journey to comprehend the Quran's divine wisdom</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quran-translation-enroll" 
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
