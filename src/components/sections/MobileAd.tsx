
import React from 'react';
import AdBanner from '@/components/AdBanner';

const MobileAd = () => {
  return (
    <div className="md:hidden flex justify-center py-4 w-full overflow-hidden">
      <AdBanner size="mobile-leaderboard" />
    </div>
  );
};

export default MobileAd;
