import React from 'react';
import { Target, Zap, Trophy, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="course" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Why This Course Changes <span className="text-gold">Everything</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This isn't just another fitness program. It's a complete transformation system that addresses your body, mind, and lifestyle to create the elite version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-8 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-3 w-fit mb-6">
              <Target className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Targeted Approach</h3>
            <p className="text-gray-300">
              Specifically designed for men who want to build muscle, lose fat, and develop an unshakeable mindset.
            </p>
          </div>

          <div className="group p-8 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-3 w-fit mb-6">
              <Zap className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Fast Results</h3>
            <p className="text-gray-300">
              See visible changes in just 4 weeks with our scientifically-backed training and nutrition protocols.
            </p>
          </div>

          <div className="group p-8 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-3 w-fit mb-6">
              <Trophy className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Proven System</h3>
            <p className="text-gray-300">
              Battle-tested methods that have helped thousands of men achieve their best physique and mindset.
            </p>
          </div>

          <div className="group p-8 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-r from-gold to-yellow-400 rounded-lg p-3 w-fit mb-6">
              <Users className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Community</h3>
            <p className="text-gray-300">
              Join an exclusive community of like-minded men all working towards becoming the best version of themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;