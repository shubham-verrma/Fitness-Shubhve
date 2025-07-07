import React from 'react';
import { Check, Clock, Shield, Star } from 'lucide-react';

const Pricing = () => {
  const features = [
    '50+ HD Video Lessons',
    '12-Week Structured Program',
    'Downloadable Workout Plans',
    'Nutrition Guide & Meal Plans',
    'Mindset Training Modules',
    'Progress Tracking Tools',
    'Mobile App Access',
    'Community Support',
    'Lifetime Updates',
    '30-Day Money Back Guarantee'
  ];

  const bonuses = [
    {
      title: 'Elite Mindset Masterclass',
      value: '₹1,499',
      description: 'Advanced psychology for peak performance'
    },
    {
      title: 'Supplement Guide',
      value: '₹999',
      description: 'Complete supplementation protocols'
    },
    {
      title: 'Recovery Optimization',
      value: '₹799',
      description: 'Sleep, stress, and recovery mastery'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Transform Your Life <span className="text-gold">Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant access to the complete transformation system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-gold/50 p-8 md:p-12 relative overflow-hidden">
            {/* Premium badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-2 rounded-bl-2xl font-bold">
              PREMIUM COURSE
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold font-playfair mb-4">
                    Elite Men's Fitness & Lifestyle Mastery
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Complete transformation system for ambitious men
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="text-gold font-medium">FREE BONUSES INCLUDED:</div>
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gold/10 rounded-lg border border-gold/20">
                      <div>
                        <div className="font-medium text-white">{bonus.title}</div>
                        <div className="text-sm text-gray-400">{bonus.description}</div>
                      </div>
                      <div className="text-gold font-bold">{bonus.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="mb-8">
                  <div className="text-gray-400 line-through text-2xl mb-2">₹4,999</div>
                  <div className="text-6xl font-bold font-playfair text-gold mb-2">₹2,499</div>
                  <div className="text-gold font-medium">50% Off - Limited Time</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-yellow-400">
                    <Clock className="h-5 w-5" />
                    <span>Offer expires in 48 hours</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <Shield className="h-5 w-5" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl hover:from-yellow-400 hover:to-gold transition-all duration-200 transform hover:scale-105 mb-6">
                  Enroll Now - Start Today
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Trusted by 1000+ men worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Wait? Your Transformation Starts Now</h3>
            <p className="text-gray-300 text-lg mb-8">
              Every day you delay is another day you could be building the body and mindset you deserve. 
              Join the elite men who refused to settle for average.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gold/20">
                <div className="text-2xl font-bold text-gold mb-2">Instant Access</div>
                <p className="text-gray-400">Start watching immediately after purchase</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gold/20">
                <div className="text-2xl font-bold text-gold mb-2">Lifetime Access</div>
                <p className="text-gray-400">Keep the course forever, including updates</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gold/20">
                <div className="text-2xl font-bold text-gold mb-2">Risk-Free</div>
                <p className="text-gray-400">30-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;