import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Course', href: '#course' },
    { name: 'Coach', href: '#coach' },
    { name: 'Features', href: '#features' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-gold" />
            <span className="text-xl font-bold font-playfair text-gold">Elite Fitness</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://rajivkchawla.exlyapp.com/checkout/c99a5727-bded-4cfa-b614-01351c173c63"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-400 hover:to-gold transition-all duration-200 transform hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-b border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://rajivkchawla.exlyapp.com/checkout/c99a5727-bded-4cfa-b614-01351c173c63"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 mt-4 bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;