'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We were bleeding money on wasted produce every month. Within 6 weeks of using StockPlate, we cut our food waste by 40% and finally have visibility into what's actually sitting in our walk-in.",
    author: "Marcus Chen",
    role: "Owner, The Golden Spoon",
    location: "Portland, OR",
    avatar: "MC",
  },
  {
    quote: "I was doing inventory on clipboard at midnight every Sunday. Now it takes 20 minutes and I can see exactly which proteins are moving slowly. Worth every penny.",
    author: "Sarah Rodriguez",
    role: "Head Chef, Mesa Verde",
    location: "Austin, TX",
    avatar: "SR",
  },
  {
    quote: "Finally, inventory software that understands small restaurants. No bloated features we'll never use. Just the tools we need to stop throwing money in the trash.",
    author: "David Park",
    role: "Owner, Park's Kitchen",
    location: "Chicago, IL",
    avatar: "DP",
  },
];

const stats = [
  { value: '$2.4M+', label: 'Food costs saved' },
  { value: '180+', label: 'Restaurants trusting StockPlate' },
  { value: '47%', label: 'Average waste reduction' },
  { value: '15hrs', label: 'Saved weekly per location' },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container-wide section-padding">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 lg:mb-28">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-accent-700 uppercase bg-accent-100 rounded-full">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Independent Restaurants
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of restaurants already using StockPlate to protect their profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <span className="text-brand-700 font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Built for restaurants of all sizes
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-lg font-semibold text-gray-600">NRA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <span className="text-lg font-semibold text-gray-600">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <span className="text-lg font-semibold text-gray-600">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-lg font-semibold text-gray-600">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
