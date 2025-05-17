
import React from 'react';
import ContentSection from '@/components/ContentSection';
import AdBanner from '@/components/AdBanner';

const TestimonialSection = () => {
  return (
    <ContentSection id="testimonials" title="What Women Are Saying" className="bg-white">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="italic text-gray-600 mb-4">"This BMI guide helped me understand why traditional BMI measurements weren't giving me the full picture. The alternative measurement methods were eye-opening!"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">SL</div>
            <div>
              <p className="font-medium">Sarah L.</p>
              <p className="text-sm text-gray-500">Age 42, Fitness Coach</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="italic text-gray-600 mb-4">"After pregnancy, I was worried about my weight. This guide helped me understand how to interpret my BMI during the postpartum period and set realistic goals."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">JT</div>
            <div>
              <p className="font-medium">Jennifer T.</p>
              <p className="text-sm text-gray-500">Age 35, New Mom</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="italic text-gray-600 mb-4">"As a woman over 60, I appreciated the insights about how BMI interpretation changes with age. The waist-to-hip ratio measurement was much more useful for me."</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">MM</div>
            <div>
              <p className="font-medium">Margaret M.</p>
              <p className="text-sm text-gray-500">Age 64, Retired Teacher</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final Banner Ad */}
      <div className="mt-10 flex justify-center w-full overflow-hidden">
        <AdBanner size="leaderboard" className="hidden md:flex" />
        <AdBanner size="medium-rectangle" className="md:hidden" />
      </div>
    </ContentSection>
  );
};

export default TestimonialSection;
