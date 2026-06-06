'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle, Send } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <span className="text-sm font-medium text-brand-100">
              Limited early access spots available
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Stop Losing
            <span className="text-accent-400 block">Profit to Waste?</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-100 mb-4 max-w-2xl mx-auto">
            Join hundreds of independent restaurants using StockPlate to protect their margins.
          </p>

          <p className="text-base text-brand-200 mb-10 max-w-xl mx-auto">
            Early access members receive <span className="text-accent-400 font-semibold">30 days free</span>, plus a personal onboarding call with our restaurant success team.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                  className="btn-primary whitespace-nowrap px-8 py-4 text-lg"
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
                      Get Early Access
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </div>
              <p className="mt-4 text-sm text-brand-300">
                No credit card required. Cancel anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent-500 rounded-full">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Welcome to StockPlate!</h3>
              <p className="text-brand-100 mb-6">
                Check your inbox for next steps. We&apos;ll reach out within 24 hours to schedule your onboarding call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-brand-900 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Open Email App
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Slack Community
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
