export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      name: "Sheikh Abdullah Khan",
      qualification: "PhD in Islamic Studies, Al-Azhar University",
      specialization: "Quran Recitation & Tajweed",
      experience: "15+ years teaching experience",
      teachingStyle: "Focuses on proper Makharij and Sifaat of letters",
      languages: "Arabic, English, Urdu",
      achievements: [
        "Ijazah in Hafs 'an Asim",
        "Former Imam at Masjid Al-Haram",
        "Authored 3 books on Tajweed"
      ],
      image: "/images/teacher1.jpg"
    },
    {
      id: 2,
      name: "Ustad Ahmed",
      qualification: "Masters in Quranic Sciences, International Islamic University",
      specialization: "Quran Memorization (Hifz)",
      experience: "12 years specializing in children's Hifz programs",
      teachingStyle: "Develops personalized memorization plans",
      languages: "Arabic, English, French",
      achievements: [
        "Memorized Quran at age 14",
        "Certified in Hifz methodologies",
        "85% student retention rate"
      ],
      image: "/images/teacher2.jpg"
    },
    {
      id: 3,
      name: "Sheikh Omar Farooq",
      qualification: "Ijaza in 10 Qira'at, Certified Qari",
      specialization: "Advanced Tajweed & Qira'at",
      experience: "20 years teaching advanced recitation",
      teachingStyle: "Specializes in Warsh and Qalun recitations",
      languages: "Arabic, English, Malay",
      achievements: [
        "International Quran competition judge",
        "Teacher of 50+ certified Huffaz",
        "Lead reciter at international conferences"
      ],
      image: "/images/teacher3.jpg"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-green-800">Meet Our Certified Instructors</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Image would go here */}
                <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Teacher Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1 text-green-700">{teacher.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{teacher.qualification}</p>
                <p className="text-green-600 font-medium mb-3">{teacher.specialization}</p>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-medium">Experience:</span> {teacher.experience}</p>
                  <p><span className="font-medium">Languages:</span> {teacher.languages}</p>
                  <div>
                    <p className="font-medium mb-1">Notable Achievements:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {teacher.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
