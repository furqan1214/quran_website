import Link from 'next/link'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '$29',
      duration: 'per month',
      features: [
        '2 classes per week',
        '30 minutes per class',
        'Quran recitation',
        'Basic Tajweed rules',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Standard Plan',
      price: '$49',
      duration: 'per month',
      features: [
        '3 classes per week',
        '45 minutes per class',
        'Quran memorization',
        'Intermediate Tajweed',
        'Weekly progress reports',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Premium Plan',
      price: '$79',
      duration: 'per month',
      features: [
        '5 classes per week',
        '60 minutes per class',
        'Hifz program',
        'Advanced Tajweed',
        'Daily progress tracking',
        '24/7 support',
        'Free learning materials'
      ],
      popular: false
    }
  ]

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Our Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable Quran learning options for students of all levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden ${
                plan.popular ? 'ring-2 ring-green-500 transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-green-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-green-700 mb-2">{plan.name}</h2>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/admission"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Flexible Payment Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Discounts Available</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 10% discount for semester payments</li>
                <li>• 15% discount for family enrollments</li>
                <li>• 20% discount for annual payments</li>
                <li>• Special rates for group classes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Money Back Guarantee</h3>
              <p className="text-gray-600">
                We offer a 7-day money back guarantee if you're not satisfied with our teaching quality. 
                Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faqs"
            className="inline-block text-green-600 hover:text-green-700 font-medium hover:underline"
          >
            Have questions about pricing? Visit our FAQs →
          </Link>
        </div>
      </section>
    </main>
  )
}
