
import React from 'react';
import AdBanner from '@/components/AdBanner';

const SideAd = () => {
  return (
    <div className="hidden lg:block fixed right-0 top-1/4 z-20">
      <AdBanner size="wide-skyscraper" />
    </div>
  );
};

export default SideAd;
