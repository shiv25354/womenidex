
import React from 'react';
import ContentSection from '@/components/ContentSection';
import BmiTable from '@/components/BmiTable';
import { Ruler, ActivitySquare, Trophy } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

const SolutionSection = () => {
  return (
    <ContentSection id="solution" title="Complete Women's BMI Guide" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Our BMI Guide Provides:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Ruler className="text-bmi-purple mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Accurate Measurement</p>
                <p className="text-gray-600">BMI categories specifically optimized for women's health concerns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ActivitySquare className="text-bmi-purple mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Health Risk Assessment</p>
                <p className="text-gray-600">Understanding what your BMI means for your specific health situation</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Trophy className="text-bmi-purple mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Alternative Measurement Methods</p>
                <p className="text-gray-600">Beyond BMI: other ways to assess your body composition</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <BmiTable />
        </div>
      </div>

      {/* Medium Rectangle Banner */}
      <div className="mt-8 flex justify-center">
        <AdBanner size="medium-rectangle" />
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6 text-center">BMI vs Alternative Methods</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Convenience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">BMI</td>
                <td className="px-6 py-4 whitespace-nowrap">Moderate</td>
                <td className="px-6 py-4 whitespace-nowrap">High</td>
                <td className="px-6 py-4 whitespace-nowrap">Free</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Waist Circumference</td>
                <td className="px-6 py-4 whitespace-nowrap">Good</td>
                <td className="px-6 py-4 whitespace-nowrap">High</td>
                <td className="px-6 py-4 whitespace-nowrap">Free</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Waist-to-Hip Ratio</td>
                <td className="px-6 py-4 whitespace-nowrap">Very Good</td>
                <td className="px-6 py-4 whitespace-nowrap">High</td>
                <td className="px-6 py-4 whitespace-nowrap">Free</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">DXA Scan</td>
                <td className="px-6 py-4 whitespace-nowrap">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap">Low</td>
                <td className="px-6 py-4 whitespace-nowrap">High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentSection>
  );
};

export default SolutionSection;
