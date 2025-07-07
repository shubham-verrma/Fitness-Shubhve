import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';

const Coach = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Trainer',
      description: 'NASM-CPT & Precision Nutrition Certified'
    },
    {
      icon: Users,
      title: '1000+ Clients',
      description: 'Successfully transformed lives across India'
    },
    {
      icon: Target,
      title: '8+ Years',
      description: 'Dedicated to fitness & lifestyle coaching'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always available for your transformation'
    }
  ];

  return (
    <section id="coach" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Meet Your <span className="text-gold">Elite Coach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from someone who has walked the path and transformed thousands of lives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coach Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/ChatGPT Image Jul 3, 2025, 01_04_02 PM.png"
                alt="Shubham Verma - Elite Fitness Coach"
                className="w-full h-[600px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-gold to-yellow-400 text-black p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Coach Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
                Shubham Verma
              </h3>
              <div className="text-gold text-lg font-medium mb-6">
                Elite Fitness & Lifestyle Coach
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over 8 years of dedicated experience in fitness and lifestyle coaching, 
                  Shubham Verma has become one of India's most sought-after transformation specialists. 
                  His unique approach combines scientific training methodologies with practical lifestyle 
                  strategies that work for busy professionals and entrepreneurs.
                </p>
                
                <p>
                  Shubham's philosophy centers on sustainable transformation rather than quick fixes. 
                  He believes that true fitness extends beyond the gym - it's about building mental 
                  resilience, developing disciplined habits, and creating a lifestyle that supports 
                  long-term success in all areas of life.
                </p>
                
                <p>
                  Having personally transformed from an average fitness enthusiast to an elite coach, 
                  Shubham understands the challenges men face in balancing career ambitions with health goals. 
                  His proven system has helped over 1000+ men achieve their best physique while building 
                  unshakeable confidence and mental toughness.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-2">
                      <achievement.icon className="h-4 w-4 text-black" />
                    </div>
                    <div className="text-white font-bold text-sm">{achievement.title}</div>
                  </div>
                  <p className="text-gray-400 text-xs">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://rajivkchawla.exlyapp.com/checkout/c99a5727-bded-4cfa-b614-01351c173c63"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-gold transition-all duration-200 transform hover:scale-105"
              >
                Start Your Transformation with Shubham
              </a>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-2xl border border-gold/20">
            <blockquote className="text-2xl md:text-3xl font-playfair text-white mb-6 italic">
              "Your body is capable of incredible things. Your mind is the only thing holding you back. 
              Let's unlock both together."
            </blockquote>
            <div className="text-gold font-medium text-lg">- Shubham Verma</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;