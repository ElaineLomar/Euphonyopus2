import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MetricsSection from './components/MetricsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <div className="section">
        <AboutSection />
        <ServicesSection />
        <MetricsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;