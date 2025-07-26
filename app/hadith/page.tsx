import Link from 'next/link';
import { 
  FaBook, 
  FaUserTie, 
  FaHistory, 
  FaStar, 
  FaCheckCircle, 
  FaMosque, 
  FaGraduationCap,
  FaClock // Added missing import
} from 'react-icons/fa';

export default function HadithCoursePage() {
  const courseData = {
    title: "Hadith Studies Program",
    subtitle: "Learn the Authentic Teachings of Prophet Muhammad (PBUH)",
    description: "Our structured Hadith course covers the major collections with proper understanding of chains of narration and textual meanings",
    features: [
      {
        icon: <FaBook className="text-green-600 text-2xl" />,
        title: "Authentic Sources",
        description: "Study from Sahih Bukhari, Muslim, and other authentic collections"
      },
      {
        icon: <FaUserTie className="text-green-600 text-2xl" />,
        title: "Scholarly Guidance",
        description: "Learn from certified Hadith scholars with Ijazah"
      },
      {
        icon: <FaHistory className="text-green-600 text-2xl" />,
        title: "Historical Context",
        description: "Understand the Asbab al-Wurud (reasons for revelation)"
      },
      {
        icon: <FaGraduationCap className="text-green-600 text-2xl" />,
        title: "Practical Application",
        description: "Learn how to implement Sunnah in daily life"
      }
    ],
    curriculum: [
      {
        level: "Foundation",
        books: ["40 Hadith Nawawi", "Riyad us-Saliheen"],
        focus: "Basic terminology and famous short Hadith",
        duration: "3 Months"
      },
      {
        level: "Intermediate",
        books: ["Sahih Bukhari (Selected)", "Sahih Muslim (Selected)"],
        focus: "Science of Hadith and chain analysis",
        duration: "6 Months"
      },
      {
        level: "Advanced",
        books: ["Sunan Abu Dawud", "Jami' at-Tirmidhi"],
        focus: "Fiqh from Hadith and comparative study",
        duration: "12 Months"
      }
    ],
    instructors: [
      {
        name: "Shaykh Abdullah",
        qualification: "Ijazah in Sahihain",
        specialization: "Hadith Sciences"
      },
      {
        name: "Ustadha Aisha",
        qualification: "M.A. in Hadith Literature",
        specialization: "Women in Hadith"
      }
    ],
    testimonials: [
      {
        name: "Brother Ibrahim",
        review: "The way Hadith are explained with context and wisdom transformed my understanding of Sunnah",
        rating: 5
      },
      {
        name: "Sister Fatima",
        review: "Finally found a course that makes Hadith accessible with practical life lessons",
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

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Structured Curriculum</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courseData.curriculum.map((level, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-green-700 mb-4">{level.level} Level</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Texts Covered:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {level.books.map((book, i) => (
                        <li key={i}>{book}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Focus Areas:</h4>
                    <p className="text-gray-600">{level.focus}</p>
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
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Meet Your Instructors</h2>
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
          <h2 className="text-3xl font-bold mb-6">Deepen Your Understanding of Sunnah</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our Hadith program and connect with the authentic teachings of Prophet Muhammad (PBUH)</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hadith-enroll" 
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              href="/admission" 
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition-colors"
            >
              Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
