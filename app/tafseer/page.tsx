import Link from 'next/link';
import { 
  FaQuran,
  FaUserTie,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaHistory,
  FaLightbulb,
  FaLayerGroup
} from 'react-icons/fa';
import { FaCakeCandles } from 'react-icons/fa6';

export default function TafseerCoursePage() {
  const courseData = {
    title: "Quran Tafseer Program",
    subtitle: "Deepen Your Understanding of the Divine Message",
    description: "Explore the profound meanings of the Quran through authentic interpretation and contextual analysis",
    features: [
      {
        icon: <FaQuran className="text-green-600 text-2xl" />,
        title: "Classical Tafseer",
        description: "Study from renowned classical commentaries"
      },
      {
        icon: <FaCakeCandles className="text-green-600 text-2xl" />,
        title: "Linguistic Analysis",
        description: "Understand Quranic Arabic nuances"
      },
      {
        icon: <FaHistory className="text-green-600 text-2xl" />,
        title: "Historical Context",
        description: "Learn Asbab al-Nuzul (revelation contexts)"
      },
      {
        icon: <FaLightbulb className="text-green-600 text-2xl" />,
        title: "Contemporary Relevance",
        description: "Apply Quranic wisdom to modern life"
      }
    ],
    curriculum: [
      {
        name: "Introductory",
        duration: "3 Months",
        focus: [
          "Short Surahs tafseer",
          "Basic tafseer terminology",
          "Introduction to major mufassireen"
        ],
        outcome: "Understand basic Quranic messages"
      },
      {
        name: "Intermediate",
        duration: "6 Months",
        focus: [
          "Thematic tafseer approach",
          "Comparative study of tafaseer",
          "Quranic stories analysis"
        ],
        outcome: "Grasp deeper Quranic meanings"
      },
      {
        name: "Advanced",
        duration: "12 Months",
        focus: [
          "Complete Juz tafseer",
          "Fiqh rulings derivation",
          "Scientific miracles analysis"
        ],
        outcome: "Master Quranic interpretation"
      }
    ],
    methodology: [
      {
        step: "1",
        title: "Textual Analysis",
        description: "Examine Quranic words and phrases"
      },
      {
        step: "2",
        title: "Contextual Study",
        description: "Understand historical background"
      },
      {
        step: "3",
        title: "Commentary Comparison",
        description: "Study classical and modern tafaseer"
      },
      {
        step: "4",
        title: "Practical Application",
        description: "Implement lessons in daily life"
      }
    ],
    instructors: [
      {
        name: "Shaykh Abdullah",
        qualification: "PhD in Quranic Exegesis",
        specialization: "Classical Tafseer"
      },
      {
        name: "Ustadha Fatima",
        qualification: "M.A. in Islamic Studies",
        specialization: "Thematic Tafseer"
      }
    ],
    testimonials: [
      {
        name: "Brother Ibrahim",
        review: "The Quran came alive for me after understanding its deeper meanings",
        rating: 5
      },
      {
        name: "Sister Aisha",
        review: "The teachers connect classical knowledge with modern applications beautifully",
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
              href="/tafseer-assessment" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Free Evaluation
            </Link>
            <Link 
              href="/tafseer-trial" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Sample Lesson
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

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Tafseer Methodology</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {courseData.methodology.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-green-600">
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

      {/* Curriculum Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Curriculum Structure</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courseData.curriculum.map((level, index) => (
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
                  <h4 className="font-semibold">Outcome:</h4>
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
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
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
          <h2 className="text-3xl font-bold mb-6">Discover the Quran's Depths</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Begin your journey to understand Allah's message as never before</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/terms" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
