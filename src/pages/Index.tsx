import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StudyDestinations from '@/components/StudyDestinations';
import PricingSection from '@/components/PricingSection';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StudyDestinations />
        <SuccessStories />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
