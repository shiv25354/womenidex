
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-bmi-purple text-white py-4 sticky top-0 z-10 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="/" aria-label="Women's BMI Guide Home">
            <h1 className="text-xl md:text-2xl font-semibold">
              Women's BMI Guide
            </h1>
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-bmi-dark-purple"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex space-x-6">
              <li><a href="#problem" className="hover:text-bmi-light-purple transition-colors">Why BMI Matters</a></li>
              <li><a href="#solution" className="hover:text-bmi-light-purple transition-colors">BMI Guide</a></li>
              <li><a href="#top-picks" className="hover:text-bmi-light-purple transition-colors">Resources</a></li>
              <li><a href="#faq" className="hover:text-bmi-light-purple transition-colors">FAQs</a></li>
              <li><a href="#testimonials" className="hover:text-bmi-light-purple transition-colors">Testimonials</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2" aria-label="Mobile navigation">
            <ul className="space-y-3">
              <li><a href="#problem" className="block py-1 hover:text-bmi-light-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Why BMI Matters</a></li>
              <li><a href="#solution" className="block py-1 hover:text-bmi-light-purple transition-colors" onClick={() => setIsMenuOpen(false)}>BMI Guide</a></li>
              <li><a href="#top-picks" className="block py-1 hover:text-bmi-light-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Resources</a></li>
              <li><a href="#faq" className="block py-1 hover:text-bmi-light-purple transition-colors" onClick={() => setIsMenuOpen(false)}>FAQs</a></li>
              <li><a href="#testimonials" className="block py-1 hover:text-bmi-light-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
