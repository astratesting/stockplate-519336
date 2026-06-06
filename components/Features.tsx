'use client';

import {
  BarChart3,
  Package,
  AlertTriangle,
  Smartphone,
  Zap,
  Clock,
  TrendingDown,
  ChefHat,
  Receipt,
  Users
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Stock Tracking',
    description: 'Know exactly what you have on hand at any moment. Our intuitive dashboard gives you instant visibility into inventory levels across all storage locations.',
    color: 'bg-brand-500',
    iconColor: 'text-brand-600',
    bgColor: 'bg-brand-50',
  },
  {
    icon: AlertTriangle,
    title: 'Smart Low-Stock Alerts',
    description: 'Never run out of key ingredients during dinner service. Get notified when items hit your custom reorder points, so you can restock before it becomes a problem.',
    color: 'bg-accent-500',
    iconColor: 'text-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    icon: TrendingDown,
    title: 'Waste Reduction Analytics',
    description: 'Identify what is going to waste and why. Track spoilage, over-portioning, and theft with detailed reports that help you cut costs where it matters most.',
    color: 'bg-brand-500',
    iconColor: 'text-brand-600',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Clock,
    title: 'Rapid Counting Tools',
    description: 'Slash inventory counting time by 70%. Our mobile-first counting interface with barcode scanning and voice input gets you off the clipboard and back to the kitchen.',
    color: 'bg-accent-500',
    iconColor: 'text-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    icon: Receipt,
    title: 'Supplier Integration',
    description: 'Connect directly with your suppliers. Import invoices automatically, track price changes, and manage vendor relationships from one simple interface.',
    color: 'bg-brand-500',
    iconColor: 'text-brand-600',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Zap,
    title: 'Focused, Not Bloated',
    description: 'Unlike competitors that force you into expensive all-in-one suites, StockPlate does one thing exceptionally well: inventory. No fluff, just results.',
    color: 'bg-accent-500',
    iconColor: 'text-accent-600',
    bgColor: 'bg-accent-50',
  },
];

const painPoints = [
  {
    stat: '3-10%',
    label: 'of revenue lost monthly',
    description: 'to poor inventory management',
  },
  {
    stat: '40%',
    label: 'of food waste',
    description: 'comes from over-ordering spoilage',
  },
  {
    stat: '15hrs+',
    label: 'wasted weekly',
    description: 'on manual inventory counts',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-wide section-padding">
        {/* Pain Points Section */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Cost of Poor Inventory Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Independent restaurants face unique challenges that big chains solve with expensive enterprise software. We built StockPlate to level the playing field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl lg:text-6xl font-bold text-brand-600 mb-2">
                  {point.stat}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {point.label}
                </div>
                <div className="text-gray-600">
                  {point.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-brand-700 uppercase bg-brand-100 rounded-full">
              Features
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built tools that solve the real problems keeping restaurant owners up at night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 ${feature.bgColor} rounded-xl`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-800 rounded-3xl p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Simple Enough for Your Busiest Shift
              </h2>
              <p className="text-lg text-brand-100 max-w-2xl mx-auto">
                Get up and running in minutes, not weeks. StockPlate is designed to work the way restaurants actually operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: '01',
                  title: 'Set Up Your Kitchen',
                  description: 'Add your ingredients, storage locations, and suppliers. Import from spreadsheets or start fresh — we make migration painless.',
                  icon: Package,
                },
                {
                  step: '02',
                  title: 'Count with Confidence',
                  description: 'Use our mobile app to count inventory in half the time. Scan barcodes, take photos, and sync everything instantly.',
                  icon: Smartphone,
                },
                {
                  step: '03',
                  title: 'Act on Insights',
                  description: 'Get weekly reports showing exactly where money is being lost and what changes will have the biggest impact on your bottom line.',
                  icon: BarChart3,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <item.icon className="w-8 h-8 text-accent-400" />
                  </div>
                  <div className="text-4xl font-bold text-accent-400/30 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
