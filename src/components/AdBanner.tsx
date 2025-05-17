
import React from 'react';

interface AdBannerProps {
  size: 'leaderboard' | 'large-skyscraper' | 'mobile-leaderboard' | 'wide-skyscraper' | 'banner' | 'medium-rectangle';
  className?: string;
}

const AdBanner = ({ size, className = '' }: AdBannerProps) => {
  // Define dimensions for each ad size
  const dimensions = {
    'leaderboard': { width: 728, height: 90, label: 'Leaderboard Banner (728×90)' },
    'large-skyscraper': { width: 300, height: 600, label: 'Large Skyscraper (300×600)' },
    'mobile-leaderboard': { width: 320, height: 50, label: 'Mobile Leaderboard (320×50)' },
    'wide-skyscraper': { width: 160, height: 600, label: 'Wide Skyscraper (160×600)' },
    'banner': { width: 468, height: 60, label: 'Banner (468×60)' },
    'medium-rectangle': { width: 300, height: 250, label: 'Medium Rectangle (300×250)' }
  };

  const { width, height, label } = dimensions[size];
  
  return (
    <div 
      className={`ad-container bg-gray-200 relative flex items-center justify-center ${className}`}
      style={{ 
        width: width + 'px', 
        height: height + 'px',
        maxWidth: '100%'
      }}
    >
      <div className="text-gray-500 text-sm text-center p-2">
        <span className="block">Advertisement</span>
        <span className="text-xs">{label}</span>
      </div>
      {/* Ad implementation would go here in a production environment */}
    </div>
  );
};

export default AdBanner;
