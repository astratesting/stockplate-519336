'use client';

import { useState } from 'react';
import { ArrowRight, ChefHat, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="relative z-10 section-padding py-20 lg:py-32">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              <span className="text-sm font-medium text-brand-100">
                Now accepting early access restaurants
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Stop Letting Inventory Waste
              <span className="text-accent-400 block mt-2">Eat Your Profits</span>
            </h1>

            {/* Value Prop */}
            <p className="text-lg sm:text-xl lg:text-2xl text-brand-100 mb-4 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Independent restaurants lose <span className="text-accent-400 font-semibold">3-10% of revenue</span> every month to poor inventory management.
            </p>

            <p className="text-base sm:text-lg text-brand-200 mb-10 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.15s' }}>
              StockPlate gives you simple, focused tools to track stock, cut waste, and reclaim those lost profits — without the complexity of bloated restaurant suites.
            </p>

            {/* Waitlist Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-5 py-4 text-base text-gray-900 bg-white rounded-lg border-0 focus:ring-2 focus:ring-accent-400 focus:outline-none shadow-lg"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary whitespace-nowrap px-6 py-4 text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Joining...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Join Waitlist
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-brand-300">
                    Be the first to get early access. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-accent-500 rounded-full">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                  <p className="text-brand-200">
                    We&apos;ll be in touch soon with early access details. Thanks for your interest in StockPlate!
                  </p>
                </div>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-brand-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-accent-400" />
                <span>Built for independent restaurants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
