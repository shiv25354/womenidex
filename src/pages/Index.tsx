
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TopPicksSection from '@/components/sections/TopPicksSection';
import FaqSection from '@/components/sections/FaqSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import SideAd from '@/components/sections/SideAd';
import MobileAd from '@/components/sections/MobileAd';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        
        {/* Wide Skyscraper Banner (side ad) for desktop */}
        <SideAd />
        
        <TopPicksSection />
        <FaqSection />
        
        {/* Mobile Banner Ad for small screens */}
        <MobileAd />
        
        <TestimonialSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
