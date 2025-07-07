import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'This course completely transformed my life. I went from 78kg to 72kg with visible abs and gained incredible confidence. The mindset training was game-changing.',
      rating: 5,
      transformation: 'Lost 6kg, Built Lean Muscle'
    },
    {
      name: 'Rajesh Patel',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As a busy entrepreneur, I needed something efficient. This program gave me the tools to stay fit while running my business. Best investment I ever made.',
      rating: 5,
      transformation: 'Gained 8kg Muscle'
    },
    {
      name: 'Vikram Singh',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The comprehensive approach to fitness and lifestyle is what sets this apart. I not only got in the best shape of my life but also developed unshakeable discipline.',
      rating: 5,
      transformation: 'Complete Body Transformation'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Real Men, <span className="text-gold">Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of men who have transformed their bodies and lives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-black/50 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-gold/20 -translate-x-2 -translate-y-2" />
                <p className="text-gray-300 leading-relaxed italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gold/20">
                <span className="text-gold text-sm font-medium">
                  {testimonial.transformation}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-xl border border-gold/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gold/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">1000+</div>
              <div className="text-gray-400">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-gold/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">95%</div>
              <div className="text-gray-400">Complete Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;