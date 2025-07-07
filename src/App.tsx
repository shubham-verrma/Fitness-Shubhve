import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Coach from './components/Coach';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Coach />
      <Features />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;