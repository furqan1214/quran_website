export default function AboutPage() {
  return (
    <main className="min-h-screen py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">About Our Quran Academy</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
            <p className="text-gray-700">
              To provide authentic Quranic education with qualified teachers, helping students of all ages 
              connect with the Holy Quran through proper recitation, memorization, and understanding.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Our History</h2>
            <p className="text-gray-700">
              Founded in 2010, our academy has grown from a small local initiative to an internationally 
              recognized online Quran learning platform serving thousands of students worldwide.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Teaching Methodology</h2>
            <p className="text-gray-700">
              We follow a structured curriculum with one-on-one classes, regular assessments, and 
              personalized learning plans for each student.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
