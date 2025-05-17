
import React from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ id, title, children, className = '' }: ContentSectionProps) => {
  return (
    <section id={id} className={`py-10 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-bmi-purple pl-4">{title}</h2>
        <div className="content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
