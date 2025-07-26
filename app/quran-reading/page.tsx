import Link from 'next/link';
import { 
  FaQuran, 
  FaUserTie, 
  FaStar, 
  FaCheckCircle, 
  FaClock,
  FaBookOpen,
  FaMicrophone
} from 'react-icons/fa';
import { FaClapperboard } from 'react-icons/fa6';

export default function QuranReadingPage() {
  const courseData = {
    title: "Quran Reading Course",
    subtitle: "Learn to Read the Holy Quran with Proper Tajweed",
    description: "Master the correct pronunciation and recitation of the Quran under the guidance of certified Qaris",
    features: [
      {
        icon: <FaQuran className="text-green-600 text-2xl" />,
        title: "Arabic Alphabet",
        description: "Learn proper articulation of each letter"
      },
      {
        icon: <FaClapperboard className="text-green-600 text-2xl" />,
        title: "Tajweed Rules",
        description: "Master the rules of Quranic recitation"
      },
      {
        icon: <FaMicrophone className="text-green-600 text-2xl" />,
        title: "Pronunciation",
        description: "Perfect your Makhaarij (articulation points)"
      },
      {
        icon: <FaBookOpen className="text-green-600 text-2xl" />,
        title: "Fluency",
        description: "Develop smooth and beautiful recitation"
      }
    ],
    levels: [
      {
        name: "Beginner",
        duration: "3 Months",
        focus: [
          "Arabic letters recognition",
          "Basic harakat (vowels)",
          "Simple word formation"
        ],
        outcome: "Read basic Quranic words"
      },
      {
        name: "Intermediate",
        duration: "6 Months",
        focus: [
          "Tajweed rules application",
          "Long vowels and tanween",
          "Stopping rules"
        ],
        outcome: "Read Quran with basic Tajweed"
      },
      {
        name: "Advanced",
        duration: "9 Months",
        focus: [
          "Advanced Tajweed rules",
          "Proper rhythm and melody",
          "Complete surahs recitation"
        ],
        outcome: "Recite Quran fluently with Tajweed"
      }
    ],
    instructors: [
      {
        name: "Qari Abdullah",
        qualification: "Ijazah in Hafs recitation",
        experience: "15+ years teaching experience"
      },
      {
        name: "Qariya Fatima",
        qualification: "Certified Tajweed instructor",
        experience: "Specialist in children's Quran education"
      }
    ],
    testimonials: [
      {
        name: "Parent of Ahmed",
        review: "My child went from not recognizing letters to reading Surah Al-Fatihah beautifully",
        rating: 5
      },
      {
        name: "Sister Aisha",
        review: "The systematic approach helped me overcome my pronunciation struggles",
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
              Admission Open
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Trial Lesson
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
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Meet Your Teachers</h2>
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
              <p className="text-gray-600">{instructor.experience}</p>
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
          <h2 className="text-3xl font-bold mb-6">Begin Your Quran Reading Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Start learning to read the Quran correctly with our certified instructors</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quran-reading-enroll" 
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
