
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bmi-light-purple py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Body Mass Index (BMI) Table for Women
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Understand your weight status, discover what it means for your health, and get personalized insights
          </p>
          <Button size="lg" className="bg-bmi-purple hover:bg-bmi-dark-purple">
            Calculate Your BMI <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      
      {/* Leaderboard Banner after Hero Section */}
      <div className="py-4 flex justify-center w-full overflow-hidden">
        <AdBanner size="leaderboard" />
      </div>
    </>
  );
};

export default HeroSection;
