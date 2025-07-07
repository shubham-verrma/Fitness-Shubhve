import React from 'react';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold font-playfair text-gold">Elite Fitness</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your body, mindset, and lifestyle with our comprehensive course designed 
              exclusively for ambitious men who demand excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Course</h4>
            <ul className="space-y-3">
              <li><a href="#course" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-gold transition-colors">Features</a></li>
              <li><a href="#curriculum" className="text-gray-300 hover:text-gold transition-colors">Curriculum</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-gold transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-gray-300">support@elitefitness.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Elite Fitness. All rights reserved. | 
            <span className="text-gold hover:text-yellow-400 cursor-pointer"> Privacy Policy</span> | 
            <span className="text-gold hover:text-yellow-400 cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;