
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

const Sitemap = () => {
  const mainPages = [
    { title: "Home Page", path: "/" },
    { title: "BMI Table for Women", path: "/body-mass-index-table-for-women" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Medical Disclaimer", path: "/medical-disclaimer" },
    { title: "Sitemap", path: "/sitemap" },
  ];

  const sections = [
    { title: "Why BMI Matters", id: "problem" },
    { title: "Complete BMI Guide", id: "solution" },
    { title: "Recommended Resources", id: "top-picks" },
    { title: "Frequently Asked Questions", id: "faq" },
    { title: "Testimonials", id: "testimonials" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-l-4 border-bmi-purple pl-4">
            Sitemap
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Welcome to the sitemap of the Women's BMI Guide website. This page provides an overview of all the pages and sections available on our site.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.path} className="flex items-center">
                    <FileText className="text-bmi-purple mr-2" size={18} />
                    <Link 
                      to={page.path} 
                      className="text-bmi-purple hover:text-bmi-dark-purple transition-colors"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Sections</h2>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id} className="flex items-center">
                    <ExternalLink className="text-bmi-purple mr-2" size={18} />
                    <a 
                      href={`/#${section.id}`} 
                      className="text-bmi-purple hover:text-bmi-dark-purple transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">XML Sitemap</h2>
            <p className="text-lg text-gray-700 mb-4">
              For search engines, a XML sitemap is available at:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <a 
                href="/sitemap.xml" 
                className="text-bmi-purple hover:text-bmi-dark-purple transition-colors font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://womensbmiguide.com/sitemap.xml
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sitemap;
