
import React from 'react';
import ContentSection from '@/components/ContentSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

const FaqSection = () => {
  return (
    <ContentSection id="faq" title="Frequently Asked Questions" className="bg-gray-50">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>What is considered a healthy BMI range for women?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A healthy BMI range for adults, including women, is generally considered to be between 18.5 and 24.9. However, it's important to remember that BMI is just one indicator of health and should be considered alongside other factors.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>Does the ideal BMI for women change with age?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  BMI ranges themselves do not typically change with age in standard classifications for adults 20 and older. However, body composition (muscle, fat, bone) changes with age and menopause, which affects how accurate BMI is as an indicator of health or body fat percentage.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>How accurate is BMI for assessing a woman's health?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  BMI is a useful screening tool and correlates with body fat at a population level, but it is not always accurate for individuals. It doesn't distinguish between fat, muscle, and bone, and its accuracy can be limited by factors like muscle mass, age, body fat distribution, and menopausal status.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>How does pregnancy affect BMI and weight recommendations?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Weight gain recommendations during a single pregnancy are based on your pre-pregnancy BMI. It's important to consult with a healthcare professional to determine healthy weight gain goals during pregnancy based on your specific needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>What are some alternatives to BMI for women?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Alternative methods include waist circumference measurement (should be less than 35 inches or 88 cm for women), waist-to-hip ratio (ideally 0.85 or below for women), body fat percentage testing, and more advanced clinical methods like DXA scans. These can provide a more comprehensive picture of health than BMI alone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        {/* Large Skyscraper Banner on the side */}
        <div className="hidden lg:flex justify-center">
          <AdBanner size="large-skyscraper" />
        </div>
      </div>
      
      {/* Hidden FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is considered a healthy BMI range for women?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A healthy BMI range for adults, including women, is generally considered to be between 18.5 and 24.9. However, it's important to remember that BMI is just one indicator of health and should be considered alongside other factors."
              }
            },
            {
              "@type": "Question",
              "name": "Does the ideal BMI for women change with age?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BMI ranges themselves do not typically change with age in standard classifications for adults 20 and older. However, body composition (muscle, fat, bone) changes with age and menopause, which affects how accurate BMI is as an indicator of health or body fat percentage."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is BMI for assessing a woman's health?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BMI is a useful screening tool and correlates with body fat at a population level, but it is not always accurate for individuals. It doesn't distinguish between fat, muscle, and bone, and its accuracy can be limited by factors like muscle mass, age, body fat distribution, and menopausal status."
              }
            },
            {
              "@type": "Question",
              "name": "How does pregnancy affect BMI and weight recommendations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Weight gain recommendations during a single pregnancy are based on your pre-pregnancy BMI. It's important to consult with a healthcare professional to determine healthy weight gain goals during pregnancy based on your specific needs."
              }
            },
            {
              "@type": "Question",
              "name": "What are some alternatives to BMI for women?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Alternative methods include waist circumference measurement (should be less than 35 inches or 88 cm for women), waist-to-hip ratio (ideally 0.85 or below for women), body fat percentage testing, and more advanced clinical methods like DXA scans."
              }
            }
          ]
        }
      `}} />
    </ContentSection>
  );
};

export default FaqSection;
