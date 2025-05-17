
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface ProductCardProps {
  title: string;
  imagePath: string;
  pros: string[];
  cons: string[];
  link: string;
}

const ProductCard = ({ title, imagePath, pros, cons, link }: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy" // Add lazy loading for better page speed
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="font-medium text-green-600 flex items-center gap-1 mb-2">
            <Check size={16} aria-hidden="true" /> Pros
          </h4>
          <ul className="space-y-1 pl-6 list-disc text-sm">
            {pros.map((pro, index) => (
              <li key={`pro-${index}`}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-red-600 flex items-center gap-1 mb-2">
            <X size={16} aria-hidden="true" /> Cons
          </h4>
          <ul className="space-y-1 pl-6 list-disc text-sm">
            {cons.map((con, index) => (
              <li key={`con-${index}`}>{con}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-bmi-purple hover:bg-bmi-dark-purple">
          <a href={link} aria-label={`Learn more about ${title}`}>Learn More</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
