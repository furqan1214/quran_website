import Link from 'next/link';
import { 
  FaQuran,
  FaMicrophone,
  FaUserGraduate,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaBookOpen,
  FaVolumeUp
} from 'react-icons/fa';
import { FaCakeCandles } from 'react-icons/fa6';

export default function TajweedCoursePage() {
  const courseData = {
    title: "Tajweed Mastery Program",
    subtitle: "Perfect Your Quran Recitation",
    description: "Learn the rules of Tajweed to recite the Holy Quran with proper pronunciation and beautiful melody as taught by the Prophet (PBUH)",
    features: [
      {
        icon: <FaCakeCandles className="text-green-600 text-2xl" />,
        title: "Makharij",
        description: "Correct articulation points of letters"
      },
      {
        icon: <FaVolumeUp className="text-green-600 text-2xl" />,
        title: "Sifat",
        description: "Characteristics of Arabic letters"
      },
      {
        icon: <FaMicrophone className="text-green-600 text-2xl" />,
        title: "Ahkam",
        description: "Rules of Noon Sakinah & Tanween"
      },
      {
        icon: <FaBookOpen className="text-green-600 text-2xl" />,
        title: "Practical Recitation",
        description: "Apply rules in Quranic verses"
      }
    ],
    levels: [
      {
        name: "Foundation",
        duration: "3 Months",
        focus: [
          "Basic letter pronunciation",
          "Short vowel rules",
          "Ghunnah basics",
          "Qalqalah introduction"
        ],
        outcome: "Read with basic Tajweed accuracy"
      },
      {
        name: "Intermediate",
        duration: "6 Months",
        focus: [
          "Noon and Meem rules",
          "Madd types",
          "Heavy/light letters",
          "Stopping rules"
        ],
        outcome: "Apply intermediate Tajweed rules"
      },
      {
        name: "Advanced",
        duration: "9 Months",
        focus: [
          "Advanced Madd applications",
          "Idgham with/without ghunnah",
          "Ikhfa and Iqlab mastery",
          "Melodic recitation (Murattal)"
        ],
        outcome: "Recite with full Tajweed precision"
      }
    ],
    instructors: [
      {
        name: "Qari Muhammad",
        qualification: "Ijazah in Hafs recitation",
        specialization: "Tajweed Science"
      },
      {
        name: "Qariya Aisha",
        qualification: "Certified Tajweed instructor",
        specialization: "Women's Tajweed education"
      }
    ],
    testimonials: [
      {
        name: "Brother Ibrahim",
        review: "My recitation transformed completely after learning proper Makharij",
        rating: 5
      },
      {
        name: "Sister Fatima",
        review: "The systematic approach made complex rules easy to understand",
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
              href="/tajweed-assessment" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Free Tajweed Test
            </Link>
            <Link 
              href="/tajweed-trial" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Trial Lesson
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What You'll Learn</h2>
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
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Structured Learning Path</h2>
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
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Certified Tajweed Teachers</h2>
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
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Student Transformations</h2>
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
          <h2 className="text-3xl font-bold mb-6">Recite Like the Prophet (PBUH)</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Begin your journey to perfect Quranic recitation today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
