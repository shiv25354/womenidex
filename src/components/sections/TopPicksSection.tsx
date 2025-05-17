
import React from 'react';
import ContentSection from '@/components/ContentSection';
import ProductCard from '@/components/ProductCard';
import AdBanner from '@/components/AdBanner';

const TopPicksSection = () => {
  return (
    <ContentSection id="top-picks" title="Recommended Resources" className="bg-white">
      <p className="text-lg text-gray-700 mb-8">
        To support your health journey, we've selected some of the best tools and resources to help you understand and manage your BMI effectively.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <ProductCard
          title="Smart Body Analyzer Scale"
          imagePath="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3"
          pros={["Measures BMI automatically", "Syncs with smartphone apps", "Tracks progress over time"]}
          cons={["More expensive than regular scales", "Requires battery replacement"]}
          link="#body-analyzer"
        />
        
        <ProductCard
          title="Women's Complete Health Guide"
          imagePath="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3"
          pros={["In-depth coverage of women's health", "Written by medical professionals", "Includes BMI and beyond"]}
          cons={["Extensive reading material", "Some medical terminology"]}
          link="#health-guide"
        />
        
        <ProductCard
          title="Nutritional Consultation Service"
          imagePath="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3"
          pros={["Personalized nutrition plans", "Professional guidance", "Regular follow-ups"]}
          cons={["Higher cost investment", "Requires commitment"]}
          link="#nutrition-service"
        />
      </div>
      
      {/* Banner Ad */}
      <div className="mt-10 flex justify-center w-full overflow-hidden">
        <AdBanner size="banner" />
      </div>
    </ContentSection>
  );
};

export default TopPicksSection;
