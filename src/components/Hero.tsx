import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-gold fill-current" />
            ))}
            <span className="ml-2 text-gold font-medium">4.9/5 Rating</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 leading-tight">
            <span className="text-white">Elite Men's</span>
            <br />
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Fitness & Lifestyle
            </span>
            <br />
            <span className="text-white">Mastery</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your body, mindset, and lifestyle with our comprehensive course designed exclusively for ambitious men who demand excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold font-playfair text-gold mb-2">
              ₹2,499
            </div>
            <div className="text-gray-400 line-through text-lg">₹4,999</div>
            <div className="text-gold font-medium">Limited Time Offer</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#pricing"
            className="group bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-gold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="group border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-black transition-all duration-200 flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Watch Preview</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <div className="text-gray-400">Video Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">12</div>
            <div className="text-gray-400">Weeks Program</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">1000+</div>
            <div className="text-gray-400">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;