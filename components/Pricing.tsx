'use client';

import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$79',
    period: '/month',
    description: 'Perfect for single-location restaurants just getting started with digital inventory.',
    features: [
      'Up to 500 SKUs',
      '2 user accounts',
      'Mobile app access',
      'Basic reporting',
      'Email support',
      'Weekly stock alerts',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/month',
    description: 'For growing restaurants ready to take control of their food costs.',
    features: [
      'Unlimited SKUs',
      '10 user accounts',
      'Mobile app access',
      'Advanced analytics',
      'Priority support',
      'Real-time alerts',
      'Supplier integration',
      'Waste tracking',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For multi-location groups with complex needs and dedicated support.',
    features: [
      'Everything in Growth',
      'Unlimited locations',
      'Unlimited users',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Onboarding & training',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for Starter and Growth plans. Enterprise customers receive custom onboarding included in their package.',
  },
  {
    question: 'How does the free trial work?',
    answer: 'Early access members get 30 days free with full feature access. No credit card required to start.',
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-wide section-padding">
        {/* Pricing Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-brand-700 uppercase bg-brand-100 rounded-full">
            Simple Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            No Hidden Fees, No Surprises
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pick a plan that fits your restaurant. All plans include our core inventory features with no long-term contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-brand-900 text-white border-2 border-brand-600 shadow-xl scale-105 z-10'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-accent-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-brand-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.popular ? 'text-brand-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent-400' : 'text-brand-600'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-brand-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-accent-500 hover:bg-accent-600 text-white'
                    : 'bg-brand-600 hover:bg-brand-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mb-20">
          <p className="inline-flex items-center gap-2 text-gray-600 bg-gray-100 px-6 py-3 rounded-full">
            <Check className="w-5 h-5 text-brand-600" />
            <span className="font-medium">30-day money-back guarantee</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm">No questions asked</span>
          </p>
        </div>

        {/* Quick FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
