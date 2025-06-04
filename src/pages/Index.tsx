
import React from 'react';
import Hero from '../components/Hero';
import ScrollingLogos from '../components/ScrollingLogos';
import StartupShowcase from '../components/StartupShowcase';
import WhyPrajvalan from '../components/WhyPrajvalan';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollingLogos />
      <StartupShowcase />
      <WhyPrajvalan />
      <SuccessStories />
      <FAQ />
    </div>
  );
};

export default Index;
