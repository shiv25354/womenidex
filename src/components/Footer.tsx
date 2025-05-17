
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Women's BMI Guide</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive resource dedicated to helping women understand BMI, weight-related health factors, and body composition in a way that's tailored to women's unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/fitslimboots/" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-medium mb-4">Important Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Why BMI Matters</a>
              <a href="#solution" className="text-gray-300 hover:text-white transition-colors">BMI Guide</a>
              <a href="#top-picks" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/medical-disclaimer" className="text-gray-300 hover:text-white transition-colors">Medical Disclaimer</Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:info@womensbmiguide.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} />
                <span>info@womensbmiguide.com</span>
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+1 (800) 555-1234</span>
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to Our Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 text-gray-800 rounded-l-md w-full focus:outline-none" 
                  aria-label="Email for newsletter"
                />
                <button className="bg-bmi-purple hover:bg-bmi-dark-purple px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="bg-white p-2 rounded-md flex items-center">
              <img src="https://cdn.lovable.dev/placeholder.svg" alt="HIPAA Compliant" className="h-10" loading="lazy" />
            </div>
            <div className="bg-white p-2 rounded-md flex items-center">
              <img src="https://cdn.lovable.dev/placeholder.svg" alt="SSL Secured" className="h-10" loading="lazy" />
            </div>
            <div className="bg-white p-2 rounded-md flex items-center">
              <img src="https://cdn.lovable.dev/placeholder.svg" alt="Medical Information Verified" className="h-10" loading="lazy" />
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-400 border-t border-gray-700 pt-6">
          <p>© {currentYear} Women's BMI Guide. For informational purposes only. Not a substitute for professional medical advice.</p>
          <p className="mt-1 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500" aria-hidden="true" /> for women's health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
