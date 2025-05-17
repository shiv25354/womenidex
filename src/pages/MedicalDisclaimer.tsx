
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import ScrollToTop from '@/components/ScrollToTop';

const MedicalDisclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Medical Disclaimer</h1>
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Not Medical Advice</h2>
              <p className="mb-4">
                The information provided on Women's BMI Guide website, including but not limited to text, graphics, images, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">BMI Calculator and Tables</h2>
              <p className="mb-4">
                The BMI calculator and tables provided on this website are general screening tools and are not designed to provide a medical diagnosis or specific health recommendations for individuals. BMI has known limitations and may not be accurate for all body types, ages, or ethnic groups.
              </p>
              <p>
                Results from our BMI calculator should be discussed with a healthcare professional who can consider your complete health profile, including other measurements, medical history, and individual circumstances.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">No Doctor-Patient Relationship</h2>
              <p>
                Use of this website does not establish a doctor-patient relationship. The information provided is not meant to replace consultation with healthcare professionals. Users should not make medical decisions or start/stop treatments based solely on information found on this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Emergency Situations</h2>
              <p>
                If you think you may have a medical emergency, call your doctor or emergency services immediately. We do not recommend any specific tests, physicians, products, procedures, or opinions, and reliance on any information provided by us is solely at your own risk.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links</h2>
              <p>
                This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
              <p>
                The information on our website is provided with the understanding that we are not rendering medical, health, or any other kind of personal professional services or advice. Users should consult qualified health professionals before making any health-related decisions based on the information provided.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Women's BMI Guide, its owners, employees, or affiliates be liable for any damages (including, without limitation, injury or damages for personal injury, pain and suffering, emotional distress, or loss of income) resulting from the use of or inability to use the information, materials, or functions on the website, even if we have been advised of the possibility of such damages.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MedicalDisclaimer;
