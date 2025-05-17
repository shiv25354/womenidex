
import React from 'react';
import ContentSection from '@/components/ContentSection';
import BmiCalculator from '@/components/BmiCalculator';
import { ShieldAlert } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

const ProblemSection = () => {
  return (
    <ContentSection id="problem" title="Why BMI Matters for Women's Health" className="bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Many women struggle with understanding their weight status</strong> and what it means for their overall health. Generic weight charts don't account for important factors specific to women's bodies.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Traditional BMI calculations often fail to consider female-specific factors like:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
              <span>Hormonal changes throughout life stages</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
              <span>Different body composition compared to men</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
              <span>Post-pregnancy body changes</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
              <span>Menopause and its effects on weight distribution</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <BmiCalculator />
        </div>
      </div>
      
      {/* Mobile Leaderboard Banner */}
      <div className="mt-8 md:hidden flex justify-center">
        <AdBanner size="mobile-leaderboard" />
      </div>
    </ContentSection>
  );
};

export default ProblemSection;
