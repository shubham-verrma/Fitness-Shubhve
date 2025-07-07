import React from 'react';
import { Dumbbell, Brain, Heart, Utensils, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: 'Elite Training Protocols',
      description: 'Advanced workout routines designed to maximize muscle growth, strength, and athletic performance.',
      highlight: 'Build Your Best Physique'
    },
    {
      icon: Brain,
      title: 'Mindset Mastery',
      description: 'Develop unshakeable mental strength, discipline, and the winner\'s mindset that sets champions apart.',
      highlight: 'Mental Toughness'
    },
    {
      icon: Utensils,
      title: 'Nutrition Optimization',
      description: 'Science-based nutrition strategies to fuel your body for maximum performance and recovery.',
      highlight: 'Fuel Your Success'
    },
    {
      icon: Heart,
      title: 'Lifestyle Design',
      description: 'Create a lifestyle that supports your goals while maintaining balance and long-term sustainability.',
      highlight: 'Sustainable Excellence'
    },
    {
      icon: Clock,
      title: 'Time-Efficient Methods',
      description: 'Maximize results with minimal time investment - perfect for busy professionals and entrepreneurs.',
      highlight: 'Efficient & Effective'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'Stay strong and healthy with proper form, recovery protocols, and injury prevention strategies.',
      highlight: 'Long-Term Health'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            What Makes This Course <span className="text-gold">Elite</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six comprehensive pillars that work together to create your complete transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-black/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute top-4 right-4 text-gold/20 font-bold text-sm">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="mb-6">
                <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <div className="text-gold text-sm font-medium mb-2">{feature.highlight}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;