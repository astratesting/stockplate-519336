import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="how-it-works">
        <SocialProof />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="contact">
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
