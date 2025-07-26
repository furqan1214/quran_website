import Link from 'next/link';
import { FaQuran, FaUserGraduate, FaClock, FaCheckCircle, FaStar, FaChalkboardTeacher } from 'react-icons/fa';

export default function NoraniQaidaPage() {
  const courseData = {
    title: "Noorani Qaida Mastery Program",
    description: "Build a strong foundation for Quranic reading with our scientifically designed Noorani Qaida course",
    bannerImage: "/images/qaida-banner.jpg",
    features: [
      { icon: <FaQuran className="text-green-600" />, text: "Step-by-step Arabic letter recognition" },
      { icon: <FaChalkboardTeacher className="text-green-600" />, text: "Native Arabic instructors" },
      { icon: <FaUserGraduate className="text-green-600" />, text: "Personalized learning pace" },
      { icon: <FaCheckCircle className="text-green-600" />, text: "Interactive exercises and drills" }
    ],
    curriculum: [
      {
        level: "Foundation Level",
        duration: "4 Weeks",
        topics: [
          "Arabic alphabet with proper articulation",
          "Harakat (Fatha, Kasra, Damma)",
          "Letter recognition exercises",
          "Basic pronunciation rules"
        ]
      },
      {
        level: "Intermediate Level",
        duration: "6 Weeks",
        topics: [
          "Letter combinations (Huroof Murakkabat)",
          "Tanween and Madd letters",
          "Basic stopping rules",
          "Word formation practice"
        ]
      },
      {
        level: "Advanced Level",
        duration: "8 Weeks",
        topics: [
          "Complete word formation",
          "Reading practice with Tajweed rules",
          "Transition to Quranic verses",
          "Fluency building exercises"
        ]
      }
    ],
    instructors: [
      {
        name: "Shaykh Abdullah",
        qualification: "Ijazah in Qira'at",
        experience: "15+ years teaching experience"
      },
      {
        name: "Ustadha Aisha",
        qualification: "M.A. in Islamic Studies",
        experience: "Specialist in children's education"
      }
    ],
    testimonials: [
      {
        name: "Parent of Ahmed",
        review: "My son went from not recognizing letters to reading small surahs in just 3 months!",
        rating: 5
      },
      {
        name: "Sister Fatima",
        review: "The structured approach helped me overcome my pronunciation struggles as an adult learner.",
        rating: 5
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">{courseData.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enroll" className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition">
              Enroll Now
            </Link>
            <Link href="/free-trial" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition">
              Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Our Noorani Qaida Course?</h2>
          <p className="text-gray-600">Developed by Quranic scholars, our program combines traditional teaching methods with modern educational techniques</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4 flex justify-center">{feature.icon}</div>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Structured Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courseData.curriculum.map((level, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-6 hover:border-green-400 transition">
                <h3 className="text-xl font-bold text-green-700 mb-4">{level.level}</h3>
                <ul className="space-y-3 mb-6">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2 text-green-600" />
                  <span>{level.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="container mx-auto px-4 py-16">
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
              <p className="text-gray-600">{instructor.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Student Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courseData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
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

      {/* CTA */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Quranic Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands who have learned to read Quran properly through our Noorani Qaida program</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enroll" className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition">
              Enroll Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-800 transition">
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
